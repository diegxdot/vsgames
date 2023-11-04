import React from 'react'
import logoVision from '../assets/img/ojo-abierto.png';

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-bg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={logoVision}
            alt="VISIONGAMES"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-wh">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-wh">
                Correo electronico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full bg-bg rounded-md border-0 py-1.5 text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-wh">
                  Contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-brand hover:text-dbrand">
                    ¿Olvidó su contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full bg-bg rounded-md border-0 py-1.5 text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-brand px-3 py-1.5 text-sm font-semibold leading-6 text-bg shadow-sm hover:bg-dbrand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresa
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-wh">
            ¿No tienes cuenta?{' '}
            <a href="#" className="font-semibold leading-6 text-brand hover:text-dbrand">
              Crea una aquí
            </a>
          </p>
        </div>
      </div>
  )
}

export default Login