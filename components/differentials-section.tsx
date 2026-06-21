import { Layers, BookCheck, MessagesSquare, Target, Award, type LucideIcon } from 'lucide-react'

type Differential = {
  icon: LucideIcon
  title: string
  description: string
}

const differentials: Differential[] = [
  {
    icon: Layers,
    title: 'Equipe Multidisciplinar',
    description:
      'Projetos elétricos, civis, mecânicos, topográficos e de segurança desenvolvidos sob o mesmo teto, eliminando incompatibilidades e retrabalhos.',
  },
  {
    icon: BookCheck,
    title: 'Rigor Normativo',
    description:
      'Cada entrega segue estritamente as normas da ABNT e as legislações municipal, estadual e federal aplicáveis.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicação Transparente',
    description:
      'Relatórios claros, cronogramas atualizados e acesso direto à equipe técnica. Você acompanha cada etapa sem surpresas.',
  },
  {
    icon: Target,
    title: 'Foco em Resultado',
    description:
      'Atuação orientada à otimização de recursos, redução de custos e prazos, segurança operacional e gestão baseada em dados.',
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description:
      'Mais de 25 anos de atuação em projetos residenciais, comerciais e industriais, perícias judiciais e laudos de alta complexidade.',
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Nossos Diferenciais
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Por que escolher a Gestão Engenharia
          </h2>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          {differentials.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className="relative flex size-20 rotate-45 items-center justify-center rounded-xl bg-gradient-teal">
                <Icon
                  className="size-8 -rotate-45 text-primary-foreground"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-7 font-heading text-base font-bold uppercase tracking-wide text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
