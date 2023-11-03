import { Fragment, useState } from "react";
import logoVision from "../assets/img/ojo-abierto.png";
import {
  Dialog,
  Popover,
  Transition,
  Tab
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "categorias",
      name: "Categorias",
      featured: [
        {
          name: "Nuevos Juegos",
          href: "#",
          imageSrc:
            "../assets/img/cod.webp",
          imageAlt:
            "Caratula de juego",
        },
        {
          name: "Juegos en tendencia",
          href: "#",
          imageSrc:
            "../assets/img/cod.webp",
          imageAlt:
            "Caratula de juego",
        },
      ],
      sections: [
        {
          id: "catejuegos",
          name: "Categorias Populares",
          items: [
            { name: "Shooters", href: "#" },
            { name: "Acción", href: "#" },
            { name: "Aventura", href: "#" },
            { name: "Simuladores", href: "#" },
            { name: "RPG", href: "#" },
            { name: "Carreras", href: "#" },
            { name: "Retro", href: "#" },
            { name: "Gera", href: "#" },
            { name: "Ver todos", href: "#" },
          ],
        },
        {
          id: "otrcat",
          name: "Otras Categorias",
          items: [
            { name: "Miedo", href: "#" },
            { name: "Rol", href: "#" },
            { name: "Historia textual", href: "#" },
            { name: "Familia", href: "#" },
            { name: "VR", href: "#" },
            { name: "Peleas", href: "#" },
          ],
        },
        {
          id: "publisher",
          name: "De Publishers Reconocidos",
          items: [
            { name: "Rockstar Games", href: "#" },
            { name: "EA", href: "#" },
            { name: "Ubisoft", href: "#" },
            { name: "2k", href: "#" },
            { name: "Activision", href: "#" },
          ],
        },
      ],
    },
    {
      id: "precio",
      name: "Por Precio",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "filtro",
          name: "Filtrado por precio",
          items: [
            { name: "Menos de 100MXN", href: "#" },
            { name: "Menos de 100MXN", href: "#" },
            { name: "Menos de 100MXN", href: "#" },
            { name: "Menos de 100MXN", href: "#" },
            { name: "Menos de 100MXN", href: "#" },
            { name: "Menos de 100MXN", href: "#" },
            { name: "Menos de 100MXN", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Catalogo completo", href: "#" },
    { name: "Acerca de nosotros", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Appbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-bg">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black dark:bg-dbg bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-bg pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-wh"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-bg">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600 dark:text-wh"
                                : "border-transparent text-gray-900 dark:text-brand",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 dark:bg-bg group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900 dark:text-wh"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Compra ahora
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900 dark:text-wh"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500 dark:text-wh"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-bg px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900 dark:text-wh"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-bg px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900 dark:text-wh"
                    >
                      Inicia Sesión
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900 dark:text-wh"
                    >
                      Crea una cuenta
                    </a>
                  </div>
                </div>

                <div className="border-t border-bg px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-mexico.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900 dark:text-wh">
                      MXN
                    </span>
                    <span className="sr-only">, cambia la moneda</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white dark:bg-bg">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-bg p-2 text-gray-400 dark:text-wh lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Abrir menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Visiongames</span>
                  <img
                    className="h-8 w-auto"
                    src={logoVision}
                    alt="visiongames"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-brand text-brand"
                                  : "border-transparent text-wh hover:text-dbrand",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 dark:text-wh">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white dark:bg-bg shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white dark:bg-bg">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 dark:bg-bg group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900 dark:text-wh"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900 dark:text-wh"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 dark:text-wh hover:text-gray-800 dark:hover:text-brand"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 dark:text-wh hover:text-gray-800 dark:hover:text-brand"
                  >
                    Inicia Sesión
                  </a>
                  <span className="h-6 w-px bg-bg" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 dark:text-wh hover:text-gray-800 dark:hover:text-brand"
                  >
                    Crea una cuenta
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 dark:text-wh hover:text-gray-800 dark:hover:text-brand"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-mexico.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">MXN</span>
                    <span className="sr-only">, cambia la moneda</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-wh hover:text-brand">
                    <span className="sr-only">Busqueda</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingCartIcon
                      className="h-6 w-6 flex-shrink-0 text-wh group-hover:text-brand"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-wh group-hover:text-dbrand">
                      0
                    </span>
                    <span className="sr-only">juegos en carrito, ver carrito</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Appbar;
