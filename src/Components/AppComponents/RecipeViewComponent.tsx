import React, { useEffect, useState } from 'react';

interface RecipeViewProps {
    id: number;
    name: string;
    onClose: () => void;
}

let receta_api = [
    {
        id: 1,
        name: "Pizza",
        description: "Pizza de queso",
        ingredients: [
            {
                id: 1,
                name: "Queso",
                quantity: 500,
                unit: "Gr"
            },
            {
                id: 2,
                name: "Masa",
                quantity: 2,
                unit: "Kg"
            },
            {
                id: 3,
                name: "Aceite de Oliva",
                quantity: 50,
                unit: "Ml"
            },
            {
                id: 4,
                name: "Mix Hierbas Finas",
                quantity: 2,
                unit: "Cdas"
            }
        ]
    }
]

const RecipeViewComponent: React.FC<RecipeViewProps> = ({ id, name, onClose }) => {
    const [recipe, setRecipe] = useState<any>("null");
    const [loading, setLoading] = useState(false);

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
                    <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative">
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
                                {receta_api.map((recipe_item) => (
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">Modal Receta</h2>
                                        <p className="text-gray-700">Cosas Receta</p>
                                        <p>{recipe_item.description}</p>
                                        <p>{recipe_item.name}</p>
                                        <p>{recipe_item.ingredients.map(
                                            (ingredient) => (
                                                <div>
                                                    <p>{ingredient.name}</p>
                                                    <p>{ingredient.quantity}</p>
                                                    <p>{ingredient.unit}</p>
                                                </div>
                                            )
                                        )}</p>
                                        <p>{recipe_item.id}</p>
                                    </div>

                                    )
                                )}
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