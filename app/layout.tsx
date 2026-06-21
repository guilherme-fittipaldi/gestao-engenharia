import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gestão Engenharia | Engenharia e Arquitetura com Rigor Técnico',
  description:
    'Escritório multidisciplinar de engenharia e arquitetura com mais de 25 anos de experiência. Projetos elétricos, civis e mecânicos, laudos, inspeções, perícias e consultoria técnica em SP, MG e SC.',
  generator: 'v0.app',
  keywords: [
    'engenharia',
    'arquitetura',
    'projetos elétricos',
    'projetos civis',
    'laudos técnicos',
    'inspeção predial',
    'AVCB',
    'SPDA',
    'consultoria técnica',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1733',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
