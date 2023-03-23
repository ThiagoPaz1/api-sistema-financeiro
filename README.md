# Seja bem vindo :smile:
#### API destinada para gerenciamento de finanças pessoais.
#### API rodando na porta 8089

<details>
<summary><b>Login</b></summary>


**Registre um usuário em**:
```http
POST localhost:8189/user/create/
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `corpo da requisição` | `json` | **Obrigatório**. name, email e password|
**Exemplo**:
```json
{
    "name": "ola mundo",
    "email": "ola@mundo.com",
    "password": "senhaqualquer@!#"
}
```
**Pegue o Token na rota**:
```http
POST localhost:8189/login/session 
```
**ou**
```http
POST localhost:8189/user/session 
```
**Você vai ter que passar o mesmo usuário e senha para resgatar o token**:
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `corpo da requisição` | `json` | **Obrigatório**. email e password|

```json
{
  "email": "ola@mundo.com",
  "password": "senhaqualquer@!#"
}
```

</details>

<br>

<details>
<summary><b>Docker</b></summary>

Instale o Docker Desktop em sua máquina.
E rode o comando <em>*`docker-compose up -d`*</em>.
</details>
