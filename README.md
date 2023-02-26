# <p align="center">Projeto DT Money</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Rafael_Soares-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/rafaelsoares07/dt-money?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição:
Este é um lugar onde você pode facilmente controlar suas finanças, monitorando suas entradas e saídas de dinheiro de maneira simples e organizada.
Gerencie suas finanças com facilidade e comece a tomar decisões financeiras mais inteligentes hoje mesmo!

## :art: Layouts:
![Desktop](https://user-images.githubusercontent.com/88918826/221388791-4e93705e-e47b-443a-b83d-68eeba8c7dd3.png)

## :computer: Tecnologias e Libs utilizadas:
- ReactJS
- TypeScript
- Styled Components
- MirageJS

## :rocket: Rotas do MirageJS
```yml
GET /api/transaction
  - Rota para pegar as transações já cadastradas
```

```yml
POST /api/transaction
  - Rota para cadastrar uma nova transação
  -body:{
     "title":"lorem",
     "amount":"1234",
     "category":"lorem",
     "type":"deposit" | "withdraw"
  }
```
## Mais Informações do projeto:
[Deploy Vercel](https://github.com/rafaelsoares07/projeto20-repoProvas-FRONT)

