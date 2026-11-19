import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, Megaphone, MessagesSquare, Database, Phone, Sparkles, Code2, Youtube, Linkedin, Instagram, Mail, Play } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { Constellation } from "@/components/Constellation";
import { Badge, Btn, Card, Section, Title } from "@/components/sections/ui";

const TITLE = "4Improvements — Infraestruturas com Inteligência Artificial";
const DESC = "Desenvolvemos ecossistemas que integram marketing, comunicação, automação e sistemas de gestão com IA para impulsionar a tua empresa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const YT = "https://www.youtube.com/@4Talkspodcastportugal/shorts";
const nav = [["Ecossistema", "#ecossistema"], ["Soluções", "#solucoes"], ["Agentic.OS", "#agentic"], ["Sobre nós", "#sobre"], ["4Talks", "#4talks"], ["Contacto", "#contacto"]];

const products = [
  { n: "01", name: "4calls", tag: "LIGA · Call center inteligente", icon: Phone, h: "Nenhuma oportunidade deve depender de uma chamada esquecida.", p: "O LIGA organiza chamadas e rechamadas, integra informações no CRM e utiliza IA para analisar conversas e melhorar o desempenho comercial.", b: "Mais controlo. Melhor acompanhamento. Equipas preparadas para evoluir." },
  { n: "02", name: "4marketing", tag: "Marketing · Agentes de IA · Automação", icon: Sparkles, h: "Conquistar atenção é apenas o primeiro passo.", p: "Unimos campanhas de geração de leads, gestão de redes sociais e agentes qualificadores com IA para transformar contactos em oportunidades comerciais.", b: "Da primeira interação ao próximo passo. Sem perder o ritmo." },
  { n: "03", name: "4sistems", tag: "Desenvolvimento · CRM · Inteligência Artificial", icon: Code2, h: "O teu negócio não tem de se adaptar aos limites de um software.", p: "Desenvolvemos CRMs personalizados e soluções inteligentes que acompanham os processos, as equipas e os objetivos de cada empresa.", b: "A tecnologia adapta-se à tua operação. Não o contrário." },
];
const projects = ["N5 Clara", "N5 Imobiliário", "TerraeOS", "N5 Contabilidade", "N5 Dentário", "AgenticOS Investidores"];
const clients = ["RE/MAX Prestige", "ERA Benfica", "Century 21 Cardeira & Costa", "Century 21 Nações", "Keller Williams Valley", "ORTO-M Clínica Médico Dentária", "Dental Fixe", "Hallstar"];
const steps = [
  ["01", "Enfrentamos o desafio.", "Compreendemos o negócio e identificamos os obstáculos que impedem a sua evolução."],
  ["02", "Construímos a solução.", "Desenvolvemos e integramos tecnologia adaptada às necessidades reais da operação."],
  ["03", "Impulsionamos a evolução.", "Acompanhamos os resultados e procuramos novas oportunidades de melhoria."],
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-grid" aria-hidden />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top"><img src={logo.url} alt="4Improvements" className="h-14 w-auto" /></a>
          <nav className="hidden gap-7 text-sm text-muted-foreground lg:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>)}
          </nav>
          <a href="#contacto" className="rounded-lg bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-primary-foreground glow">Falar connosco</a>
        </div>
      </header>

      {/* 01 */}
      <section id="top" className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16 text-center">
        <Constellation />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <Badge>Startup de infraestruturas com Inteligência Artificial</Badge>
          <h1 className="mt-8 font-display text-3xl leading-tight md:text-6xl">
            O futuro da tua empresa não se espera. <span className="text-gradient">Constrói-se.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            Somos a <strong className="text-foreground">4Improvements</strong>, uma startup especializada no desenvolvimento de infraestruturas tecnológicas com Inteligência Artificial. Criamos ecossistemas que integram marketing, comunicação, automação e sistemas de gestão, permitindo às empresas superar desafios, otimizar operações e alcançar novos níveis de crescimento.
          </p>
          <p className="mx-auto mt-6 max-w-2xl font-semibold">Não desenvolvemos apenas ferramentas. Construímos a infraestrutura inteligente que impulsiona o teu negócio.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Btn href="#ecossistema">Explorar o nosso ecossistema <ArrowRight className="h-4 w-4" /></Btn>
            <Btn href="#contacto" variant="outline">Tenho um desafio para resolver</Btn>
          </div>
        </div>
      </section>

      {/* 02 */}
      <Section id="ecossistema">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>O ecossistema 4Improvements</Badge>
          <Title>Não basta acompanhar a evolução. <span className="text-gradient">É preciso liderá-la.</span></Title>
          <p className="mt-6 text-muted-foreground">Processos desconectados, oportunidades esquecidas e equipas sobrecarregadas não podem continuar a limitar o crescimento das empresas.</p>
          <p className="mt-4 font-semibold">Criámos um ecossistema para enfrentar esses desafios.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[[Megaphone, "Marketing", "que atrai."], [Bot, "Inteligência Artificial", "que qualifica."], [MessagesSquare, "Comunicação", "que aproxima."], [Database, "Sistemas", "que organizam."]].map(([I, t, d]) => {
            const Icon = I as typeof Bot;
            return (
              <Card key={t as string}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary-glow"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-sm">{t as string}</h3>
                <p className="mt-1 text-muted-foreground">{d as string}</p>
              </Card>
            );
          })}
        </div>
        <p className="mt-12 text-center text-lg font-semibold">Tudo conectado para que a tua empresa possa ir mais longe.</p>
      </Section>

      {/* 03 */}
      <Section id="solucoes">
        <div className="text-center">
          <Badge>As nossas soluções</Badge>
          <Title>Cada desafio exige uma <span className="text-gradient">solução à altura.</span></Title>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.n} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-primary/40 px-2 py-1 font-display text-[10px] text-primary-glow">LVL {p.n}</span>
                <p.icon className="h-6 w-6 text-primary-glow" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-gradient">{p.name}</h3>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{p.tag}</p>
              <p className="mt-5 text-lg font-semibold leading-snug">{p.h}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.p}</p>
              <p className="mt-4 text-sm font-semibold">{p.b}</p>
              <a href="#contacto" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold uppercase tracking-wide text-primary-glow hover:gap-3 transition-all">Conhecer o {p.name} <ArrowRight className="h-4 w-4" /></a>
            </Card>
          ))}
        </div>
        <div className="mt-16 rounded-2xl border border-primary/30 bg-accent/30 p-10 text-center">
          <h3 className="font-display text-xl md:text-2xl">Três soluções. Uma missão.</h3>
          <p className="mt-3 text-muted-foreground">Eliminar barreiras, conectar operações e impulsionar o crescimento.</p>
          <div className="mt-8"><Btn href="#contacto">Quero impulsionar a minha empresa</Btn></div>
        </div>
      </Section>

      {/* 04 */}
      <Section id="agentic">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Badge>Para quem quer ir ainda mais longe</Badge>
            <Title>Grandes desafios exigem <span className="text-gradient">sistemas extraordinários.</span></Title>
            <p className="mt-6 text-muted-foreground">Há operações que não precisam apenas de uma nova ferramenta. Precisam de uma nova forma de funcionar.</p>
            <p className="mt-4 text-muted-foreground">Com os <strong className="text-foreground">Agentic.OS</strong>, desenvolvemos sistemas inteligentes mais robustos, integrando processos, automações, informação e agentes de Inteligência Artificial.</p>
            <p className="mt-4 font-semibold">Quando os sistemas existentes não chegam, criamos novas possibilidades.</p>
            <div className="mt-8"><Btn href="#contacto">Desenvolver o meu Agentic.OS</Btn></div>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Alguns dos nossos projetos</p>
            <div className="grid grid-cols-2 gap-4">
              {projects.map((p) => (
                <div key={p} className="rounded-xl border border-border bg-card/70 p-5 font-display text-xs transition-all hover:border-primary/60 hover:glow">{p}</div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Diferentes setores. Diferentes desafios. A mesma determinação em construir soluções que fazem a diferença.</p>
          </div>
        </div>
      </Section>

      {/* 05 */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>A nossa trajetória</Badge>
          <Title>Os resultados contam a história. <span className="text-gradient">Os desafios mostram até onde podemos chegar.</span></Title>
          <p className="mt-6 text-muted-foreground">O nosso percurso foi construído ao lado de empresas que decidiram evoluir, superar limitações e apostar em novas formas de trabalhar.</p>
        </div>
        <div className="mt-14 grid gap-6 border-y border-border py-12 text-center md:grid-cols-3">
          {[["+50", "Agências imobiliárias acompanhadas."], ["+5M€", "Em comissões que ajudámos os nossos clientes a gerar."], ["3 ANOS", "A desenvolver experiência e soluções para operações imobiliárias."]].map(([n, d]) => (
            <div key={n}><div className="font-display text-4xl text-gradient md:text-5xl">{n}</div><p className="mx-auto mt-3 max-w-56 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <p className="mt-14 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Empresas que fizeram parte do nosso percurso</p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {[...clients, ...clients].map((c, i) => <span key={i} className="whitespace-nowrap rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-medium">{c}</span>)}
          </div>
        </div>
        <p className="mt-4 text-center text-sm italic text-muted-foreground">Entre outros clientes e projetos.</p>
        <p className="mt-8 text-center font-semibold">Cada projeto representa um desafio enfrentado, conhecimento adquirido e uma nova oportunidade de evoluir.</p>
      </Section>

      {/* 06 */}
      <Section id="sobre">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>A nossa essência</Badge>
          <Title>Não nascemos para aceitar os limites da tecnologia. <span className="text-gradient">Nascemos para os ultrapassar.</span></Title>
          <p className="mt-6 text-muted-foreground">Somos a <strong className="text-foreground">4Improvements</strong>, uma startup que desenvolve infraestruturas, automações e sistemas de Inteligência Artificial para empresas que procuram evoluir. Não acreditamos em inovação apenas pela inovação.</p>
          <p className="mt-4 font-semibold">Acreditamos em tecnologia que resolve problemas, potencia pessoas e transforma experiências.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <Card key={n}><div className="font-display text-3xl text-gradient">{n}</div><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></Card>
          ))}
        </div>
        <p className="mt-12 text-center font-semibold">Porque cada melhoria é uma conquista. E cada conquista abre caminho à próxima.</p>
      </Section>

      {/* 07 */}
      <Section id="4talks">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>4Talks Podcast</Badge>
          <Title>Por trás de cada conquista, existe uma história <span className="text-gradient">que merece ser contada.</span></Title>
          <p className="mt-6 text-muted-foreground">No <strong className="text-foreground">4Talks</strong>, damos voz a quem enfrenta desafios, desafia o convencional e constrói o seu próprio caminho. Conversas sobre empreendedorismo, liderança, inovação e as decisões que fazem a diferença.</p>
          <p className="mt-4 font-semibold">Histórias reais. Desafios superados. Ideias que inspiram novas conquistas.</p>
        </div>
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a key={i} href={YT} target="_blank" rel="noreferrer" className="group relative flex aspect-[9/16] w-56 shrink-0 snap-start items-center justify-center overflow-hidden rounded-2xl border border-border bg-[image:linear-gradient(160deg,var(--accent),var(--card))] transition-all hover:border-primary/60 hover:glow">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground transition-transform group-hover:scale-110"><Play className="h-6 w-6 fill-current" /></div>
              <span className="absolute bottom-4 left-4 font-display text-xs">4Talks #{i}</span>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center"><Btn href={YT} variant="outline"><Youtube className="h-4 w-4" /> Acompanhar o 4Talks no YouTube</Btn></div>
      </Section>

      {/* 08 */}
      <Section id="contacto">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/70 px-6 py-20 text-center">
          <Constellation />
          <div className="relative mx-auto max-w-3xl">
            <Badge>O próximo passo começa contigo</Badge>
            <Title>O próximo grande avanço da tua empresa <span className="text-gradient">pode começar hoje.</span></Title>
            <p className="mt-6 text-muted-foreground">Tens um desafio por resolver? Um processo por transformar? Uma ideia que ainda não encontraste forma de concretizar?</p>
            <p className="mt-4 font-semibold">Nós ajudamos-te a construir o caminho.</p>
            <p className="mt-4 text-muted-foreground">Do nosso ecossistema ao desenvolvimento de infraestruturas inteligentes à medida, criamos tecnologia para quem não se conforma com o que já existe.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Btn href="mailto:geral@4improvements.pt">Vamos superar esse desafio</Btn>
              <Btn href="mailto:geral@4improvements.pt" variant="outline">Apresentar o meu projeto</Btn>
            </div>
          </div>
        </div>
      </Section>

      <footer className="relative border-t border-border px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <img src={logo.url} alt="4Improvements" className="h-14 w-auto" />
          <p className="text-sm text-muted-foreground">Tecnologia que impulsiona empresas. Experiências que fazem a diferença.</p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Desenvolvimento de Infraestruturas · Inteligência Artificial · Automação · Agentic.OS</p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {nav.filter(([l]) => l !== "Soluções").map(([l, h]) => <a key={h} href={h} className="text-muted-foreground hover:text-foreground">{l}</a>)}
          </nav>
          <div className="flex gap-4">
            {[[Linkedin, "#", "LinkedIn"], [Instagram, "#", "Instagram"], [Mail, "mailto:geral@4improvements.pt", "Email"]].map(([I, h, l]) => {
              const Icon = I as typeof Mail;
              return <a key={l as string} href={h as string} aria-label={l as string} className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary-glow"><Icon className="h-4 w-4" /></a>;
            })}
          </div>
          <p className="text-xs text-muted-foreground">© 2026 4Improvements</p>
        </div>
      </footer>
    </div>
  );
}
