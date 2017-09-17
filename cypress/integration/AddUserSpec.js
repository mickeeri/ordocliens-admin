import faker from 'faker';

function signin() {
  cy.visit('/');
  cy.fixture('user').then(user => {
    cy.get('input[name=email]').type(user.email);
    cy.get('input[name=password]').type(user.password);
    cy.get('button[type=submit]').click();
  });
}

describe('AddUser', () => {
  beforeEach(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
  });

  it('should show add user link', () => {
    signin();
    cy.get('.UserList').contains('Lägg till ny användare');
  });

  it('should lead to form', () => {
    signin();
    cy
      .get('.UserList')
      .contains('Lägg till ny användare')
      .click();

    cy.get('#AddUser').contains('Lägg till användare');
  });

  it('save user with valid data', () => {
    signin();
    cy
      .get('.UserList')
      .contains('Lägg till ny användare')
      .click();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    cy.get('select[name="firmId"]').select('1');
    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.get('input[name="email"]').type(faker.internet.email());
    cy.get('button[type="submit"]').click();
    cy.get('.UserList').contains(`${firstName} ${lastName}`);
  });
});
