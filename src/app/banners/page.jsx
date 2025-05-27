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
      <section aria-label="Llamado a la acción inmediato" className="bg-[#4285F4] py-2 text-center text-white text-sm font-medium tracking-wide">
  Impresión premium, entrega rápida y atención personalizada.{" "}
  <a
    href="https://wa.me/+50766340008"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-fuchsia-200 transition"
  >
    Haz tu pedido por WhatsApp
  </a>
