import React from 'react';

function HeroComponent() {
    const ir_menu = () => {
        window.location.href = "#menu_productos";
    }
    return (
        <div className="mt-24 overflow-hidden sm:mt-36">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 -gap-y-16 lg:gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Delish Lab</h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="mt-6 text-xl font-medium text-pretty text-gray-700 sm:text-xl">
                                Donde cada bocado es una explosión de sabor único.
                            </p>
                            <p className="mt-6 text-base font-medium text-pretty text-gray-600 sm:text-base/8">
                                Somos una pastelería artesanal en CDMX especializada en galletas melcochudas de sabores únicos y pasteles irresistibles.
                                Cada creación está hecha con ingredientes reales, sin conservadores y con muchísimo amor.
                                Haz tu pedido en línea y consiente tu antojo con lo más delicioso de la repostería.
                            </p>
                        </div>
                        <div className="pt-12">
                            <button
                                onClick={ir_menu}
                                type="button"
                                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-200"
                            >
                                Ver Menú
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents -pt-12">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                    className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroComponent;