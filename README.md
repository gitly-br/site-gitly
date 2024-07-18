# Documentação do Projeto Gitly

## Introdução

Bem-vindo à documentação do projeto Gitly! Este projeto foi desenvolvido utilizando React, Next.js e Tailwind CSS para criar um site moderno e responsivo. O objetivo desta documentação é fornecer instruções claras e detalhadas para que você possa fazer alterações no site, caso necessário. Desde o primeiro passo de clonagem do repositório até a edição de componentes específicos, vamos cobrir tudo de forma simples e direta.

## Estrutura do Projeto

O projeto Gitly está organizado nas seguintes pastas:

- **assets**: Contém imagens e outros recursos estáticos.
- **components**: Contém componentes React reutilizáveis.
- **pages**: Contém as páginas do Next.js (você provavelmente não precisará alterar esta pasta).
- **styles**: Contém os estilos globais e configurações do Tailwind CSS (você provavelmente não precisará alterar esta pasta).
- **public**: Contém arquivos estáticos acessíveis publicamente, como imagens.

## Clonando o Repositório

Para começar, você precisará clonar o repositório do projeto. Siga os passos abaixo:

1. **Abra o terminal**: No seu editor de código, abra um terminal integrado (por exemplo, no Visual Studio Code).
2. **Clone o repositório**:
   ```bash
   git clone https://github.com/InteliJR/gitly-project.git
   ```
3. **Navegue até a pasta do frontend**:
   ```bash
   cd .\frontend\
   ```
4. **Instale as dependências**:
   ```bash
   npm install
   ```
5. **Execute o projeto**:
   ```bash
   npm run dev
   ```

Agora o projeto deve estar rodando localmente em `http://localhost:3000`.

## Perguntas Frequentes e Respostas

### Página Principal (Home)

**1. Como poderei alterar, incluir ou excluir serviços (que estão na página principal) depois?**

- **Resposta**: No componente `services.jsx`, você pode alterar as imagens dos serviços. Lembre-se de tratar as imagens com um designer antes de atualizá-las.

**2. Como poderei incluir novos produtos (que estão na página principal) depois?**

- **Resposta**: No componente `products.jsx`, você precisa alterar as imagens e lembrar de importá-las.

**3. Como poderei editar/incluir/excluir novas parcerias (que estão na página principal) depois?**

- **Resposta**: No componente `partners.jsx`, você precisa alterar as imagens e lembrar de importá-las.

**4. Como poderei incluir novos projetos (que estão na página principal) depois?**

- **Resposta**: No componente `projects.jsx`, você precisa alterar as imagens e lembrar de importá-las.

**5. Como poderei incluir novos clientes (que estão em um carrossel na página principal) depois?**

- **Resposta**: Adicione o ícone do parceiro na pasta `public` e, no arquivo `index.jsx`, adicione o novo parceiro seguindo o mesmo modelo existente.

**6. Como poderei incluir novos cards de novidades na Gitly (que está em um carrossel na página principal) depois?**

- **Resposta**: Adicione o ícone do parceiro na pasta `public` e, no arquivo `midia.jsx` dentro da pasta `components`, adicione as informações do novo card abaixo da última `div`, seguindo o exemplo fornecido.

**7. Como poderei alterar/incluir/excluir novos cards de "O que nossos clientes dizem" (que estão em um carrossel da página principal) depois?**

- **Resposta**: Adicione a foto da pessoa na pasta `assets`, importe a foto como no exemplo (`import Pessoa from '../assets/pessoa.png';`), e no arquivo `testimonial.jsx`, adicione as informações do novo card abaixo da última `div`, seguindo o exemplo fornecido.

### Página Nosso Propósito

**1. Como poderei substituir a imagem do primeiro componente depois?**

- **Resposta**: No componente `herosection.jsx`, adicione a imagem na pasta `assets`, importe-a e substitua a imagem atual (nomeada como `premipt`). Alternativamente, você pode substituir a imagem atual por uma nova com o mesmo nome.

**2. Como poderei substituir a imagem do segundo componente depois?**

- **Resposta**: No componente `journey.jsx`, adicione a imagem na pasta `public`, importe-a e substitua a imagem atual (nomeada como `ourjourney`). Alternativamente, você pode substituir a imagem atual por uma nova com o mesmo nome.

**3. Como poderei substituir as imagens do carrossel depois?**

- **Resposta**: No componente `whywedo.jsx`, adicione a imagem na pasta `assets`, importe-a e substitua as imagens atuais (nomeadas como `imagem1`, `imagem2`, `imagem3`). Lembre-se de passar as imagens pelo tratamento no Figma conforme feito pelo designer.

### Página Nosso Processo

**1. Como poderei editar as imagens?**

- **Resposta**: No componente `heroParteners.jsx`, substitua a imagem seguindo o mesmo padrão das perguntas anteriores, adicionando a nova imagem na pasta `assets` e importando-a.

**2. Como poderei incluir novos clientes depois no carrossel?**

- **Resposta**: Adicione o ícone do parceiro na pasta `public` e, no arquivo `partners.jsx`, adicione o novo parceiro na lista seguindo o mesmo modelo existente.

**3. Como poderei substituir as imagens do componente "Os resultados em números" depois?**

- **Resposta**: Adicione a imagem na pasta `assets` e altere a imagem no componente `theresults.jsx`, seguindo o mesmo padrão.

**4. Como poderei substituir as imagens do componente "Nossos últimos trabalhos" depois?**

- **Resposta**: Adicione a imagem na pasta `assets` e altere a imagem no componente `latestWork.jsx`, seguindo o mesmo padrão.

**5. Como poderei substituir as imagens e textos do penúltimo componente depois?**

- **Resposta**: Adicione a imagem na pasta `assets` e altere a imagem no componente `project1.jsx`, seguindo o mesmo padrão.

### Página Mídia

**1. Como poderei editar, adicionar e excluir cards do carrossel da Gitly na mídia depois?**

- **Resposta**: Adicione a imagem na pasta `public`, importe-a e adicione as informações do novo card no arquivo `interviews.jsx` dentro da pasta `components`, seguindo o padrão existente.

**2. Como poderei editar, adicionar e excluir cards do carrossel dos artigos depois?**

- **Resposta**: Adicione a imagem na pasta `public`, importe-a e adicione as informações do novo card no arquivo `articles.jsx` dentro da pasta `components`, seguindo o padrão existente.

**3. Como poderei editar, adicionar e excluir cards do prêmios depois?**

- **Resposta**: Adicione a imagem na pasta `assets`, importe-a e adicione as informações do novo card no arquivo `prizes.jsx` dentro da pasta `components`, seguindo o padrão existente.

Seguindo estas instruções, você poderá fazer alterações no projeto Gitly conforme necessário. Se precisar de mais assistência, sinta-se à vontade para entrar em contato.
