<details> 
<summary>
Funcionalidade: Tela Inicial
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de possuir um campo para adicionar minha tarefa
    Porque assim inicio a minha lista de tarefa


### Regras de Negócio
#### RN1:
    Possuir um campo de input com uma arial label escrito "O que preciso fazer?

### Critérios de Aceite
 #### CA01:
    Dado que estou na aplicação 
    Quando visualizo o campo de input
    Então consigo adicionar o texto
    E o mesmo possui arial label

</details>

<details> 
<summary>
Funcionalidade: Adicionar itens
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de criar a minha lista
    Porque assim consigo saber o que ja foi feito

### Regras de Negócio
#### RN1: 
    Ao adicionar o primeiro item na lista, deve ser exibido no rodapé da lista uma sequência de filtros
#### RN2:
    Quando adicionado um item a lista, o mesmo deve possuir um radio button para a sua conclusão e um X para a sua exclusão
#### RN3:
    No rodapé, deve ser incluido a quantidade de itens a serem resolvidos e a opção de filtro (Todos, Ativos, Concluidos)
#### RN4:
    Ser incluido no input, a opção de marcar todos, onde irá marcar todos os itens da lista como Concluidos

### Critérios de Aceite
#### CA01:
    Dado que foi adicionado um item ao nosso checklist
    Quando exibido na lista
    Então o rodapé deve estar abaixo dos itens a serem realizados
    E o mesmo possui arial label
#### CA02:
    Dado que foi adicionado a lista
    Quando visualizo este item
    Então deve ser adicionado um radio button a esquerda do item
    E um X a direita do item
#### CA03:
    Dado que temos ao menos um item no checklist
    Então deve ser exibido no input um icone para marcar todos

</details>

<details> 
<summary>
Funcionalidade: Validar Filtro - Todos
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de ver as minhas tarefas do dia
    Porque assim identificar quais tarefas preciso fazer e quais ja foram concluídas

### Regras de Negócio
#### RN1:
    Este é o filtro default, sempre ao adicionar um item na lista ele é adicionado.
#### RN2:
    Quando selecionado ele deve monstrar as tarefas concluídas e as a serem feitas
#### RN3:
    O número de tarefas a serem feitas deve refletir com a lista de itens exibidas.

### Critérios de Aceite
#### CA01:
    Dado que uma lista foi criada
    Quando selecionamos o filtro todos
    Então deve ser exibidos todos os itens a serem realizados e todos os itens ja concluidos
#### CA02:
    Dado que uma lista foi criada
    Quando exibido ao menos um item
    Então o contador de itens restantes deve ser igual ao número de tarefas a serem realizadas

</details>

<details> 
<summary>
Funcionalidade: Validar Filtro - Ativos
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de ver as minhas tarefas que ainda não foram realizadas
    Porque assim identificar quais tarefas preciso fazer

### Regras de Negócio
#### RN1:
    Quando clico no filtro de Ativos, então devem ser exibidos apenas os itens que não foram concluídos
#### RN2:
    O contator de itens deve ser igual ao número de itens exibidos na lista.
#### RN3:
    O número de tarefas a serem feitas deve refletir com a lista de itens exibidas.

### Critérios de Aceite
#### CA01:
    Dado que existe uma lista de itens a serem realizados
    Quando clicamos em ativos
    Então a lista de itens a serem feitos deve ser exibida
    E o contador deve possuir o mesmo número de itens abertos da lista

</details>

<details> 
<summary>
Funcionalidade: Validar Filtro - Concluidos
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de ver as minhas tarefas que ja foram concluidas
    Porque assim identificar quais tarefas ja realizei

### Regras de Negócio
#### RN1:
    Quando clico no filtro de Completo, então devem ser exibidos apenas os itens que foram concluídos

### Critérios de Aceite
#### CA01:
    Dado que existe ao menos um item finalizado
    Quando clicamos em Concluidos
    Então a lista de itens concluídos deve ser exibida
    E o contador deve possuir o mesmo número de itens em aberto da lista

</details>

<details> 
<summary>
Funcionalidade: Conclusão de itens - unitária
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de marcar um item como concluido
    Porque assim consigo controlar quais itens eu ja realizei

### Regras de Negócio
#### RN1:
    Quando clico no radio button ao lado do nome da tarefa, então ela deve ser dada como concluida
#### RN2:
    O contador de itens deverá deixar de contar aquela 
    
### Critérios de Aceite
#### CA01:
    Dado que exista um item a ser realizado
    Quando clico para finalizar uma tarefa
    Então ela deve ser concluida
    E ela deve deixar de contar no contador de itens

</details>

<details> 
<summary>
Funcionalidade: Conclusão de itens - todos
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de concluir todos os itens da lista
    Porque assim consigo finalizar todas juntas

### Regras de Negócio
#### RN1:
    Ter um botão no campo de input que irá finalizar todas as tarefas
#### RN2:
    Ao selecionar, o contador de itens deverá ficar zerado

### Critérios de Aceite
#### CA01:
    Dado que tenha um item a ser realizado
    Quando clico para marcar todos como concluido
    Então todas as tarefas da lista deverão ser concluídas
    E o contador de itens deverá ficar zerado

</details>

<details> 
<summary>
Funcionalidade: Limpar itens concluídos
</summary>

### User Story
    Eu como usuário da aplicação
    Gostaria de limpar todos os itens ja concluidos
    Porque assim consigo visualizar apenas os que faltam

### Regras de Negócio
#### RN1:
    Ter um botão no rodapé que limpa todos os itens finalizados
#### RN2:
    Ao concluir pelo menos uma tarefa, o botão deverá ser exibido

### Critérios de Aceite
 #### CA01:
    Dado que exista um item concluido
    Quando clico em Limpar Tarefas Concluidas
    Então todas as tarefas finalizadas são removidas

</details>