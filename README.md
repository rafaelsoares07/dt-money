# <p align="center">Projeto DT Money</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Rafael_Soares-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/rafaelsoares07/dt-money?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição:
Este é um lugar onde você pode facilmente controlar suas finanças, monitorando suas entradas e saídas de dinheiro de maneira simples e organizada.
Gerencie suas finanças com facilidade e comece a tomar decisões financeiras mais inteligentes hoje mesmo!

## :art: Layouts:
### <p align="center">Desktop</p>
![Desktop](https://user-images.githubusercontent.com/88918826/221388791-4e93705e-e47b-443a-b83d-68eeba8c7dd3.png)
### <p align="center">Mobile</p>
<div align="center">
   <img src="https://user-images.githubusercontent.com/88918826/221389117-9878314e-65df-4518-8d6c-c186af833842.png"/>
</div>


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
## :muscle: Novos Aprendizados:
Para realizar esse projeto, decidi utilizar o MirageJS, uma biblioteca de simulação de API que permitiu criar uma experiência de desenvolvimento mais rápida e mais eficiente.

Ao utilizar o MirageJS, pude criar mocks de API que permitiram simular as chamadas reais à API e trabalhar no frontend sem a necessidade de depender da API real para testar e iterar meu trabalho. Com essa abordagem, pude desenvolver novos recursos sem ter que esperar pela implementação da API real e sem o risco de afetar os dados reais do usuário.

## :heavy_plus_sign: Mais Informações do projeto:
[Deploy Vercel](https://dt-money-nine-dun.vercel.app/)

