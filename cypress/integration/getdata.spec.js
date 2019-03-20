context("nG Cypress HTTP", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  describe("Fetch all posts", () => {
    it("Should update UI when user GETs posts", () => {
      cy.get(".post-card").should("not.exist");
      cy.get(".post-card").should("have.length", 0);
      cy.get('button[data-cy="getPosts"]').click();
      cy.get(".post-card").should("exist");
      cy.get(".post-card").should("have.length", 100);
    });
  });
  describe("Fetch 10 posts by USER", () => {
    it("Should update UI when user GETs posts by ID", () => {
      cy.get(".post-card").should("not.exist");
      cy.get(".post-card").should("have.length", 0);
      cy.get('button[data-cy="getPostsByUser"]').click();
      cy.get(".post-card").should("exist");
      cy.get(".post-card").should("have.length", 10);
    });
  });
  describe("Fetch Users", () => {
    it("Should update UI when user GETs user list", () => {
      cy.get(".user-card").should("not.exist");
      cy.get(".user-card").should("have.length", 0);
      cy.get('button[data-cy="getUsers"]').click();
      cy.get(".user-card").should("exist");
      cy.get(".user-card").should("have.length", 10);
    });
  });
});
