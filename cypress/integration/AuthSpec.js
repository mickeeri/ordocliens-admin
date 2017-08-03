function signin() {
  cy.visit('/');
  cy.fixture('user').then(user => {
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
    cy.get('button[type=submit]').click();
  });
}

describe('Login page', () => {
  beforeEach(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
  });

  describe('Unsuccessful sign in', () => {
    it('Shows error message on unsuccessful login attempt', () => {
      cy.visit('/');
      cy.get('input[name=email]').type('wrong@email.com');
      cy.get('input[name=password]').type('wrongpassword');
      cy.get('button[type=submit]').click();
      cy.get('.SignInForm').contains('Felaktiga inloggningsuppgifter');
    });
  });

  describe('Successful sign in', () => {
    beforeEach(() => {
      signin();
    });

    it('shows the dahboard after successful login', () => {
      cy.get('.Dashboard').contains('This is the dashboard');
    });

    it('should show logout button in top navbar', () => {
      cy.get('header').contains('Logga ut');
    });
  });

  describe('Sign out', () => {
    beforeEach(() => {
      signin();
    });

    it('should be possible to sign out', () => {
      cy.get('header').contains('Logga ut').click();
      cy.get('header').should('not.contain', 'Logga ut');
    });

    it('signout should redirect to login form', () => {
      cy.get('header').contains('Logga ut').click();
      cy.get('main').contains('Logga in');
    });
  });

  describe('Clicking logo', () => {
    it('when signed out should redirect to login', () => {
      cy.get('header').contains('Ordocliens Admin').click();
      cy.location('pathname').should('be', 'login');
    });

    it('when signed in should redirect to dashboard', () => {
      signin();
      cy.get('header').contains('Ordocliens Admin').click();
      cy.location('pathname').should('be', '/');
      cy.get('.Dashboard');
    });
  });
});
