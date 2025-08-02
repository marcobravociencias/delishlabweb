import React, { useEffect, useState } from 'react';

interface RecipeViewProps {
    id: number;
    name: string;
    onClose: () => void;
}

const RecipeViewComponent: React.FC<RecipeViewProps> = ({ id, name, onClose }) => {
    const [recipe, setRecipe] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    /*useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`/api/get_recipe?id=${id}&name=${encodeURIComponent(name)}`);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [id, name]);*/

    // Only show dialog/modal when recipe is fetched (loading is false)
    return (
        <>
            {!loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>
                        {!recipe ? (
                            <p>No se encontró la receta.</p>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold mb-2">Modal Receta</h2>
                                <p className="text-gray-700">Cosas Receta</p>
                                {/* Agrega más campos según sea necesario */}
                            </>
                        )}
                    </div>
                </div>
            )}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
                        <p>Cargando receta...</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecipeViewComponent;