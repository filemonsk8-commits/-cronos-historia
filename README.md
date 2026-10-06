# ⏳ Cronos História

**Cronos História** é uma biblioteca e plataforma interativa projetada para visualização cronológica de eventos da História do Brasil e da História Geral no formato de cards responsivos.

O projeto foi estruturado para proporcionar uma navegação fluida em computadores, tablets e smartphones.

---

## 🚀 Funcionalidades

- **Linha do Tempo em Cards:** Visualização clara, objetiva e resumida dos eventos históricos.
- **Design Totalmente Responsivo:** Interface adaptável para telas desktop, tablets e dispositivos móveis.
- **Estrutura Modular de Dados:** Conteúdos organizados em arquivos JSON leves (sem dependência de mídias/imagens).
- **Filtros por Período:** Acesso rápido a recortes temporais específicos da História do Brasil e Geral.

---

## 📁 Estrutura do Repositório

```text
cronos-historia/
├── .github/                 # Workflows e configurações do GitHub
├── docs/                    # Documentação técnica e guias da interface
├── app/                     # Aplicação Web (PC, Tablet, Mobile)
│   ├── components/          # Componentes da interface (Cards, Timelines)
│   └── styles/              # Estilos CSS responsivos
├── data/                    # Acervo de dados em formato JSON
│   ├── brasil/              # História do Brasil
│   │   ├── colonia/         # Período Colonial (1500 - 1822)
│   │   ├── imperio/         # Período Imperial (1822 - 1889)
│   │   └── republica/       # Período Republicano (1889 - presente)
│   └── geral/               # História Geral
│       ├── antiguidade/     # Pré-História e Antiguidade
│       ├── idade-media/     # Idade Média
│       ├── idade-moderna/   # Idade Moderna
│       └── contemporanea/   # Idade Contemporânea
└── README.md                # Apresentação do projeto
