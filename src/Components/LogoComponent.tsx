import React from 'react';

function LogoComponent() {
    return (
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Our customers love us
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
                    Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi
                    adipisicing officia excepteur tempor deserunt.
                </p>
                <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
                    <img
                        alt="Transistor"
                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Reform"
                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="Tuple"
                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <img
                        alt="SavvyCal"
                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />
                    <img
                        alt="Statamic"
                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
                <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                        className="aspect-1404/767 w-351 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                    />
                </div>
            </div>
        </div>
    );
}

export default LogoComponent;