import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:3333/docs/json', // url com a documentação swagger em json da API
    output: {
      target: './src/http/api.ts', // arquivo de configuração/conexão que será gerado com base na documentação
      client: 'fetch',
      httpClient: 'fetch',
      clean: true, // limpa o arquivo de configuração/conexão anterior
      baseUrl: 'http://localhost:3333', // url base da API

      override: {
        fetch: {
          includeHttpResponseReturnType: false, // para não incluir no retorno das respostas da API a tipagem de todos os HTTP Codes possíveis, só a tipagem dos dados
        },
      },
    },
  },
})
