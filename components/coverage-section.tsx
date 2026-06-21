import { MapPin } from 'lucide-react'

const regions = [
  {
    state: 'São Paulo',
    cities:
      'Jundiaí, Louveira, Campinas, Glicério, São José dos Campos, Cajamar, Franco da Rocha, Perus, Diadema, São Bernardo do Campo, Guarulhos, Barueri, Santana do Parnaíba, Santo Amaro, Itapecerica da Serra, Santo André, São Paulo, Santa Isabel, Taboão da Serra, Osasco, Embu das Artes, Cubatão, Santos, São Vicente, Praia Grande, Mongaguá, Itanhaém, Peruíbe, Ilha Comprida, Guarujá, Bertioga, Boracéia, Caraguatatuba e Ilha Bela.',
    featured: true,
  },
  {
    state: 'Minas Gerais',
    cities: 'Pouso Alegre e Extrema.',
    featured: false,
  },
  {
    state: 'Santa Catarina',
    cities: 'Celso Ramos.',
    featured: false,
  },
]

export function CoverageSection() {
  return (
    <section id="atuacao" className="relative bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Nossa Atuação
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Trabalhos realizados em três estados
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Levamos engenharia de alto nível a dezenas de municípios, com
              experiência em diferentes cenários, segmentos e exigências
              regulatórias. Presença consolidada em São Paulo, Minas Gerais e
              Santa Catarina.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {[
                { value: '40+', label: 'Municípios' },
                { value: '3', label: 'Estados' },
                { value: '100%', label: 'Cobertura técnica' },
              ].map((item) => (
                <div key={item.label} className="bg-card p-5 text-center">
                  <p className="font-heading text-2xl font-extrabold text-gradient-teal">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {regions.map((region) => (
              <div
                key={region.state}
                className={`rounded-xl border bg-card p-6 ${
                  region.featured ? 'border-primary/40' : 'border-border'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                    {region.state}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {region.cities}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
