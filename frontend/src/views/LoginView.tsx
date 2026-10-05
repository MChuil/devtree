import { Link } from "react-router-dom"

export default function LoginView() {
    return (
       <>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    Iniciar sesión
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                    Ingresa tus datos para acceder a tu cuenta
                </p>
            </div>

            <form className="space-y-5">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                    >
                        Correo electrónico
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3
                                   outline-none transition
                                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-slate-700 mb-2"
                    >
                        Contraseña
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3
                                   outline-none transition
                                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-indigo-600 py-3 font-semibold
                               text-white transition hover:bg-indigo-700
                               focus:outline-none focus:ring-2
                               focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Iniciar sesión
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
                ¿No tienes una cuenta?{" "}
                <Link
                    to="/auth/register"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                    Crear cuenta
                </Link>
            </p>
        </>
    )
}