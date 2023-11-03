import React from "react";

const juegos = [
  {
    id: 1,
    name: "WWE 2k22",
    href: "#",
    imageSrc:
      "https://imgs.search.brave.com/LNNh_9mulGObqUCQJY-HzuMP5jCLLOlDvOsUtjg-1k4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFvQXczcnRtSkwu/X0FDLl9TUjE4MCwy/MzAuanBn",
    imageAlt: "Caratula de juego",
    price: "300MXN",
    color: "Región: México",
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    href: "#",
    imageSrc:
      "https://imgs.search.brave.com/2eVK4pOiuZzTr5yIXiYeunOWva0dubiHy2M3CQqBMq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxS0o4UmdGM0dM/LmpwZw",
    imageAlt: "Caratula de juego",
    price: "300MXN",
    color: "Región: México",
  },
  {
    id: 3,
    name: "Call of Duty Modern Warfare III",
    href: "#",
    imageSrc:
      "https://imgs.search.brave.com/fssMj5IqfqjkpVRpsEqVb7ONDTRp7RZGGWcwzrfWDwE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxTGRtZy1ZNFFM/LmpwZw",
    imageAlt: "Caratula de juego",
    price: "300MXN",
    color: "Región: México",
  },
  {
    id: 4,
    name: "Crash Bandicoot N-Sane Trilogy",
    href: "#",
    imageSrc:
      "https://imgs.search.brave.com/azn7AobLiZ8SOlQfbywc8IGGDeCwg4qY7QuSc_wazM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxamtnSEhNQmxM/LmpwZw",
    imageAlt: "Caratula de juego",
    price: "300MXN",
    color: "Región: México",
  },
  // More products...
];

const Videogames = (props) => {
  return (
    <div className={props.bg}>
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-wh">
          {props.titulo}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {juegos.map((juego) => (
            <div key={juego.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-bg lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={juego.imageSrc}
                  alt={juego.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-900 dark:text-wh">
                    <a href={juego.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {juego.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-wh">
                    {juego.color}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-wh">
                  {juego.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videogames;
