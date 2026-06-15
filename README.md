# SafeZone - Segurança urbana em tempo real

[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat&logo=netlify)](https://safezone1506.netlify.app/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Plataforma híbrida de vigilância preditiva e colaborativa para segurança urbana em tempo real

**🔗 Link da página web:** [https://safezone1506.netlify.app/](https://safezone1506.netlify.app/)

## 📋 Visão Geral do Projeto

O **SafeZone** é uma plataforma híbrida de vigilância preditiva e colaborativa voltada para a segurança urbana em tempo real. Muito além de um aplicativo de navegação convencional, o sistema foi projetado para atuar como um radar preventivo, mapeando vulnerabilidades nas vias públicas e devolvendo aos cidadãos o direito de transitar com segurança.

A entrega inicial consiste em uma **Landing Page institucional** integrada a um **Web App prototipado via client-side**, demonstrando a viabilidade da interface e das interações do usuário.

## 🎯 Objetivos e Público-Alvo

### Objetivo Principal
Mitigar riscos de segurança pública como assaltos, furtos e sequestros-relâmpago por meio do cruzamento de dados em tempo real, inteligência artificial preditiva e inteligência coletiva crowdsourced.

### Público-Alvo
Pedestres, motoristas de aplicativos, estudantes e trabalhadores que realizam trajetos rotineiros previsíveis e estão expostos a áreas de vulnerabilidade na malha urbana.

## ⚙️ Requisitos do Sistema

### 3.1 Requisitos Funcionais (RF)

| ID | Requisito | Descrição |
| --- | --- | --- |
| **RF01** | **Mapa Inteligente e Roteamento** | Fornece rotas alternativas priorizando o grau de segurança histórico e em tempo real, não apenas tempo de deslocamento |
| **RF02** | **Radar Colaborativo** | Usuários reportam ocorrências de forma anônima e instantânea: movimentação suspeita, falta de iluminação, assaltos |
| **RF03** | **Botão de Pânico / Fake Screen** | PIN de emergência que envia localização silenciosamente para autoridades e exibe interface falsa mascarando apps financeiros |
| **RF04** | **Simulação de Interface** | Landing Page gera dinamicamente demonstração interativa da plataforma mobile diretamente no navegador |

### 3.2 Requisitos Não Funcionais (RNF)

| ID | Requisito | Descrição |
| --- | --- | --- |
| **RNF01** | **Baixa Latência** | Alertas de emergência e atualizações do radar processados em tempo real, com latência tendendo a zero |
| **RNF02** | **Escalabilidade** | Suporte a picos de milhares de usuários simultâneos transmitindo dados de geolocalização |
| **RNF03** | **Responsividade** | Interface Mobile First adaptável a diferentes tamanhos de tela, garantindo fluidez em dispositivos móveis |

## 🎨 Decisões de Design e Interface (UX/UI)

### Paleta de Cores - Dark/Neon

| Cor | Hex | Uso |
| --- | --- | --- |
| **Azul Escuro Profundo** | `#020617` | Background principal |
| **Azul Médio** | `#0f172a` | Camadas secundárias |
| **Azul Neon** | `#00f2fe` | Elementos interativos, CTAs |
| **Verde Confirmação** | `#10b981` | Status de segurança |
| **Azul Primário** | `#1a56db` | Botões principais |

### Psicologia das Cores
A estética afasta-se de aplicativos comuns e remete a centrais de inteligência de dados, conferindo autoridade e confiabilidade ao sistema.

### Elementos Gráficos
Background incorpora malha 3D wireframe renderizada em SVG com degradês em blur radial. Cria profundidade cibernética, ambientando o usuário em uma rede de sensores e estabilidade técnica.

## 🏗️ Arquitetura e Stack Tecnológica

### 5.1 Camada de Apresentação - Frontend

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| **HTML5** | - | Estrutura semântica |
| **CSS3** | - | Estilo customizado com variáveis CSS nativas |
| **Bootstrap** | 5.3 | Framework de layout, grids, componentes |
| **Bootstrap Icons** | 1.11.3 | Ícones da landing page |
| **FontAwesome** | 6.5.1 | Ícones do web app |
| **JavaScript Vanilla** | ES6+ | Controle de eventos e prototipagem client-side |

**Prototipagem:** Geração dinâmica da interface do Web App via manipulação da API Blob, evitando rotas complexas no servidor durante a fase de protótipo.

### 5.2 Projeção de Back-end e Infraestrutura

| Camada | Tecnologia | Justificativa |
| --- | --- | --- |
| **Mensageria / WebSockets** | Golang | Alta performance em concorrência para gerenciar milhares de conexões simultâneas sem gargalos |
| **IA e Processamento** | Python | Scripts avançados para análise preditiva de mapas de calor e georreferenciamento em tempo real |
| **Banco de Dados** | PostgreSQL + PostGIS | Buscas georreferenciadas ultrarrápidas entre posição do usuário e zonas vermelhas mapeadas |

## 🚀 Como Executar Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/safezone.git
cd safezone
