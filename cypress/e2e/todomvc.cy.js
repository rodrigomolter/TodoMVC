/// <reference types="../support/commands.d.ts" />
import { faker } from '@faker-js/faker/locale/en'

let todoInputPlaceholder = 'What needs to be done?'

describe('TodoMVC', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  context('When page is initially oppen', () => {
    it('should have a todo input field', () => {
      cy.get('input[data-testid=text-input]')
        .as('newTodoInput')
        .should('be.visible')
        .and('be.focused')
        .and('have.attr', 'placeholder', todoInputPlaceholder)
    })

    it('and has no todo', () => {
      cy.get('[data-testid=footer]').should('not.exist')
      cy.get('[data-testid=footer]').should('not.exist')
      cy.get('[data-testid=todo-list')
        .should('not.be.visible')
        .and('be.empty')
    })

    it('should allow me to add tasks', () => {
      let random = faker.number.int({min: 1, max: 3})

      Cypress._.times(random, () => {
        const myTask = faker.word.words()
        cy.createNewTaskbyGUI(myTask)

        cy.get('[data-testid=todo-list]')
          .should('be.visible')
          .and('contain', myTask)
      })
      cy.get('[data-testid=todo-list')
        .should('be.visible')
        .find('li')
        .its('length')
        .should('equal', random)
    })
  })

  context('When I add a new task', () => {
    const myTask = faker.word.words({ count: { min: 2, max: 5 }})
    beforeEach(() => {
      cy.createNewTaskbyGUI(myTask)
    })

    it('Should show me options to complete or delete a task', () => {
      cy.get('[data-testid=toggle-all]')
        .should('exist')
        .and('not.have.css', 'display', 'none')
        .and('not.have.css', 'visibility', 'hidden')


      cy.get('[data-testid=todo-item-toggle]')
        .should('exist')
        .and('not.have.css', 'display', 'none')
        .and('not.have.css', 'visibility', 'hidden')


      cy.get('[data-testid=todo-item]')
        .realHover()
      cy.get('[data-testid=todo-item-button]')
        .should('be.visible')

    })

    it('Should show me a footer', () => {
      cy.get('[data-testid=footer]')
        .should('be.visible')

      cy.get('.todo-count')
        .should('be.visible')
        .and('have.text', '1 item left!')

      cy.get('[data-testid=footer-navigation]')
        .should('be.visible')
        .find('a.selected')
        .should('be.visible')
        .invoke('text')
        .should('eq', 'All')
    })

  })


  context('when I have completed tasks and unfinished tasks ', () => {
    let ALL_TASKS = 4
    let COMPLETED_TASKS = 2
    let ACTIVE_TASKS = ALL_TASKS - COMPLETED_TASKS

    beforeEach(() => {
      cy.createDefaultTaskList()

      cy.get('[data-testid=todo-list]')
        .should('be.visible')
        .find('li')
        .as('taskList')
    })

    it('should allow me to filter for unfinished tasks', () => {

      cy.get('[data-testid="footer-navigation"] a').contains('Active').click()

      cy.get('[data-testid=footer-navigation]')
        .find('a.selected')
        .should('be.visible')
        .invoke('text')
        .should('eq', 'Active')

      cy.get('@taskList')
        .should('be.visible')
        .its('length')
        .should('equal', ACTIVE_TASKS)

    })

    it('should allow me to filter for completed tasks', () => {
      cy.get('[data-testid="footer-navigation"] a').contains('Completed').click()

      cy.get('[data-testid=footer-navigation]')
        .find('a.selected')
        .should('be.visible')
        .invoke('text')
        .should('eq', 'Completed')

      cy.get('@taskList')
        .should('be.visible')
        .its('length')
        .should('equal', COMPLETED_TASKS)

      cy.get('@taskList').each(($li) => {
        cy.wrap($li).should('have.class', 'completed')
      })
    })

    it('should allow me to filter for all tasks', () => {
      cy.get('[data-testid="footer-navigation"] a').contains('All').click()

      cy.get('[data-testid=footer-navigation]')
        .find('a.selected')
        .should('be.visible')
        .invoke('text')
        .should('equal', 'All')

      cy.get('@taskList')
        .should('be.visible')
        .its('length')
        .should('equal', ALL_TASKS)

      cy.get('@taskList')
        .filter('.completed')
        .its('length')
        .should('equal', COMPLETED_TASKS)
    })

    it('should allow to complete a task', () => {
      cy.get('@taskList')
        .first()
        .as('firstTask')

      cy.get('@firstTask')
        .should('be.visible')
        .find('[data-testid=todo-item-toggle]')
        .check()

      cy.get('@firstTask')
        .should('have.class', 'completed')

      cy.get('.todo-count')
        .should('be.visible')
        .and('have.text', '1 item left!')
    })

    it('should allow to complete all tasks', () => {
      cy.get('[data-testid="toggle-all"]')
        .check()

      cy.get('@taskList')
        .should('be.visible')
        .its('length')
        .should('equal', ALL_TASKS)

      cy.get('@taskList').each(($li) => {
        cy.wrap($li).should('have.class', 'completed')
      })

      cy.get('.todo-count')
        .should('be.visible')
        .and('have.text', '0 items left!')
    })

    it('should allow to clear all completed tasks', () => {
      cy.contains('button', 'Clear completed')
        .should('be.visible')
        .click()

      cy.get('@taskList')
        .should('be.visible')
        .its('length')
        .should('equal', ACTIVE_TASKS)

      cy.get('@taskList').each(($li) => {
        cy.wrap($li).should('not.have.class', 'completed')
      })

      cy.get('.todo-count')
        .should('be.visible')
        .and('have.text', `${ACTIVE_TASKS} items left!`)
    })

    it.only('should allow me to delete a task', () => {
      cy.get('@taskList')
        .first()
        .as('firstTask')

      cy.get('@firstTask')
        .should('be.visible')
        .realHover()
        .find('[data-testid=todo-item-button]')
        .should('be.visible')
        .click()

      cy.get('@taskList')
        .should('be.visible')
        .its('length')
        .should('equal', ALL_TASKS-1)
    })
  })
})