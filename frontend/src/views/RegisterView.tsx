import { Link } from "react-router-dom"

export default function RegisterView() {
    return (
        <>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    Crear cuenta
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                    Completa tus datos para registrarte
                </p>
            </div>

            <form className="space-y-5">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                    >
                        Nombre
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3
                                   outline-none transition
                                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                </div>

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

                <div>
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-slate-700 mb-2"
                    >
                        Confirmar contraseña
                    </label>

                    <input
                        id="password_confirmation"
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
                    Crear cuenta
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
                ¿Ya tienes una cuenta?{" "}
                <Link
                    to="/auth/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                    Iniciar sesión
                </Link>
            </p>
        </>
    )
}
