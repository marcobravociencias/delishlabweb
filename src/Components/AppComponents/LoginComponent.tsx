import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
    const navigate = useNavigate();
    const [formDataLogin, setFormDataLogin] = useState({
        correo:'',
        contraseña:''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormDataLogin(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formDataLogin);
        try {
            {/* https://apis.grupobrame.com/heroes/api/login*/}
            const response = await fetch("http://127.0.0.1:5000/api/login", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    correo: formDataLogin.correo,
                    contraseña: formDataLogin.contraseña,
                })
            });

            const result = await response.json();
            if (result.success) {
                localStorage.removeItem('usuario_data'); // Borra el usuario guardado
                localStorage.setItem('usuario_data', JSON.stringify(result));
                console.log(localStorage.getItem('usuario_data'));
                window.scrollTo(0, 0);
                navigate('/dashboard');
                window.location.reload();

            } else {
                alert("Error: " + result.message);
            }
        } catch (err) {
            alert("Error al iniciar sesión: " + err);
        }
    };


    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Delish Lab"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=teal&shade=500"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Delish Lab</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="correo" className="block text-sm/6 font-medium text-white">
                            Correo
                        </label>
                        <div className="mt-2">
                            <input
                                id="correo"
                                name="correo"
                                type="email"
                                required
                                value={formDataLogin.correo}
                                onChange={handleChange}
                                autoComplete="email"
                                placeholder="juan@correo.com"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="contraseña" className="block text-sm/6 font-medium text-white">
                                Contraseña
                            </label>
                            <div className="text-xs">
                                <a href="#" className="font-semibold text-teal-400 hover:text-teal-300">
                                    Reestablecer Contraseña
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-2">
                            <input
                                id="contraseña"
                                name="contraseña"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="password"
                                value={formDataLogin.contraseña}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    // Ojo abierto
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="teal">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ) : (
                                    // Ojo tachado
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.956 9.956 0 012.341-3.948m3.507-2.507A9.956 9.956 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.967 9.967 0 01-4.205 5.568M15 12a3 3 0 00-4.243-2.828M3 3l18 18" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={handleSubmit}
                            className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;

/**
 * scroll en 0 en cada recarga de pagina
 * */