### BOAS PRÁTICAS

- Sempre retornar um código de response para o cliente
- Utilizar sempre os verbos HTTP corretos para as requests
- Não deixar barra no final do endpoint

### STATUS:

- 1xx: Informação
- 2xx: Sucesso
   - 200: OK
   - 201: CREATED
   - 204: Não foi encontrado conteúdo PUT POST DELETE
- 3xx: Redirecionamento
- 4xx: Erro Client
   - 400: Bad Request
   - 404: Not Found
- 5xx: Server Error
   - 500: Internal Server Error

### Verbos HTTP

- GET: Receber dados do servidor
- POST: Enviar dados para o servidor
- PUT: Alterar dados do servidor
- DELETE: Deletar dados do servidor