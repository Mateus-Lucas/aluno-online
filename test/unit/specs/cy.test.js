describe('Testes do conceito médio CA', () => {

  // Teste cypress para nota superior
  it('retorna conceito SS - Superior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('9.5');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'SS - Superior');
  });
  
  // Teste cypress para nota média superior
  it('retorna conceito MS - Médio Superior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('8.2');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'MS - Médio Superior');
  });
  
  // Teste cypress para nota média
  it('retorna conceito MM - Médio', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('6.3');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'MM - Médio');
  });
  
  // Teste cypress para nota média inferior
  it('retorna conceito MI - Médio Inferior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('2.1');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'MI - Médio Inferior');
  });
  
  // Teste cypress para nota inferior
  it('retorna conceito II - Inferior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('1.3');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'II - Inferior');
  });
  
  // Teste cypress para nota sem rendimento
  it('retorna conceito SR - Sem rendimento', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('0.0');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'SR - Sem rendimento');
  });
  
  // Teste cypress para nota inválida
  it('exibe mensagem de erro para nota inválida', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('-2');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('not.exist');
    cy.get('.error-message').should('exist');
  });
});