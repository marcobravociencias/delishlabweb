import React, {useState} from 'react';
import { StarIcon } from '@heroicons/react/20/solid'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import RecipeViewComponent from "./RecipeViewComponent";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Galletas Melcochudas', href: '#galletas_melcochudas'},
    { name: 'Galletas Mantequilla', href: '#galletas_mantequilla'},
    { name: 'Bebidas Calientes', href: '#bebidas_calientes'},
    { name: 'Iced Latte', href: '#iced_latte' },
    { name: 'Refreshers', href: '#refreshers' },
    { name: 'Can Frappes', href: '#can_frappes' },

]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]


const galletas_melcochudas = [
    {
        id: 1,
        name: 'Doble Chocolate',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 2,
        name: 'Cinammon Roll',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 3,
        name: ' Lotus',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 4,
        name: 'Oreo',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 5,
        name: 'Merengues de Limón',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 6,
        name: 'Kinder Bueno',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 7,
        name: 'Nutella',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 8,
        name: 'Chispas de Chocolate con Nuez',
        href: '#',
        price: '$69',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
    },

]

const galletas_mantequilla = [
    {
        id: 1,
        name: 'Chicas - 100 Gr',
        href: '#',
        price: '$75',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 2,
        name: 'Medianas - 250 Gr',
        href: '#',
        price: '$170',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 3,
        name: ' Grandes - 500 gr',
        href: '#',
        price: '$310',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 4,
        name: 'Jumbo - 1000 Gr',
        href: '#',
        price: '$580',
        description: '',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    }
]

