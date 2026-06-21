import { ArrowRight, Phone, ShieldCheck, Layers, Award } from 'lucide-react'

const highlights = [
  { icon: Award, label: '+25 anos de experiência' },
  { icon: Layers, label: 'Equipe multidisciplinar' },
  { icon: ShieldCheck, label: 'Conformidade ABNT' },
]

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden bg-navy-deep pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-arranha-ceus.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Engenharia & Arquitetura
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Rigor técnico, confiança e criatividade a serviço do{' '}
            <span className="text-gradient-teal">seu projeto</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Soluções integradas em engenharia e arquitetura para projetos,
            laudos, inspeções, consultoria técnica e supervisão de obras. Equipe
            multidisciplinar com mais de 25 anos de experiência em
            empreendimentos residenciais, comerciais e industriais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              target='_blank'
              href="https://api.whatsapp.com/send/?phone=5511913078121&text=Ol%C3%A1%20%F0%9F%91%8B%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-teal px-7 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Solicitar Orçamento
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="tel:+5511913078121"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Phone className="size-5 text-primary" aria-hidden="true" />
              Falar com um Especialista
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground/90"
              >
                <span className="flex size-9 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
