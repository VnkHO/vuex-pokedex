// https://docs.cypress.io/api/introduction/api.html

describe('Pokedex App', () => {
  it('Click on the button Enter in the Pokedex Starter', () => {
    cy.visit('/')
    // cy.get('.pokedexStarter-mid__cta--pokedex--link').contains('Enter')
    cy.get('.pokedexStarter-mid__cta--pokedex--link').click()
  });


  it('Click on the button for going to the Pokedex in the Map', () => {
    cy.visit('/home')
    cy.get('p').click()
  });

  it('Search for a pokemon and the pokemon information', () => {
    cy.visit('/pokedex')
    cy.wait(9000)
    cy.get('.pokedexList-input--filter').type('pikachu')
    cy.get('.pokedexList-input--filter').should('have.length', 1)
    cy.get('.pokedexList-information__title').should('have.length', 1)
    cy.get('.pokedexList-information__title').contains('pikachu')
    cy.get('.pokedexList-link').click().then(() => {
      // Information about the pokemon
      cy.get('.pokemon-title__primary').contains('pikachu')
      cy.get('.pokemon-title__primary').should('have.length', 1)
      cy.get('.pokemon-Order > p').contains('#025')
      cy.get('.pokemon-Order > p').should('have.length', 1)

      cy.get('a').click()
    })
      .then(() => {
        cy.get('.pokedexList-input--filter').type('eevee')
        cy.get('.pokedexList-input--filter').should('have.length', 1)
        cy.get('.pokedexList-information__title').contains('eevee')
        cy.get('.pokedexList-information__title').should('have.length', 1)
        cy.get('.pokedexList-link').click()
      })
  });

})
