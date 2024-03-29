import { faker } from '@faker-js/faker/locale/en'

Cypress.Commands.add('createNewTaskbyGUI', task => {
  task = task || faker.word.words({ count: { min: 2, max: 5 }})
  cy.get('input[data-testid=text-input]')
    .as('input')
    .should('be.visible')

  cy.get('@input')
    .type(`${task}{enter}`)
})

Cypress.Commands.add('createDefaultTaskList', () => {

  Cypress._.times(4, () => cy.createNewTaskbyGUI())

  cy.get('[data-testid=todo-list]')
    .should('be.visible')
    .find('li')
    .as('taskList')

  cy.get('@taskList')
    .its('length')
    .should('equal', 4)

  cy.get('@taskList')
    .eq(1)
    .find('[data-testid=todo-item-toggle]')
    .check()

  cy.get('@taskList')
    .eq(2)
    .find('[data-testid=todo-item-toggle]')
    .check()

  cy.get('@taskList')
    .eq(0)
    .find('[data-testid=todo-item-toggle]')
    .should('not.be.checked')

  cy.get('@taskList')
    .eq(3)
    .find('[data-testid=todo-item-toggle]')
    .should('not.be.checked')
})