import { Phone, Mail, AtSign, Globe } from 'lucide-react'
import { Logo } from './logo'

const nav = [
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Clientes', href: '#clientes' }
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto object-left" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Rigor técnico, confiança e criatividade a serviço do seu projeto.
              Soluções integradas em engenharia e arquitetura com mais de 25 anos
              de experiência.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="tel:+5511913078121" className="flex items-center gap-2.5 transition-colors hover:text-primary">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  (11) 91307-8121
                </a>
              </li>
              <li>
                <a href="https://wa.me/5513991555054" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-primary">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  (13) 99155-5054
                </a>
              </li>
              <li>
                <a href="mailto:comercial@gestaoengenhariaoficial.com.br" className="flex items-center gap-2.5 break-all transition-colors hover:text-primary">
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  comercial@gestaoengenhariaoficial.com.br
                </a>
              </li>
              {/* <li>
                <a href="https://www.gestaoengenhariaoficial.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-primary">
                  <Globe className="size-4 text-primary" aria-hidden="true" />
                  gestaoengenhariaoficial.com.br
                </a>
              </li> */}
              <li>
                <a href="https://instagram.com/gestaoengenharia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-primary">
                  <AtSign className="size-4 text-primary" aria-hidden="true" />
                  @gestaoengenharia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Gestão Engenharia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
