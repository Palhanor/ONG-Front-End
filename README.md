# Escola do Real

## Desenvolvedores
- Lucas Palhano
- Rafael
- Joélisson

## Tecnologias
- NextJS 13
- TypeScript
- TailwindCSS
- Axios (?)
- ESLint (Rocketseat)
- Prettier para Tailwind

## Padrões
- Desktop first
- Gitflow
- Commits semânticos em portugues
- Códigos em inglês
- API do Next

## Rotas do sistema
1. /
2. /curso/[slug]

(1) A primeira rota é a tela inicial, que deve servir como um landing page, explicando sobre a iniciativa do Escola do Real, enquanto dirige o leitor para a página do curso através de um Call to Action.
(2) A segunda rota se trata do curso em si. Lá deve ser possível ter informações sobre os professores, duração, e também o conteúdo com os módulos e as aulas. O ideal é que tudo fique dentro desta mesma página, para que não seja necessário navegar muito para visualizar os conteúdos do curso como um todo.

**OBS**: A opção de criar acessar o curso através de um slug dentro da rota de curso se deu pois no futuro podem haver outros cursos. Isso significa que será necessário criar a rota /cursos, e a partir desta será possível acesar vários cursos, o que significa que toda a estrutura da tela de curso já está montada para ser renderizada de acordo com a rota recebida.

## Futuro
1. Adição de mais cursos: Isso significa que será necessário criar uma página /cursos que listará todos os cursos da plataforma. A partir desta página nós poderemos ser levados então à /curso/[slug].
2. CMS para inserir materiais: Existe a possibilidade de desenvolver um sistema de CMS para permitir que a Escola do Real insira novos cursos, módulos e/ou vídeos sem a necessidade de desenvolvedores. Isso irá requerer a equipe de backend mais atuante para construir todo o sistema de autenticação, cadastro, login, configuração de banco de dados e todas da API.
3. Suporte a outros materiais: Pode ser necessário inserir outros tipos de conteúdo, como blog, vídeos avulsos, ebooks e afins. Neste caso, serão necessárias várias outras páginas, ou uma única página com todos os materiais organizados de forma lógica.
4. Formulário de inscrição próprio: Poderá ser criado um formulário para substituir o Google Form na captação de novos membros. Neste caso, será necessário também criar um dashboard onde serão armazenados de forma organizada todos os dados submetidos pelos interessados.

## Requisitos de sistema
*Cobertura: 5/10 (50%)*

Adicionar algum texto...

- [x] Quando clicar em um item do header, a página deve rolar até a seção
- [x] Ao rolar a página deve aparecer um botão para voltar ao topo
- [x] A duração é recebida como um número mas precisa ser convertida para um formato com máscara
- [x] Todos os inputs do campo “Fale conosco” são obrigatórios
- [x] Ao clicar em “Iniciar curso” e “Conheça nosso curso” o usuário deve ser mandado para a página do curso
- [ ] Ao clicar no botão de “Faça Parte” o usuário deve ser redirecionado para o Forms
- [ ] Ao clicar no botão de “Fazer Doação” po usuário deve ser redirecionado para o Patreon/Apoia-se
- [ ] Os módulos devem ser sistemas que expandem e se contraem ao clicar no ícone de arrow up e arrow down
- [ ] Ao clicar em uma aula é necessário armazená-la como assistido no localStorage, para que ela mude a cor exibida
- [ ] O background do banner da homepage deve ser um vídeo sem som, autoplay e em loop
*Adicionar novas...*

## Interfaces
*Atualizado em 25/08/2023*

Adicionar algum texto...
- **ICourse**
    -  id: number
    -  slug: string
    -  name: string
    -  banner: string
    -  about: string
    -  lessons: number
    -  duration: number
    -  professors: number[]
    -  modules: number[]
- **IProfessor**
    -  id: number
    -  image: string
    -  name: string
    -  subject: string
- **IModule**
    -  id: number
    -  title: string
    -  description: string
    -  duration: number
    -  lessons: number[]
- **ILesson**
    -  id: number
    -  thumb: string
    -  title: string
    -  description: string
    -  duration: number
    -  url: string

**OBS**: A estrutura não está devidamente normalizada por questão de otimização para trabalho no front. Mas pode ser ajustada caso necessário (consultar a equipe do Backend).

## API
- **Course**
    -  id: number
    -  slug: string
    -  name: string
    -  banner: string
    -  about: string
    -  lessons: number
    -  duration: number
    -  professors: Professor[]
    -  modules: Module[]
- **Module**
    -  id: number
    -  title: string
    -  description: string
    -  duration: number
    -  lessons: Lesson[]

**OBS**: Neste caso, o tipo Professor e Lesson são exatamente iguais aos das interfaces com os dados brutos.

## Design
Imagens e link do Figma...

## Estrutura do projeto
*Atualizado em 25/08/2023*
``` bash
├───app
│   ├───api
│   │   ├───cursos
│   │   │   └───[slug]
│   │   └───data
│   └───curso
│       └───[slug]
├───components
│   ├───course
│   │   ├───module
│   │   │   └───lesson
│   │   └───professor
│   ├───general
│   │   ├───Footer
│   │   ├───Header
│   │   ├───Icons
│   │   ├───ScrollTop
│   │   └───Title
│   └───homepage
│       ├───About
│       ├───Banner
│       ├───Button
│       ├───Course
│       ├───Location
│       │   └───Card
│       ├───Message
│       ├───Navbar
│       └───Partners
├───interfaces
├───model
├───server
└───utils
```
Explicar as pastas e o que elas armazenam!

## Informações Adicionais
- Usar Redux
- TDD (?) → Jest, Cypress, React Testing Library???
- Preciso ver se os curso e módulo tem duration, ou se vão calcular a partir das aulas
- Preciso criar um bom sistema de relações entre as entidades
    - Um curso tem vários professores e um professor pode dar vários cursos
    - Um curso tem vários módulos e um módulo só pode estar em um curso
    - Um módulo tem várias aulas e um módulo só pode estar em um módulo