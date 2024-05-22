describe('template spec', () => {
  let musicaItem

  before('Entrar no app', () => {
    cy.visit('/')
  })

  // Scenario 1
  it('Verificar de há uma lista de playlists', () => {
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
    cy.wait(2000)
  });

  it('Clicar na primeira playlist', () => {
    cy.get("[aria-label='playlist-item']").first().click()
  });

  it('Verificar se há músicas na primeira playlist', () => {
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.wait(2000)
  });

  it('Clicar na primeira música da primeira playlist', () => {
    cy.get("[aria-label='music-item']").first().click();
    cy.wait(5000)
  });

  // Scenario 2
  it('Retornar a tela principal', () => {
    cy.get("[aria-label='icon-return']").click();
    cy.scrollTo("top")
    cy.wait(2000)
  });

  it('Entrar na segunda playlist', () => {
    cy.get("[aria-label='playlist-item']").eq(1).click()
  });

  it('Verificar se há músicas na segunda playlist', () => {
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.wait(2000)
  });

  it('Clicar na primeira música da segunda playlist', () => {
    cy.get("[aria-label='music-item']").first().click();
    cy.wait(5000)
  });

  // Scenario 3
  it('Redirecionar para menu de pesquisa', () => {
    cy.get("[href='/Search']").click();
    cy.scrollTo("top")
    cy.wait(2000)
  });

  it('Digitar o nome uma música no input da página', () => {
    cy.get("[data-testid='campoBusca']").type("Trem-Bala")
    cy.get("[data-testid='campoBusca']").should("have.length.greaterThan", 0)
    cy.scrollTo("top")
  });

  it('Verificar se há a música encontrada', () => {
    cy.get("[aria-label='music-item-sch']").should("have.length.greaterThan", 0)
    cy.wait(2000);
  });

  it('Clicar na primeira música pesquisada', () => {
    cy.get("[aria-label='music-item-sch']").first().click()
    cy.wait(5000)
    cy.get("[aria-label='music-item-sch']").first().click()
  });

  it('Clicar em favoritar a música', () => {
    cy.get("[aria-label='music-item-sch']").get("[data-testid='icon-button-sch']").first().click();
    cy.wait(2000)
  });

  // Scenario 4
  it('Clicar no menu de favoritos', () => {
    cy.get("[href='/Favorites']").click();
    cy.scrollTo("top")
    cy.wait(2000)
  });

  it('Verificar que se há músicas no menu de favoritos e clicar na música favoritada', () => {
    cy.get("[aria-label='music-item-fav']").should("have.length.greaterThan", 0).first().click();
    cy.wait(2000);
    cy.scrollTo("top")
  });
})