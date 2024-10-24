# NestJS Serverless API

Esta API foi construída utilizando NestJS e implementada no AWS Lambda com o Serverless Framework. Abaixo estão as instruções para rodar o projeto localmente e realizar o deploy.

O desenvolvimento com NestJS e Serverless Framework foi escolhido para aproveitar benefícios como escalabilidade automática, redução de custos e rapidez no desenvolvimento. Essa abordagem é especialmente vantajosa para APIs e microsserviços, permitindo que a aplicação escale de forma eficiente e seja executada com custos reduzidos, pagando apenas pelo uso efetivo dos recursos.

A combinação desses frameworks oferece agilidade no desenvolvimento, com um conjunto robusto de ferramentas para codificação, testes e deploy. Como o Serverless Framework gerencia a infraestrutura e o escalonamento, o foco do desenvolvimento ficou na lógica de negócio, sem a necessidade de configurar manualmente servidores ou ajustar a escalabilidade. Isso acelera o tempo de entrega e simplifica o processo de deploy.

## Visão Geral

A API Agente é uma aplicação construída em NestJS e projetada para gerenciar agendas médicas, com funcionalidades que incluem listagem de médicos e seus horários disponíveis, além do agendamento de consultas. A API foi desenvolvida seguindo boas práticas REST, utilizando AWS Lambda para execução serverless, TypeScript, e incluindo testes unitários e end-to-end (E2E).

##### Estrutura do Projeto

A estrutura do projeto segue o padrão de módulos do NestJS, organizando controladores, serviços e DTOs em pastas específicas. A API tem duas principais funcionalidades:

    Listagem de Agendas: Retorna médicos e horários disponíveis para consulta.
    Agendamento de Consultas: Realiza o agendamento de uma consulta para o paciente.

    ```bash

      ├── src
      │   ├── agendamento
      │   │   ├── controller
      │   │   │   └── agendamento.controller.ts
      │   │   ├── dto
      │   │   │   └── create-agendamento.dto.ts
      │   │   ├── service
      │   │   │   └── agendamento.service.ts
      │   │   └── mocks
      │   │       └── medicos.mock.ts
      │   ├── agendas
      │   │   ├── controller
      │   │   │   └── agendas.controller.ts
      │   │   ├── service
      │   │   │   └── agendas.service.ts
      │   ├── app.module.ts
      │   └── main.ts
      ├── test
      │   ├── agendamento.e2e.test.ts
      │   ├── agendas.e2e.test.ts
      │   ├── agendamento.service.spec.ts
      │   ├── agendas.service.spec.ts
      ├── jest.config.ts
      ├── package.json
      ├── serverless.yml
      ├── tsconfig.json
      └── README.md
   ```

## Pré-requisitos

- Node.js
- AWS CLI configurado
- Serverless Framework instalado (`npm install -g serverless`)

## Rodando o projeto localmente

1. Clone o repositório.
2. Instale as dependências:
   ```bash
      npm install
   ```
3. Execute
   ```bash
      serverless offline
   ```

## Opcional
1. Execute o deploy 
  ```bash
   serverless deploy

## Uso da API

A Agende API possui os seguintes endpoints disponíveis:

    GET /agendas
        Retorna uma lista de médicos e seus horários disponíveis.
        Exemplo de resposta:

        json

    {
      "medicos": [
        {
          "id": 1,
          "nome": "Dr. João Silva",
          "especialidade": "Cardiologista",
          "horarios_disponiveis": ["2024-10-05 09:00", "2024-10-05 10:00"]
        }
      ]
    }

   POST /agendamento

      Cria um novo agendamento de consulta.
      Corpo da requisição:

      json

   {
   "medicoId": 1,
   "horario": "2024-10-05 09:00",
   "paciente": "Maria Oliveira"
   }

Exemplo de resposta:

      json

        {
          "mensagem": "Agendamento realizado com sucesso",
          "agendamento": {
            "medicoId": 1,
            "horario": "2024-10-05 09:00",
            "paciente": "Maria Oliveira"
          }
        }

## Testes

O projeto foi desenvolvido com suporte a testes unitários e E2E usando o Jest e Supertest.

    Testes Unitários: Os testes unitários estão localizados na pasta test e cobrem as funcionalidades dos serviços e controladores. Para rodar os testes:
     ```bash
    npm run test
