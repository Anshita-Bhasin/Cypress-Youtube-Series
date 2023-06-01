describe('Browser Navigation using Cypress', () => {
    it('Perform Backward and Forward in Cypress', () => {
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.contains("Software").click()
        cy.contains("There are no products to list in this category.").should("be.visible")
        cy.go("back") // 1st way to perform back navigation
        cy.go("forward") // 1st way to perform forward navigation
        cy.contains("There are no products to list in this category.").should("be.visible")

        cy.go(-1)
        

        cy.go(1)
        cy.contains("There are no products to list in this category.").should("be.visible")



    })
})