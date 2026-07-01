'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MessageCircle, Globe, AtSign, ArrowRight } from 'lucide-react'

const services = [
  'Projetos Elétricos',
  'Projetos Civis',
  'Projetos Mecânicos',
  'Topografia e Terraplanagem',
  'Combate a Incêndio (AVCB)',
  'Proteção Atmosférica (SPDA)',
  'Inspeção Predial',
  'Supervisão de Obras',
  'Avaliação de Imóveis',
  'Laudos Judiciais',
  'Consultoria Técnica',
  'Outro',
]

const contacts = [
  { icon: Phone, label: '(11) 91307-8121', href: 'tel:+5511913078121' },
  { icon: MessageCircle, label: '(13) 99155-5054 (WhatsApp)', href: 'https://wa.me/5511913078121' },
  { icon: Mail, label: 'comercial@gestaoengenhariaoficial.com.br', href: 'mailto:comercial@gestaoengenhariaoficial.com.br' },
  { icon: Globe, label: 'www.gestaoengenhariaoficial.com.br', href: 'https://www.gestaoengenhariaoficial.com.br' },
  { icon: AtSign, label: '@gestaoengenharia', href: 'https://instagram.com/gestaoengenharia' },
]

export function ContactSection() {
  const [service, setService] = useState(services[0])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const nome = String(data.get('nome') ?? '')
    const telefone = String(data.get('telefone') ?? '')
    const mensagem = String(data.get('mensagem') ?? '')
    const texto = `Olá! Meu nome é ${nome}. Tenho interesse em: ${service}.%0ATelefone: ${telefone}.%0A${mensagem}`
    window.open(`https://wa.me/5511913078121?text=${texto}`, '_blank')
  }

  return (
    <section id="contato" className="relative isolate overflow-hidden bg-navy-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Fale Conosco
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
              Seu projeto merece segurança, eficiência e rigor técnico
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Conte com uma equipe multidisciplinar experiente para desenvolver
              projetos, laudos, inspeções e consultorias que entregam resultados
              reais para sua obra ou empreendimento.
            </p>

            <ul className="mt-8 space-y-3">
              {contacts.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-primary"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="break-all">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-background/60 p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-foreground">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className="w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-foreground">
                  Telefone / WhatsApp
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="servico" className="mb-1.5 block text-sm font-medium text-foreground">
                  Serviço de interesse
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Descreva brevemente sua necessidade"
                  className="w-full resize-none rounded-md border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-teal px-6 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Solicitar Atendimento Especializado
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
