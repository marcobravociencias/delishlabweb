import React from 'react';

const galletas_melcochudas = [
    {
        id: 1,
        name: 'Doble Chocolate',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/DobleChocolate.png'),
        imageAlt: '',
    },
    {
        id: 2,
        name: 'Cinammon Roll',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/CinamonRoll.png'),
        imageAlt: '',
    },
    {
        id: 3,
        name: ' Lotus',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/Lotus.png'),
        imageAlt: '',
    },
    {
        id: 4,
        name: 'Oreo',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/Oreo.png'),
        imageAlt: '',
    },
    {
        id: 5,
        name: 'Merengues de Limón',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/MerenguesLimon.png'),
        imageAlt: '',
    },
    {
        id: 6,
        name: 'Kinder Bueno',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/KinderBueno.png'),
        imageAlt: '',
    },
    {
        id: 7,
        name: 'Nutella',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/Nutella.png'),
        imageAlt: '',
    },
    {
        id: 8,
        name: 'Chispas de Chocolate con Nuez',
        href: '#',
        price: '$69',
        description: '',
        imageSrc: require('../img/galletas_melcochudas/ChispasChocolateConNuez.png'),
        imageAlt: '',
    }

]

const galletas_mantequilla = [
        {
            id: 1,
            name: 'Chicas - 100 Gr',
            href: '#',
            price: '$75',
            description: '',
            imageSrc: require('../img/galletas_mantequilla/Mantequilla.png'),
            imageAlt: '',
        },
        {
            id: 2,
            name: 'Medianas - 250 Gr',
            href: '#',
            price: '$170',
            description: '',
            imageSrc: require('../img/galletas_mantequilla/Mantequilla.png'),
            imageAlt: '',
        },
        {
            id: 3,
            name: ' Grandes - 500 gr',
            href: '#',
            price: '$310',
            description: '',
            imageSrc: require('../img/galletas_mantequilla/Mantequilla.png'),
            imageAlt: '',
        },
        {
            id: 4,
            name: 'Jumbo - 1000 Gr',
            href: '#',
            price: '$580',
            description: '',
            imageSrc: require('../img/galletas_mantequilla/Mantequilla.png'),
            imageAlt: '',
        }
    ]

const bebidas_calientes = [
    {
        id: 1,
        name: 'Café Americano',
        href: '#',
        price: '$95',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Americano.png'),
        imageAlt: '',
    },
    {
        id: 2,
        name: 'Latte',
        href: '#',
        price: '$98',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    },
    {
        id: 3,
        name: 'Caramel Macchiato',
        href: '#',
        price: '$113',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Caramel Macchiato.png'),
        imageAlt: '',
    },
    {
        id: 4,
        name: 'Capuccino',
        href: '#',
        price: '$113',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Capuccino.png'),
        imageAlt: '',
    },
    {
        id: 5,
        name: 'Chocolate',
        href: '#',
        price: '$87',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Chocolate.png'),
        imageAlt: '',
    },
    {
        id: 6,
        name: 'Chai Latte',
        href: '#',
        price: '$92',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    },
    {
        id: 7,
        name: 'Dirty Chai Latte',
        href: '#',
        price: '$105',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    },
    {
        id: 8,
        name: 'Chocolate Blanco',
        href: '#',
        price: '$92',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    },
    {
        id: 9,
        name: 'ChocoMenta Latte',
        href: '#',
        price: '$105',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    },
    {
        id: 10,
        name: 'Matcha Latte',
        href: '#',
        price: '$92',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    },
    {
        id: 11,
        name: 'Dirty Matcha Latte',
        href: '#',
        price: '$105',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    },
    {
        id: 12,
        name: 'Chocolate Premium',
        href: '#',
        price: '$115',
        description: '',
        imageSrc: require('../img/bebidas_calientes/Latte.png'),
        imageAlt: '',
    }
]

function ProductComponents() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 id="products-heading" className="sr-only">
                    Productos
                </h2>
                <h1 className="pb-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Galletas Melcochudas</h1>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {galletas_melcochudas.map((galleta) => (
                        <a key={galleta.id} href={galleta.href} className="group">
                            <img
                                alt={galleta.imageAlt}
                                src={galleta.imageSrc}
                                className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-square"
                            />
                            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                <h3>{galleta.name}</h3>
                                <p>{galleta.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 italic">{galleta.description}</p>
                        </a>
                    ))}
                </div>

                <h1 className="py-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Galletas de Mantequilla</h1>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {galletas_mantequilla.map((galletaM) => (
                        <a key={galletaM.id} href={galletaM.href} className="group">
                            <img
                                alt={galletaM.imageAlt}
                                src={galletaM.imageSrc}
                                className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-square"
                            />
                            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                <h3>{galletaM.name}</h3>
                                <p>{galletaM.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 italic">{galletaM.description}</p>
                        </a>
                    ))}
                </div>

                <h1 className="py-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">Bebidas Calientes</h1>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {bebidas_calientes.map((bebidaC) => (
                        <a key={bebidaC.id} href={bebidaC.href} className="group">
                            <img
                                alt={bebidaC.imageAlt}
                                src={bebidaC.imageSrc}
                                className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75 sm:aspect-square"
                            />
                            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                <h3>{bebidaC.name}</h3>
                                <p>{bebidaC.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 italic">{bebidaC.description}</p>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default ProductComponents;