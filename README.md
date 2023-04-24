# SquadCards

Este é o meu primeiro projeto em [React](https://github.com/facebook/create-react-app).
desenvolvido paralelamente com a formação de React da Alura e aplicando conceitos na prática.

## Objetivo

O objetivo deste projeto é criar Cards personalizado com os dados do seu esquadrão e jogo preferido.

- Formulario
    - Criação de inputs com placeholder.
    - Criação de lista suspensa para validação de times.
        - Utilizado useStates para alimentar o array com os valores obtidos.
    - Botão de validação de valores.
    - Botão de esconder e mostrar formulario.
        - Utilizado hook useState para atualizar valores como:
            - Margin em css.
            - Display em css.
            - Valor de texto.
- Criação de section dinamicamente.
    - A section com o nome do jogo irá ser renderizado caso nesse jogo tenha pelo menos 1 card.
    - Quebra de linha automaticamente feita com Flex-Box.
- A plataforma utiliza o localStorage para salvar os cards individualmente.
    - Botão no rodapé com a função de limpar a mesa.
        - Essa função irá excluir todos os cards salvos no localStorage.(Apenas o time padrão restará).
- Rodapé elaborado com Flex-box.
- Layout Responsivo.

### Setup

- NPM
- VScode
- React
