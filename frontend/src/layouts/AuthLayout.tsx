import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">

                {/* Cabecera compartida */}
                <div className="text-center mb-8">

                    <img src="/logo.svg" alt="DevTree" />

                    <p className="mt-2 text-slate-300">
                        Administra tus enlaces en un solo lugar
                    </p>
                </div>

                {/* Tarjeta compartida */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <Outlet />
                </div>

                {/* Footer compartido */}
                <p className="mt-6 text-center text-sm text-slate-500">
                    © 2026 DevTree
                </p>

            </div>
        </div>
    )
}