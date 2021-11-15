context("Search E2E", () => {
    it("render elements", () => {
        cy.visit("/")
        cy.get(".search-field").should("have.value", "")
        cy.get(".search__btn").should("be.visible")
        cy.get(".filter__results-quantity").should("contain", "3000")
    })

    it("search movies", () => {
        cy.get(".search-field").type("lord")
        cy.get(".search__btn").click()
        cy.get(".movies-list__inner .movie-card .movie-card__title").should("contain", "Lord")
    })
})

export {}
