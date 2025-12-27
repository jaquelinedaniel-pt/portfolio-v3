# Jaqueline Daniel | Dual Persona Portfolio

> **"Não escolha entre Gestão e Código. Tenha os dois."**

Este projeto é um Ecossistema Digital desenvolvido para demonstrar a dualidade da minha atuação profissional: **Liderança Executiva** e **Engenharia de Software**.

![Banner do Projeto](imagens/banner-preview.png)
*(Sugestão: Tire um print da tela dividida do Gateway e salve como banner-preview.png na pasta imagens)*

## 🧠 O Conceito (Architecture Decision)

O desafio de UX era apresentar dois perfis profissionais distintos sem causar confusão cognitiva. A solução foi criar uma arquitetura de **"Gateway"**:

1.  **Gateway (`index.html`):** Uma entrada minimalista que força a segmentação de persona.
2.  **Business Profile:** Design "Strategic Luxury" (Navy & Gold), focado em métricas, ROI e P&L.
3.  **Tech Profile:** Design "Cyberpunk/High-Tech" (Dark & Neon), focado em código, stack e arquitetura.

## 🚀 Stack Tecnológica

O projeto foi construído com foco em **Performance** e **Semântica**, sem dependência de frameworks pesados, garantindo pontuação máxima no Lighthouse.

* **Core:** HTML5 Semântico, CSS3 Moderno (Variables, Flexbox, Grid).
* **Interatividade:** Vanilla JavaScript (ES6+).
* **Ícones:** Lucide Icons (Leveza e consistência).
* **Fontes:** Google Fonts (Playfair Display, Manrope, Teko, Rajdhani).

## 🎨 Destaques de UI/UX

* **Responsive Grids:** Layouts que se adaptam de monitores Ultrawide até smartphones, mudando de grids complexos para stacks verticais.
* **CSS Animations:**
    * *Golden Scanner:* Borda animada com gradiente cônico nos cards.
    * *Energy Flow:* Feixe de luz percorrendo a timeline.
    * *Interactive Hover:* Micro-interações táteis em botões e links.
* **Dual Theme System:** Gerenciamento de paletas de cores distintas (`root variables`) para cada contexto (Executivo vs. Tech).

## 📂 Estrutura do Projeto

```bash
/
├── index.html          # O Gateway de Escolha
├── business.html       # Perfil Executivo
├── tech.html           # Perfil de Engenharia
├── style-gateway.css   # Estilos da entrada
├── style-business.css  # Tema Luxury (Navy/Gold)
├── style-tech.css      # Tema Cyberpunk (Black/Neon)
├── script.js           # Lógica de modais e interações
└── /imagens            # Assets otimizados