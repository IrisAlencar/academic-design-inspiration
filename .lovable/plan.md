# Site 4Improvements — visual inspirado na BrightPoint Academics

Página única com todo o conteúdo que você enviou (8 secções + rodapé), com o mesmo estilo tecnológico da referência, mas nas cores da marca.

## Visual
- Fundo preto, textos brancos, destaques em azul elétrico (botões, números, brilhos, linhas)
- Grade sutil no fundo + pontos ligados por linhas (constelação) que se mexem devagar, em azul
- Títulos numa letra larga e geométrica, parecida com a do logo; textos numa letra limpa
- Selos em pílula, cards pretos com borda fina que brilha em azul, botões com brilho
- Logo enviado no menu, no rodapé e como ícone do separador do navegador

## Secções (pela ordem do conteúdo)
1. Menu fixo: logo, links (Ecossistema, Soluções, Agentic.OS, Sobre nós, 4Talks, Contacto) e botão de contacto
2. Primeiro impacto: selo, título "O futuro da tua empresa não se espera. Constrói-se.", textos e os 2 botões
3. O ecossistema: texto + 4 cards (Marketing, IA, Comunicação, Sistemas)
4. Soluções: 3 cards numerados (4calls, 4marketing, 4sistems), estilo "LVL 01/02/03" da referência, e chamada final
5. Agentic.OS: texto + grade com os 6 projetos
6. Trajetória: números grandes em azul (+50, +5M€, 3 ANOS) e faixa com os nomes das empresas a deslizar
7. Quem somos: texto + 3 passos (01, 02, 03)
8. 4Talks: carrossel de vídeos curtos do YouTube + botão para o canal
9. Contacto: chamada final com os 2 botões
10. Rodapé com links e redes sociais

## O que fica pendente (preciso de você depois)
- Links reais de LinkedIn, Instagram e email
- Quais vídeos do 4Talks mostrar (por agora uso espaços de exemplo que levam ao canal)
- Os botões "Conhecer..." e de contacto vão rolar até a secção de contacto, até haver páginas ou formulário

## Detalhes técnicos
- Tokens de cor/fonte em styles.css (oklch); fontes via link no __root (ex.: Michroma + Inter Tight)
- Constelação num canvas só no navegador; secções em src/components/sections; head() próprio em index.tsx
- Logo via lovable-assets; favicon quadrado em public/
- Só visual, sem banco de dados
