describe('template spec', () => {
  // LOGIN INVALIDO
  it('login invalido', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('testeleo3@hotmail.com')
    cy.get('[data-testid="senha"]').type('teste1234')
    cy.get('[data-testid="entrar"]').click()
    cy.contains('Email e/ou senha inválidos').should('exist')
  })

  //CADASTRAR USUÁRIO
  it ('cadastrar usuário', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('leo')
    cy.get('[data-testid="email"]').type('testeleo4@hotmail.com')
    cy.get('[data-testid="password"]').type('teste1234')
    cy.get('[data-testid="checkbox"]').click()
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('.alert').contains('Cadastro realizado com sucesso')
  })

  //ACESSAR CONTA CADASTRADA
  it.only ('cadastrar usuário', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('testeleo4@hotmail.com')
    cy.get('[data-testid="senha"]').type('teste1234')
    cy.get('[data-testid="entrar"]').click()
    cy.get('h1').contains('Bem Vindo leo')
  })
})