import {
  Zap,
  Building2,
  Cog,
  Mountain,
  Flame,
  ShieldAlert,
  ClipboardCheck,
  HardHat,
  Home,
  Scale,
  FileCheck,
  Headset,
  type LucideIcon,
} from 'lucide-react'

type Service = {
  icon: LucideIcon
  name: string
  description: string
}

const services: Service[] = [
  {
    icon: Zap,
    name: 'Projetos Elétricos',
    description:
      'Instalações de baixa, média e alta tensão, infraestrutura de energia, iluminação, dados, aterramento e eficiência energética.',
  },
  {
    icon: Building2,
    name: 'Projetos Civis',
    description:
      'Projeto arquitetônico, instalações hidráulicas e sanitárias, esgoto, drenagem e sistemas de prevenção e combate a incêndio.',
  },
  {
    icon: Cog,
    name: 'Projetos Mecânicos',
    description:
      'Sistemas HVAC, ventilação industrial, redes de ar comprimido, tubulações de processo e transportadores mecânicos.',
  },
  {
    icon: Mountain,
    name: 'Topografia e Terraplanagem',
    description:
      'Levantamentos planialtimétricos, georreferenciamento, corte e aterro, drenagem superficial e conformação de platôs.',
  },
  {
    icon: Flame,
    name: 'Combate a Incêndio (AVCB)',
    description:
      'Hidrantes, sprinklers, extintores, alarme e detecção de fumaça, com elaboração de PPCI/PSCIP e obtenção de AVCB/CLCB.',
  },
  {
    icon: ShieldAlert,
    name: 'Proteção Atmosférica (SPDA)',
    description:
      'Análise de risco, sistemas de captação, descidas, aterramento e DPS, protegendo pessoas e equipamentos.',
  },
  {
    icon: ClipboardCheck,
    name: 'Inspeção Predial',
    description:
      'Avaliação do estado de conservação, identificação de anomalias e planos de manutenção preventiva e corretiva conforme a ABNT.',
  },
  {
    icon: HardHat,
    name: 'Supervisão de Obras',
    description:
      'Fiscalização in loco do cronograma físico-financeiro, qualidade de materiais, conformidade de execução e relatórios periódicos.',
  },
  {
    icon: Home,
    name: 'Avaliação de Imóveis',
    description:
      'Laudos de avaliação mercadológica e patrimonial para compra, venda, garantias, seguros, partilhas e desapropriações.',
  },
  {
    icon: Scale,
    name: 'Laudos Judiciais',
    description:
      'Perícias de engenharia civil, elétrica ou mecânica para processos judiciais e acordos extrajudiciais.',
  },
  {
    icon: FileCheck,
    name: 'Entrega e Recebimento de Obra',
    description:
      'Inspeção sistemática de acabamentos e instalações com checklist, registro fotográfico e relatório de pendências.',
  },
  {
    icon: Headset,
    name: 'Consultoria e Assessoria',
    description:
      'Diagnóstico, gestão de projetos, conformidade técnica, suporte em obras e mediação de conflitos contratuais.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Nossos Serviços
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Soluções completas de engenharia sob o mesmo teto
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Da concepção do projeto à entrega da obra, oferecemos um portfólio
            integrado de serviços técnicos com conformidade normativa.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, description }) => (
            <article
              key={name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-gradient-teal group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
