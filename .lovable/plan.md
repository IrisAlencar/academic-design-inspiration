# Site 4imprrovements — visual inspirado na BrightPoint Academics

O tema do negócio não foi detalhado; vou usar textos de exemplo de uma empresa de melhoria contínua e consultoria em tecnologia. Você pode trocá-los depois.

## Visual (igual à referência)
- Fundo azul-marinho bem escuro, com uma grade sutil e pontos ligados por linhas, tipo constelação, que se mexem devagar
- Destaques em ciano e roxo neon, com brilho suave nos botões e nos números
- Títulos numa letra futurista (Orbitron); textos em Space Grotesk
- Selos em formato de pílula, cards escuros com borda fina brilhante

## Seções da página inicial
1. Menu fixo: logo 4imprrovements, links (Quem somos, Serviços, Metodologia, Projetos, Contato) e o botão "Fale connosco"
2. Topo: selo, título grande, subtítulo, 3 botões (ciano, contorno, roxo) e uma linha de números (ex.: 4 pilares, 50+ projetos, 98% satisfação, 100% foco em resultados)
3. Quatro cards de diferenciais com ícones
4. Quem somos: texto + números em destaque
5. Como funciona: duas opções lado a lado + lista de benefícios
6. Trilhas/Serviços por nível (LVL 01 a 05), com abas para escolher a categoria
7. Projetos/casos em grade
8. Chamada final + rodapé com contato

## Detalhes técnicos
- Cores e fontes definidas como tokens em styles.css (oklch); fontes carregadas via link no __root
- Constelação animada num canvas leve, só no navegador
- Componentes de seção separados em src/components/sections; a página fica em src/routes/index.tsx com título e descrição próprios
- Só a parte visual, sem banco de dados nem formulários reais por enquanto
