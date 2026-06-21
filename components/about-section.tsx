import { Target, Eye, Crosshair, MessageSquare, Lightbulb, ShieldCheck } from 'lucide-react'

const stats = [
  { value: '+25', label: 'Anos de experiência' },
  { value: '4', label: 'Áreas de especialidade' },
  { value: '3', label: 'Estados de atuação' },
  { value: '12', label: 'Serviços técnicos' },
]

const values = [
  {
    icon: Crosshair,
    title: 'Precisão',
    description: 'Cada cálculo, cada traço e cada laudo reflete compromisso com a exatidão.',
  },
  {
    icon: MessageSquare,
    title: 'Transparência',
    description: 'Comunicação clara em todas as fases do projeto.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação aplicada',
    description: 'Tecnologia a serviço de soluções práticas e economicamente viáveis.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsabilidade',
    description: 'Respeito às normas, ao meio ambiente e à segurança de quem habita e trabalha nas edificações.',
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Sobre Nós
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Especialistas em engenharia e arquitetura para projetos, obras e
              consultoria técnica
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                A Gestão Engenharia nasceu da convicção de proporcionar aos
                clientes soluções em engenharia e arquitetura voltadas ao melhor
                desempenho das edificações e seus sistemas. Cada serviço é
                executado com rigor técnico, confiança e criatividade, garantindo
                segurança, eficiência e resultados mensuráveis.
              </p>
              <p>
                Somos um escritório multidisciplinar composto por Engenheiro
                Civil, Engenheiro Eletricista, Engenheiro Mecânico e Arquiteto,
                oferecendo atendimento integrado para projetos, inspeções,
                laudos, avaliações, consultorias e acompanhamento técnico de
                obras.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card p-5">
                  <dt className="font-heading text-3xl font-extrabold text-gradient-teal">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Mission & Vision */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Target className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Missão
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Proporcionar soluções integradas em engenharia e arquitetura
                  que elevem o desempenho das edificações e de seus sistemas,
                  unindo rigor técnico, confiança e criatividade em cada entrega.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Eye className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  Visão
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ser referência em consultoria e projetos de engenharia,
                  reconhecidos pela capacidade de transformar desafios
                  construtivos em resultados mensuráveis para nossos clientes.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">
                Nossos Valores
              </h3>
              <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                {values.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex gap-3.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
