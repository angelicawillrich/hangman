describe("Initial Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should show the page title", () => {
    cy.get('[data-testid="title"]').should("be.visible");
  });

  it("should show the hang component", () => {
    cy.get('[data-testid="hang"]').should("be.visible");
  });

  it("should show the hang component with the body parts", () => {
    cy.get('[data-testid="hangman"]').should("be.visible");
  });

  it("should show the word component", () => {
    cy.get('[data-testid="hangman_word"]').should("be.visible");
  });

  it("should show the keyboard component", () => {
    cy.get('[data-testid="keyboard"]').should("be.visible");
  });
});

describe("Hangman Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173?testWord=home");
  });

  it('should show winner modal when user types "home" letters', () => {
    cy.contains("button", "h").click();
    cy.contains("button", "o").click();
    cy.contains("button", "m").click();
    cy.contains("button", "e").click();

    cy.contains("Winner!").should("be.visible");
  });

  it("should show the head if user types one wrong letter", () => {
    cy.contains("button", "k").click();

    cy.get('[data-testid="head"]').should("be.visible");
  });

  it("should show the body if user types two wrong letters", () => {
    cy.contains("button", "k").click();
    cy.contains("button", "p").click();

    cy.get('[data-testid="body"]').should("be.visible");
  });

  it("should show the right arm if user types three wrong letters", () => {
    cy.contains("button", "k").click();
    cy.contains("button", "p").click();
    cy.contains("button", "v").click();

    cy.get('[data-testid="right_arm"]').should("be.visible");
  });

  it("should show the left arm if user types four wrong letters", () => {
    cy.contains("button", "k").click();
    cy.contains("button", "p").click();
    cy.contains("button", "v").click();
    cy.contains("button", "a").click();

    cy.get('[data-testid="left_arm"]').should("be.visible");
  });

  it("should show the left arm if user types five wrong letters", () => {
    cy.contains("button", "k").click();
    cy.contains("button", "p").click();
    cy.contains("button", "v").click();
    cy.contains("button", "a").click();
    cy.contains("button", "i").click();

    cy.get('[data-testid="right_leg"]').should("be.visible");
  });

  it("should show the left arm and modal with try again message if user types six wrong letters", () => {
    cy.contains("button", "k").click();
    cy.contains("button", "p").click();
    cy.contains("button", "v").click();
    cy.contains("button", "a").click();
    cy.contains("button", "i").click();
    cy.contains("button", "l").click();

    cy.get('[data-testid="left_leg"]').should("be.visible");
    cy.contains("Nice try!").should("be.visible");
  });
});
