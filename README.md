# Movie Explorer – Aplicativo de Busca de Filmes e Séries

## Descrição Curta
O Movie Explorer é um aplicativo web responsivo que permite aos usuários buscar informações detalhadas sobre filmes e séries usando a API pública OMDb. Com uma interface moderna e intuitiva, o projeto demonstra habilidades em desenvolvimento front-end, consumo de APIs e manipulação de dados JSON. Desenvolvido com foco em boas práticas de acessibilidade e UX.

## Funcionalidades Principais
- **Busca de Filmes por Nome**: Digite o nome de um filme ou série e obtenha resultados instantâneos.
- **Exibição de Cards**: Cada resultado é mostrado em um card com pôster, título, ano e nota IMDb.
- **Modal com Detalhes**: Clique em um card para ver informações adicionais como gênero, diretor, elenco e sinopse.
- **Tratamento de Erros**: Mensagens claras para casos como "Nenhum resultado encontrado" ou erros de API.
- **Spinner de Carregamento**: Feedback visual durante as buscas.
- **Acessibilidade**: Labels ARIA, navegação por teclado e suporte a leitores de tela.

## Tecnologias Usadas
- **HTML5**: Estrutura da página e layout semântico com acessibilidade.
- **CSS3**: Estilização responsiva com Flexbox/Grid, animações e design moderno.
- **JavaScript ES6+**: Lógica de busca, manipulação do DOM e integração com API usando Fetch.

## Como Usar / Rodar Localmente
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` diretamente no seu navegador (não requer servidor local).
3. Para usar a funcionalidade de busca:
   - Obtenha uma chave de API gratuita em [omdbapi.com](https://www.omdbapi.com/apikey.aspx).
   - Abra o arquivo `script.js` e substitua `'SUA API KEY AQUI'` pela sua chave pessoal.
4. Digite o nome de um filme ou série no campo de busca e clique em "Buscar".

## Observações Importantes
- A chave da API OMDb é pessoal e gratuita (até 1.000 requisições por dia). Qualquer pessoa que abra o projeto usará a sua chave, então considere isso ao compartilhar.
- Limite diário da API gratuita: 1.000 requisições. Para uso profissional, considere planos pagos.
- O projeto é totalmente front-end e não requer instalação de dependências.

## Screenshots / GIFs
### Layout Principal
![Layout Principal](https://via.placeholder.com/800x400?text=Layout+Principal+do+Movie+Explorer)

### Cards de Resultados
![Cards de Resultados](https://via.placeholder.com/800x400?text=Exemplo+de+Cards+com+Filmes)

### Modal de Detalhes
![Modal de Detalhes](https://via.placeholder.com/800x400?text=Modal+com+Detalhes+do+Filme)

*(Substitua essas imagens por capturas reais do seu projeto para melhor apresentação no portfólio.)*

## Diretório do Projeto
```
movie-explorer/
├── index.html      # Estrutura principal da página com acessibilidade
├── styles.css      # Estilos responsivos e modernos com animações
├── script.js       # Lógica de busca e interação com comentários detalhados
├── README.md       # Documentação completa do projeto
├── .gitignore      # Arquivos a serem ignorados pelo Git
└── LICENSE         # Licença MIT para o projeto
```

## Como Contribuir
1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Este projeto é ideal para portfólios brasileiros, demonstrando competências em JavaScript, APIs, design responsivo e boas práticas de desenvolvimento. Pronto para subir no GitHub sem edições adicionais!
