import React from 'react';
import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    CakeIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import RecetasViewComponent from "./RecetasViewComponent";




const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
    { name: 'Mi Perfil', href: '#' },
    { name: 'Cerrar Sesión', href: '#' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


let usuario = JSON.parse(localStorage.getItem('usuario_data') || '{}');


function DashViewComponent() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    // Navigation state and handler
    const [navigation, setNavigation] = useState([
      { name: 'Dashboard', ruta: '#', icon: HomeIcon, current: true },
      { name: 'Usuarios', ruta: '#', icon: UsersIcon, current: false },
      { name: 'Recetas', ruta: '#', icon: CakeIcon, current: false },
      { name: 'Insumos', ruta: '#', icon: CalendarIcon, current: false },
      { name: 'Ventas', ruta: '#', icon: DocumentDuplicateIcon, current: false },
      { name: 'Reportes', ruta: '#', icon: ChartPieIcon, current: false },
    ]);

    const handleNavigationClick = (name: string) => {
      setNavigation(prev =>
        prev.map(item => ({
          ...item,
          current: item.name === name
        }))
      );
    };

    // Section switching logic
    const currentSection = navigation.find(item => item.current)?.name;
    let contentComponent = null;
    switch (currentSection) {
      case 'Dashboard':
        contentComponent = <div className="text-white">Contenido del Dashboard</div>;
        break;
      case 'Usuarios':
        contentComponent = <div className="text-white">Contenido de Usuarios</div>;
        break;
      case 'Recetas':
        contentComponent = <RecetasViewComponent />;
        break;
      case 'Insumos':
        contentComponent = <div className="text-white">Contenido de Insumos</div>;
        break;
      case 'Ventas':
        contentComponent = <div className="text-white">Contenido de Ventas</div>;
        break;
      case 'Reportes':
        contentComponent = <div className="text-white">Contenido de Reportes</div>;
        break;
      default:
        contentComponent = <div className="text-white">Selecciona una sección</div>;
    }

    return (
        <div>
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                    <span className="sr-only">Cerrar Menú</span>
                                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                </button>
                            </div>
                        </TransitionChild>

                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#6A5A77] px-6 pb-4 ring-1 ring-white/10">
                            <div className="flex h-16 shrink-0 items-center">
                                <img
                                    alt="Delish Lab"
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-8 w-auto"
                                />
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {navigation.map((item) => (
                                                <li key={item.name}>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleNavigationClick(item.name)}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-800 text-white'
                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full text-left'
                                                        )}
                                                    >
                                                        <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                                        {item.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
                                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                                            {teams.map((team) => (
                                                <li key={team.name}>
                                                    <a
                                                        href={team.href}
                                                        className={classNames(
                                                            team.current
                                                                ? 'bg-gray-800 text-white'
                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                        )}
                                                    >
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                {team.initial}
                              </span>
                                                        <span className="truncate">{team.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="mt-auto">
                                        <a
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                                        >
                                            <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                                            Configuración
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            className="h-8 w-auto"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <button
                                                type="button"
                                                onClick={() => handleNavigationClick(item.name)}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-800 text-white'
                                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold w-full text-left'
                                                )}
                                            >
                                                <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                                {item.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="mt-auto">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                                >
                                    <Cog6ToothIcon aria-hidden="true" className="size-6 shrink-0" />
                                    Configuración
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-teal-800 bg-gray-900 px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Separator */}
                    <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <div className="grid flex-1 grid-cols-1">
                            {/*<form action="" className="grid flex-1 grid-cols-1">
                                <input
                                    name="search"
                                    type="search"
                                    placeholder="Buscar"
                                    aria-label="Search"
                                    className="col-start-1 row-start-1 block size-full bg-gray-900 pl-8 text-base text-white outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                                />
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                                />
                            </form>*/}
                        </div>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                                                        {/* Separator */}
                            <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <MenuButton className="relative flex items-center">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Abrir Menú de Usuario</span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="size-10 rounded-full bg-gray-50"
                                    />
                                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-white">
                          {usuario.nombre_completo}
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                    </span>
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-gray-800 py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a
                                                href={item.href}
                                                className="block px-3 py-1 text-sm/6 text-white data-focus:bg-teal-700 data-focus:outline-hidden"
                                            >
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <main className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                      {contentComponent}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DashViewComponent;