describe("user form flow", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("http://localhost:3000/");
  });

  it("user posts a tweet", () => {
    // Post a tweet
    cy.get(".compose-tweet-btn").click({ force: true });
    cy.get('textarea[name="tweet"]').type(
      "What happened to all that fun you were having?! Come on, lets try to enjoy this!",
      { force: true }
    );
    cy.get(".post-tweet-btn").click({ force: true });
  });

  it("user posts a second tweet", () => {
    // Post a tweet
    cy.get(".compose-tweet-btn").click({ force: true });
    cy.get('textarea[name="tweet"]').type(
      "That was an Attack on Titan easter egg 🥚 😄",
      { force: true }
    );
    cy.get(".post-tweet-btn").click({ force: true });
  });

  it("user posts a third tweet", () => {
    // Post a tweet
    cy.get(".compose-tweet-btn").click({ force: true });
    cy.get('textarea[name="tweet"]').type(
      "The Rumbling arrives on Marley 😱 https://www.youtube.com/watch?v=wT2H68kEmi8",
      { force: true }
    );
    cy.get(".post-tweet-btn").click({ force: true });
  });
});
