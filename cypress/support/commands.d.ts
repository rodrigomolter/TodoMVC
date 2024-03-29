/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Creates a new task via the graphical user interface (GUI).
     *
     * @param task string - The task name
     *
     * @example cy.createNewTaskbyGUI() // Creates a new task with a random name.
     * @example cy.createNewTaskbyGUI('Take out the trash') // Creates a new task using the provided details.
     */
    createNewTaskbyGUI(task?: string): void | Cypress.Chainable<null>
    
    /**
     * Creates a list of 04 tasks with two of them marked as complete.
     * 
     * It calls cy.createNewTaskbyGUI() with no params
     * 
     * @example cy.createDefaultTaskList()
     * [ ] Take out the trash
     * [x] Do the Dishes
     * [x] Feed the cat
     * [ ] Send email to the executive
     */
    createDefaultTaskList(): void | Cypress.Chainable<null>
  }
}
