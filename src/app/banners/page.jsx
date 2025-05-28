import React from "react";
import Image from "next/image";
import { Clock, ShieldCheck, PenTool, Building2 } from "lucide-react";

export default function BannersPage() {
  const currentYear = new Date().getFullYear();

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
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
              Contáctanos por WhatsApp
            </button>
          </a>
        </div>
      </header>

      {/* Línea azul decorativa */}
      <section
        aria-label="Llamado a la acción inmediato"
        className="bg-[#4285F4] py-2 text-center text-white text-sm font-medium tracking-wide"
      >
        Impresión premium, entrega rápida y atención personalizada.{" "}
        <a
          href="https://wa.me/+50766340008"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-fuchsia-200 transition"
        >
          Escríbenos
        </a>
      </section>
      {/* Hero Section */}
<section
  aria-label="Presentación de producto"
  className="relative overflow-hidden bg-gradient-to-b from-white to-fuchsia-50 pt-12 pb-20"
>
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
    
    {/* Texto principal */}
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#4285F4] leading-tight">
        Banners que Impactan
      </h1>
      <p className="text-lg text-gray-700">
        Impresion Premium de Banners en diferentes acabados y materiales. Pet - UV sectorizado - Tradicional.
      </p>
      <a
        href="https://wa.me/+50766340008"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded text-sm font-medium cursor-pointer">
          Contáctanos por WhatsApp
        </button>
      </a>
    </div>

    {/* Imagen de banners */}
    <div className="relative w-full">
      <Image
        src="/images/banner-principal.png"
        alt="Ejemplo de banners roll up de alta calidad"
        width={800}
        height={500}
        className="mx-auto rounded-lg shadow-lg"
        unoptimized
        priority
      />
    </div>
  </div>

  {/* Decoraciones suaves */}
  <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
  <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-fuchsia-400 rounded-full blur-3xl opacity-20" />
</section>
{/* Galería de banners - Carrusel deslizable */}
<section
  aria-label="Galería de banners impresos"
  className="relative py-16 bg-white"
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-[#4285F4] text-center mb-10">
      Algunas Muestras
    </h2>

    <div className="relative overflow-hidden">
      {/* Contenedor deslizante */}
      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-1 md:px-0">
        {/* Cada imagen es un slide */}
        {[
          { src: "/images/banner-bioskin.png", alt: "Banner de producto dermocosmético Bioskin" },
          { src: "/images/banner-pacifica.png", alt: "Banner promocional Pacifica Tower" },
          { src: "/images/banner-santa-amelia.png", alt: "Banner residencial Santa Amelia" },
          { src: "/images/banner-cordoba.png", alt: "Banner institucional Cordoba" },
          { src: "/images/banner-techsys.png", alt: "Banner corporativo Techsys Panamá" }
        ].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 md:w-80 snap-center rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={900}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  </section>
{/* Beneficios clave */}
<section
  id="beneficios"
  aria-label="Beneficios de nuestros banners"
  className="py-20 bg-gradient-to-b from-fuchsia-50 to-white"
>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-[#4285F4] mb-12">
      ¿Por qué elegir nuestros Banners?
    </h2>

    <div className="grid gap-6 md:grid-cols-4">
      {/* Beneficio 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Clock className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
        <h3 className="text-lg font-semibold mb-2 text-[#4285F4]">Entregas rápidas</h3>
        <p className="text-sm text-gray-600">
          Cumplimos con los plazos más exigentes sin sacrificar calidad.
        </p>
      </div>

      {/* Beneficio 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <ShieldCheck className="mx-auto h-10 w-10 text-purple-500 mb-4" />
         <h3 className="text-lg font-semibold mb-2 text-[#4285F4]">Alta Durabilidad</h3>
        <p className="text-sm text-gray-600">
          Materiales resistentes que mantienen la calidad visual por más tiempo.
        </p>
      </div>

      {/* Beneficio 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <PenTool className="mx-auto h-10 w-10 text-cyan-500 mb-4" />
         <h3 className="text-lg font-semibold mb-2 text-[#4285F4]">Diseño Gráfico</h3>
        <p className="text-sm text-gray-600">
          Servicio opcional de diseño para crear banners que capturen la atención.
        </p>
      </div>

      {/* Beneficio 4 */}
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Building2 className="mx-auto h-10 w-10 text-green-600 mb-4" />
         <h3 className="text-lg font-semibold mb-2 text-[#4285F4]">Versatilidad</h3>
        <p className="text-sm text-gray-600">
          Ideal para ferias, eventos, oficinas y tiendas comerciales.
        </p>
      </div>
    </div>
  </div>
</section>
     {/* Footer */}
      <footer className="bg-[#1F2937] text-white pt-10 pb-6 mt-20">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3 items-start">
          <div>
            <h4 className="text-xl font-bold mb-2">GripperPrint</h4>
            <p className="text-sm">Impresión de calidad para tus proyectos</p>
          </div>

          <div className="text-sm space-y-2">
            <a href="#" className="block hover:underline">Términos y Condiciones</a>
            <a href="#" className="block hover:underline">Política de Privacidad</a>
          </div>

          <div>
            <p className="text-sm mb-2">Contáctanos:</p>
            <a
              href="mailto:ventasgripper@gmail.com"
              className="text-lg font-semibold hover:underline block text-white"
            >
              ventasgripper@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>© {currentYear} GripperPrint. Todos los derechos reservados.</p>
          <p className="mt-1">Sitio creado por GripperPrint</p>
        </div>
      </footer>
</div>
  );
}