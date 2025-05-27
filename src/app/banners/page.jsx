import React from "react"
import Image from "next/image"  
export default function BannersPage() {
return (
       <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Image
            src="/images/logo-gripper.png"
            alt="GripperPrint Logo"
            width={160}
            height={80}
            className="h-24 w-auto"
            unoptimized
        />
          <nav className="hidden md:flex gap-6">
            <a href="#beneficios" className="text-sm font-medium hover:text-fuchsia-600">Beneficios</a>
            <a href="#materiales" className="text-sm font-medium hover:text-fuchsia-600">Materiales</a>
            <a href="#galeria" className="text-sm font-medium hover:text-fuchsia-600">Galería</a>
            <a href="#contacto" className="text-sm font-medium hover:text-fuchsia-600">Contacto</a>
          </nav>
          <a href="https://wa.me/+50766340008" target="_blank" className="hidden md:flex">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Contáctanos por WhatsApp
            </button>
          </a>
        </div>
      </header>

      {/* Línea decorativa */}
      <div className="bg-[#4285F4] py-2 text-center text-white text-sm font-medium">
        Impresión premium, entrega rápida y atención personalizada.{" "}
        <a href="https://wa.me/+50766340008" target="_blank" className="underline hover:text-fuchsia-200">
          Escríbenos
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-fuchsia-50 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="relative w-full max-w-5xl mx-auto">
          <img
            src="/images/banner-principal.png"
            alt="Banners Roll Up de alta calidad"
            className="object-contain mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-6 text-white">
              <span className="inline-block px-3 py-1 bg-[#EA4335] text-white rounded-full text-sm font-medium mb-2">
                Acabado Premium
              </span>
              <h3 className="text-xl font-bold">Material PET de textura lisa</h3>
            </div>
          </div>
        </div>
        {/* Degradados decorativos */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-fuchsia-400 rounded-full blur-3xl opacity-20" />
      </section>
    </div>
  );
}