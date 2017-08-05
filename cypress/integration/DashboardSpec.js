function signin() {
  cy.visit('/');
  cy.fixture('user').then(user => {
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
    cy.get('button[type=submit]').click();
  });
}

describe('Dashboard', () => {
  beforeEach(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
  });

  it('should show list of users', () => {
    signin();
    cy.get('.UserList');
  });
});
