import React from "react";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-fuchsia-100 text-center px-6">
      <div className="max-w-xl space-y-6">
        <img src="/images/logo.png" alt="GripperPrint Logo" className="mx-auto h-24" />

        <h1 className="text-4xl font-bold text-blue-700">Sitio en construcción</h1>

        <p className="text-lg text-gray-700">
          Impresión de <strong>Papelería</strong>, <strong>Banners</strong>, <strong>Material POP</strong>, <strong>Afiches</strong> y <strong>Canvas</strong>.<br />
          Atención rápida, calidad premium.  
        </p>

        <div className="space-y-4">
          <a
            href="https://wa.me/50766340008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Escríbenos por WhatsApp
          </a>

          <p className="text-sm text-gray-600">
            También puedes escribirnos a <br />
            <a href="mailto:ventasgripper@gmail.com" className="underline text-blue-600">
              ventasgripper@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
