"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const navLinks = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Clientes", href: "#clientes" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#topo" aria-label="Gestão Engenharia - início">
          <Logo className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5511913078121&text=Ol%C3%A1%20%F0%9F%91%8B%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!"
            className="flex items-center gap-2 text-sm font-medium text-foreground/90 transition-colors hover:text-primary">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            (11) 91307-8121
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5511913078121&text=Ol%C3%A1%20%F0%9F%91%8B%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!"
            className="inline-flex items-center justify-center rounded-md bg-gradient-teal px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Solicitar Orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
                {link.label}
              </a>
            ))}
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5511913078121&text=Ol%C3%A1%20%F0%9F%91%8B%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais!"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-teal px-5 py-3 text-sm font-semibold text-primary-foreground">
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
