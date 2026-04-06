import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441746606/BZnEGFzuyUxG4dwdvBxxSv/hero-rural-lawyer-5sHQsorjJdiSUUcn5MiWq8.webp"
          alt="Advogado Especializado em Direito Rural"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wide">
                Defesa Especializada
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Protegendo o Produtor Rural
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Especialista em defesa contra instituições financeiras. Renegociação de dívidas rurais, proteção de bens e segurança jurídica para sua propriedade.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">96%</p>
                <p className="text-sm text-muted-foreground">Redução média de dívida</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                asChild
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Conversar no WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2"
                asChild
              >
                <a href="#servicos">
                  Conhecer Serviços
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Image (visible on desktop) */}
          <div className="hidden md:block relative">
            <div className="relative z-10">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441746606/BZnEGFzuyUxG4dwdvBxxSv/hero-rural-lawyer-5sHQsorjJdiSUUcn5MiWq8.webp"
                alt="Advogado Profissional"
                className="rounded-lg shadow-2xl"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
