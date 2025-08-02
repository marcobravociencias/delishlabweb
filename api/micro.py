from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
import psycopg2
import psycopg2.extras

from werkzeug.security import generate_password_hash, check_password_hash
# Ruta para subir evidencia y guardar en base de datos
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app, origins="*", methods=["GET", "POST", "OPTIONS"], allow_headers="*")

# JWT configuration
app.config["JWT_SECRET_KEY"] = "clave-super-secreta"
jwt = JWTManager(app)

# Explicitly set CORS headers for production
@app.after_request
def after_request(response):
    origin = request.headers.get('Origin')
    if origin in ["*"]:
        response.headers.add('Access-Control-Allow-Origin', origin)
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response



db_config = {
    'host': 'localhost',
    'port': 5432,
    'user': 'darkalien',
    'password': '3080alien.!',
    'dbname': 'delish'
}

ruta_perfil = 'img/perfil'
ruta_evidencias = 'img/evidencias'


# Ruta para autenticación de usuarios
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    print(data)
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        cursor.execute("SELECT id, correo, usuarios.password_hash, nombre_completo, telefono, username, rol_id, sucursal_id  FROM usuarios WHERE logical_lock = true and correo = %s", (data['correo'],))
        user = cursor.fetchone()

        if not user or not check_password_hash(user['password_hash'], data['contraseña']):
            return jsonify({'success': False, 'message': 'Correo o contraseña incorrectos'}), 401

        access_token = create_access_token(identity=user['id'])
        return jsonify({'success': True, 'token': access_token, 'correo': user['correo'], 'nombre_completo': user.get('nombre_completo', ''), 'telefono': user.get('telefono', ''), 'username': user.get('username', ''), 'rol_id': user.get('rol_id', ''),  'sucursal_id': user.get('sucursal_id', '')})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)})
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
