describe(' Zero delay testing ', () => {
    it(' zero delay', () => {

        cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo')
        cy.get('#user-message').type('test automation in cypress')
        //cy.get('#user-message').type('test automation in cypress',{delay:0})

    })
    it(' zero delay- Test Case2', () => {

        cy.visit('https://wordcounter.net/')
       // cy.get('#box').type('Test automation using Cypress . Quick Tip Video .. Test automation using Cypress . Quick Tip Video, Test automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip Video')
        cy.get('#box').type('Test automation using Cypress . Quick Tip Video .. Test automation using Cypress . Quick Tip Video, Test automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip VideoTest automation using Cypress . Quick Tip Video',{delay:0})


    })

    
})