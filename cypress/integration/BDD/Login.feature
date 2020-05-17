Feature: Autenticação do sistema

    Validar a autenticação/segurança do sistema através da inserção de dados
    válidos e inválidos.

    Scenario: Acesso permitido
        When faço login com "tomsmith" e "SuperSecretPassword!"
        Then sistema deve ser redirecionado para página secure
        And devo ver a mensagem de sucesso "You logged into a secure area!"

    Scenario Outline: Login Negado
        When faço login com <login> e <senha>
        Then devo ver alerta de mensagem <mensagem>

        Examples:
            | login      | senha                  | mensagem                    |
            | "tomsmith" | "secret"               | "Your password is invalid!" |
            | "teste"    | "SuperSecretPassword!" | "Your username is invalid!" |
            | " "        | "SuperSecretPassword!" | "Your username is invalid!" |
            | "tomsmith" | " "                    | "Your password is invalid!" |
            | "teste"    | "teste"                | "Your username is invalid!" |