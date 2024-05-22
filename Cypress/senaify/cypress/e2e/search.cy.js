describe('template spec', () => {
  let musicaItem

  before(() => {
    cy.visit('/')
  })

  it('Redirecionar para a tela de busca', () => {
    cy.get("[href='/Search']").click();
  })

  it('Procurando uma música', () => {
    cy.get("[data-testid='campoBusca']").type("Trem Bala")
    cy.get("[data-testid='campoBusca']").should("have.length.greaterThan", 0)
    cy.scrollTo("top")
  });

  it('Clicar na música desejada', () => {
    // cy.get("[aria-label='music-item']").contains("Ana Vilela").click()

    musicaItem = cy.get("[aria-label='music-item']").contains("Ana Vilela")
    musicaItem.click()
  });

  it('Clicar em curtir a música', () => {
      cy.get(musicaItem).get("[data-testid='icon-button']").first().click();
  });
})