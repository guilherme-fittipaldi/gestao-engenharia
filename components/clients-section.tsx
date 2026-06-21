const clients = [
  "/images/itau.png",
  "/images/banco-do-brasil.png",
  "/images/bndes.png",
  "/images/bradesco.png",
  "/images/mercado-livre.png",
  "/images/caixa.png",
  "/images/FHE.jpeg",
  "/images/santander.png",
  "/images/TJSP.png",
];

export function ClientsSection() {
  return (
    <section id="clientes" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Clientes
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Confiança de grandes instituições
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Empresas e órgãos de referência que já contaram com a expertise
            técnica da Gestão Engenharia.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {clients.map((client) => (
            <li
              key={client}
              className="flex min-h-28 items-center justify-center bg-card p-6 text-center transition-colors hover:bg-card/70">
              <span className="font-heading text-lg font-bold uppercase tracking-wide text-muted-foreground sm:text-xl">
                <img
                  src={client}
                  alt=""
                  aria-hidden="true"
                  className="w-full max-h-20 object-contain opacity-85"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
