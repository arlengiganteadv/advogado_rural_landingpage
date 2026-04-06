import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function ProofSection() {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recuperação Financeira para Produtores
          </h2>
          <p className="text-lg text-muted-foreground">
            Casos reais de produtores rurais que recuperaram sua saúde financeira com nossa defesa especializada.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Case Study 1 */}
          <Card className="p-8 border-border hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Redução de Dívida</p>
                  <p className="text-2xl font-bold text-primary">96,93%</p>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Dívida Original:</span>
                  <span className="font-semibold">R$ 448.589,68</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Valor Pago:</span>
                  <span className="font-semibold text-primary">R$ 13.800,00</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-muted-foreground font-medium">Economia:</span>
                  <span className="font-bold text-lg">R$ 437.010,05</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic pt-4">
                "Consegui manter minha propriedade e recuperar a estabilidade financeira. Recomendo!"
              </p>
            </div>
          </Card>

          {/* Case Study 2 */}
          <Card className="p-8 border-border hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Alongamento de Dívida</p>
                  <p className="text-2xl font-bold text-primary">24 meses</p>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Prazo Original:</span>
                  <span className="font-semibold">12 meses</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Novo Prazo:</span>
                  <span className="font-semibold text-primary">24 meses</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-muted-foreground font-medium">Redução de Parcela:</span>
                  <span className="font-bold text-lg">50%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic pt-4">
                "Com o alongamento, consegui investir em maquinário e aumentar a produção."
              </p>
            </div>
          </Card>
        </div>

        {/* Success Image */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663441746606/BZnEGFzuyUxG4dwdvBxxSv/success-results-HbaXv2T9qjqj8qzeZQRKhZ.webp"
            alt="Resultados de Recuperação Financeira"
            className="w-full h-auto"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-6 bg-white rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground mt-2">Clientes Atendidos</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">96%</p>
            <p className="text-sm text-muted-foreground mt-2">Taxa de Sucesso</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">R$ 50M+</p>
            <p className="text-sm text-muted-foreground mt-2">Recuperado</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-border">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground mt-2">Anos Atuando</p>
          </div>
        </div>
      </div>
    </section>
  );
}