const bebidas_calientes = [
    {
        id: 1,
        name: 'Café Americano',
        href: '#',
        price: '$95',
        description: 'Puro, fuerte y directo. El café negro que despierta tus sentidos y combina con todo, hasta con una galleta de mantequilla recién horneada.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 2,
        name: 'Latte',
        href: '#',
        price: '$98',
        description: 'Cremoso, suave y con la cantidad justa de café. Ideal para una tarde tranquila o para acompañar tu postre favorito.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 3,
        name: 'Caramel Macchiato',
        href: '#',
        price: '$113',
        description: 'Espuma ligera, caramelo dulce y café intenso. Cada sorbo es como un postre calientito (pero en taza).',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 4,
        name: 'Capuccino',
        href: '#',
        price: '$113',
        description: 'Clásico y espumoso, con esa mezcla perfecta de leche y café que te da justo lo que necesitas para consentirte.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 5,
        name: 'Chocolate',
        href: '#',
        price: '$87',
        description: 'Súper cremoso y con sabor real a chocolate. No hay mal día que no se cure con uno de estos.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 6,
        name: 'Chai Latte',
        href: '#',
        price: '$92',
        description: 'Aromático, especiado y reconfortante. Un chai con leche que te calienta el alma y te deja queriendo otro.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 7,
        name: 'Dirty Chai Latte',
        href: '#',
        price: '$105',
        description: 'El chai más atrevido: especias cálidas + un shot de espresso. Para los que aman los sabores intensos y el aroma a café recién hecho.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 8,
        name: 'Chocolate Blanco',
        href: '#',
        price: '$92',
        description: 'Suave, espumoso y dulce. Un chocolate blanco cremosito que se siente como un apapacho en taza.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 9,
        name: 'ChocoMenta Latte',
        href: '#',
        price: '$105',
        description: 'Chocolate blanco caliente con un sutil toque de menta. Refrescante, dulce y perfecto para los que aman los sabores diferentes',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 10,
        name: 'Matcha Latte',
        href: '#',
        price: '$92',
        description: 'Cremoso, suave y con ese sabor herbal que tanto amamos. Refrescante, ligero y lleno de matcha vibes.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 11,
        name: 'Dirty Matcha Latte',
        href: '#',
        price: '$105',
        description: 'Matcha + un shot de espresso. Una mezcla energizante, cremosa y perfecta para quienes no pueden decidir entre té y café.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 12,
        name: 'Chocolate Premium',
        href: '#',
        price: '$115',
        description: 'Chocolate real, derretido lentamente con leche para lograr una textura cremosa y un sabor profundo. Intenso, reconfortante y perfectamente espeso. Ideal para los que aman el chocolate de verdad.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    }
]

const bebidas_frappes = [
    {
        id: 1,
        name: 'Pink Lemonade',
        href: '#',
        price: '$95',
        description: 'Refrescante, cítrica y con ese color rosa que enamora.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 2,
        name: 'Pink Cherry Lemonade',
        href: '#',
        price: '$98',
        description: 'La clásica limonada rosa con un toque dulce de cereza. Fresca, frutal y deliciosa.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 3,
        name: 'Mango Maracuyá',
        href: '#',
        price: '$113',
        description: 'Exótico, tropical y súper refrescante. Una mezcla vibrante de mango con maracuyá, ideal para levantar el ánimo.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 4,
        name: 'Fresas con Crema',
        href: '#',
        price: '$113',
        description: 'Trozos de fresa natural y una base cremosa. Dulce, suave y para antojo serio.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 5,
        name: 'Cookies and Cream',
        href: '#',
        price: '$87',
        description: 'Galletas Oreo trituradas en una mezcla helada y cremosa. ¡Un clásico que siempre se antoja!',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 6,
        name: 'Chai Frappé',
        href: '#',
        price: '$92',
        description: 'Nuestro chai especiado ahora en versión frappé. Frío, aromático y con ese toque cálido de canela y cardamomo.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 7,
        name: 'Mazapán',
        href: '#',
        price: '$105',
        description: 'Sabe a postre mexicano de la infancia, pero en frappé. Cremoso, dulce y con todo el sabor del mazapán.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 8,
        name: 'Capuccino Caramel',
        href: '#',
        price: '$92',
        description: 'Café frío con caramelo y mucho cuerpo. Cremoso, dulce y perfecto para quienes aman los frappés cafecitos.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    },
    {
        id: 9,
        name: 'Taro',
        href: '#',
        price: '$105',
        description: 'Cremoso, con un sabor suave y único, ligeramente dulce y floral.',
        imageAlt: '',
        imageSrc: 'https://media.istockphoto.com/id/1395140920/es/foto/ensalada-de-frutas-frescas-de-melocot%C3%B3n-ar%C3%A1ndanos-y-r%C3%BAcula-con-queso-y-nueces-de-almendra.jpg?s=2048x2048&w=is&k=20&c=dtbse_Tr2nwtiAOK5dK6zxdufjrsjT1NmjSL5XvxvVM=',
        rating: 5,
        reviewCount: 12,
    }
]

const stats = [
    { name: 'Recetas Preparadas', stat: '85', previousStat: '63', change: '5%', changeType: 'increase' },
    { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
    { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

function RecetasViewComponent() {

    const [selectedRecipe, setSelectedRecipe] = useState<{ id: number, name: string } | null>(null);

    function get_recipe(id_recipe: number, name_recipe: string) {
        setSelectedRecipe({ id: id_recipe, name: name_recipe });
    }



    return (
        <div className="">
            {selectedRecipe && (
                <RecipeViewComponent
                    id={selectedRecipe?.id}
                    name={selectedRecipe?.name}
                    onClose={() => setSelectedRecipe(null)}
                />
            )}
            {/******************/}
            <div>
                <dl className="mt-5 grid grid-cols-1 divide-teal-800 overflow-hidden rounded-lg bg-gray-800 shadow-sm md:grid-cols-3 md:divide-x md:divide-y-0">
                    {stats.map((item) => (
                        <div key={item.name} className="px-4 py-5 sm:p-6">
                            <dt className="text-base font-normal text-white">{item.name}</dt>
                            <dd className="mt-1 flex items-baseline justify-center md:block lg:flex">
                                <div className="flex items-baseline text-2xl font-semibold text-sky-600 mb-2">
                                    {item.stat}
                                    <span
                                        className="ml-2 text-sm font-medium text-gray-50">de {item.previousStat}</span>
                                </div>
                            </dd>
                            <dd>
                                <div
                                    className={classNames(
                                        item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                                        'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                                    )}
                                >
                                    {item.changeType === 'increase' ? (
                                        <ArrowUpIcon aria-hidden="true"
                                                     className="mr-0.5 -ml-1 size-5 shrink-0 self-center text-green-500"/>
                                    ) : (
                                        <ArrowDownIcon aria-hidden="true"
                                                       className="mr-0.5 -ml-1 size-5 shrink-0 self-center text-red-500"/>
                                    )}

                                    <span
                                        className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                    {item.change}
                                </div>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
            {/******************/}
            <Disclosure as="nav" className="bg-gray-800 rounded-lg my-4">
                <div className="mx-auto max-w-7xl overflow-x-auto">
                    <div className="flex h-16 justify-between">
                        <div className="flex snap-x">
                            <div className="mx-6 flex items-center space-x-4 snap-center">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="bg-gray-950 text-white min-w-45 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>
            {/******************/}
            <div className="bg-gray-800 mt-4 rounded-lg">
                <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                    <h2 className="text-2xl my-4 text-white" id="galletas_melcochudas">Galletas Melcochudas</h2>

                    <div className="-mx-px my-4 grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {galletas_melcochudas.map((product) => (
                            <div key={product.id}
                                 className="group bg-teal-900 relative rounded-lg border border-teal-950 m-1 p-4 sm:p-6"
                                 onClick={() => get_recipe(product.id, product.name)}   >
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square rounded-lg object-cover group-hover:opacity-75"
                                />
                                <div className="pt-10 pb-4 text-center">
                                    <h3 className="text-sm font-medium text-white">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="mt-3 flex flex-col items-center">
                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                        'size-5 shrink-0',
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-white">{product.reviewCount} reviews</p>
                                    </div>
                                    <p className="mt-4 text-lg font-medium text-teal-500">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl py-2 text-white -top-full" id="galletas_mantequilla">Galletas Mantequilla</h2>

                    <div className="-mx-px my-4 grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {galletas_mantequilla.map((product) => (
                            <div key={product.id}
                                 className="group relative rounded-lg border border-[#ccc] m-1 p-4 sm:p-6">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square rounded-lg object-cover group-hover:opacity-75"
                                />
                                <div className="pt-10 pb-4 text-center">
                                    <h3 className="text-sm font-medium text-white">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="mt-3 flex flex-col items-center">
                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                        'size-5 shrink-0',
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-white">{product.reviewCount} reviews</p>
                                    </div>
                                    <p className="mt-4 text-lg font-medium text-teal-500">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-2xl my-4 text-white" id="bebidas_calientes">Bebidas Calientes</h2>
                    <div className="-mx-px my-4 grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {bebidas_calientes.map((product) => (
                            <div key={product.id}
                                 className="group relative rounded-lg border border-[#ccc] m-1 p-4 sm:p-6">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square rounded-lg object-cover group-hover:opacity-75"
                                />
                                <div className="pt-10 pb-4 text-center">
                                    <h3 className="text-sm font-medium text-white">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="mt-3 flex flex-col items-center">
                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                        'size-5 shrink-0',
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-white">{product.reviewCount} reviews</p>
                                    </div>
                                    <p className="mt-4 text-lg font-medium text-teal-500">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-2xl my-4 text-white" id="can_frappes">Can Frappe</h2>
                    <div className="-mx-px my-4 grid grid-cols-2  sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {bebidas_frappes.map((product) => (
                            <div key={product.id}
                                 className="group relative rounded-lg border border-teal-500 m-1 p-4 sm:p-6">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square rounded-lg object-cover group-hover:opacity-75"
                                />
                                <div className="pt-10 pb-4 text-center">
                                    <h3 className="text-sm font-medium text-white">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="mt-3 flex flex-col items-center">
                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                        'size-5 shrink-0',
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-white">{product.reviewCount} reviews</p>
                                    </div>
                                    <p className="mt-4 text-lg font-medium text-teal-500">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecetasViewComponent;