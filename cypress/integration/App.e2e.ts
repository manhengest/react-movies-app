context("App E2E", () => {
    it("render elements", () => {
        cy.visit("/")

        cy.get(".search-field").should("have.value", "")
        cy.get(".search__btn").should("be.visible")
        cy.get(".movie-card").should("be.visible")
    })

    it("add new movie", () => {
        cy.get(".add-movie-btn").click()
        cy.get("#edit-movie-title").type("Test movie 111")
        cy.get("#edit-movie-poster-url").type("https://www.dartmoorzoo.org.uk/wp-content/uploads/2021/01/Tiger-1.jpg")
        cy.get(".movie-genre .custom-select__trigger").click()
        cy.get(".movie-genre li:first-of-type .custom-checkbox__label-wrap").click()
        cy.get(".movie-genre li:nth-of-type(2) .custom-checkbox__label-wrap").click()
        cy.get("#edit-movie-date").type("2011-11-11")
        cy.get("#edit-movie-rating").type("7.6")
        cy.get("#edit-movie-runtime").type("135")
        cy.get("#edit-movie-overview").type("Test overview")
        cy.get(".submit-movie-modal").click()

        cy.get(".modal__title").should("contain", "CONGRATULATIONS!")
        cy.get(".modal_isSuccessModalOpened .close-btn").click()
    })

    it("search movie", () => {
        cy.get(".search-field").type("Test movie")
        cy.get(".search__btn").click()
        cy.get(".movies-list__inner .movie-card .movie-card__title").should("contain", "Test movie")
    })

    it("edit movie", () => {
        cy.get('.movies-list__inner .movie-card:first-of-type .movie-card__context-menu-open-btn').click()
        cy.get('.movies-list__inner .movie-card:first-of-type .movie-card__context-menu-btn_edit').click()
        cy.get("#edit-movie-title").clear()
        cy.get("#edit-movie-title").type("abc test 222")
        cy.get(".submit-movie-modal").click()
        cy.get(".modal__title").should("contain", "CONGRATULATIONS!")
        cy.get(".modal_isSuccessModalOpened .close-btn").click()

        cy.get(".search-field").type("abc test")
        cy.get(".search__btn").click()
        cy.get(".movies-list__inner .movie-card .movie-card__title").should("contain", "abc test")
    })

    it("delete movie", () => {
        cy.get('.movies-list__inner .movie-card:first-of-type .movie-card__context-menu-open-btn').click()
        cy.get('.movies-list__inner .movie-card:first-of-type .movie-card__context-menu-btn_delete').click()
        cy.get('.modal_isDeleteModalOpened .delete-movie').click()

        cy.get(".search-field").type("abc test")
        cy.get(".search__btn").click()
        cy.get(".filter__results-quantity").should("contain", "0")
    })
})

export {}
