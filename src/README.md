# Estrutura do Projeto

Este projeto segue uma arquitetura moderna e escalável para aplicações React. A estrutura está organizada da seguinte forma:

## Diretórios

- `components/`: Componentes reutilizáveis da aplicação
- `pages/`: Componentes que representam páginas completas
- `hooks/`: Hooks personalizados do React
- `services/`: Serviços e chamadas de API
- `utils/`: Funções utilitárias e helpers
- `contexts/`: Contextos do React para gerenciamento de estado
- `assets/`: Recursos estáticos como imagens, fontes, etc.
- `styles/`: Arquivos de estilo (CSS, SCSS, etc.)
- `constants/`: Constantes e configurações da aplicação
- `types/`: Definições de tipos (se estiver usando TypeScript)

## Convenções

- Use PascalCase para nomes de componentes
- Use camelCase para nomes de arquivos de utilitários e hooks
- Mantenha os componentes pequenos e focados em uma única responsabilidade
- Separe a lógica de negócios dos componentes de apresentação
- Use hooks personalizados para lógica reutilizável
- Mantenha os estilos próximos aos componentes que os utilizam 