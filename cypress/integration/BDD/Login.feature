Feature: Autenticação do sistema

    Validar a autenticação/segurança do sistema através da inserção de dados
    válidos e inválidos.

    Scenario: Acesso permitido
        When faço login com "6cbfd3c4"
        Then sistema deve ser redirecionado para página profile
        And devo ver a mensagem "Bem vinda, APAD"

    Scenario Outline: Login Negado
        When faço login com <login>
        Then devo ver alerta de mensagem "Falha no Login. Tente novamente."

        Examples:
            | login   |
            | " "     |
            | "tonystark" |