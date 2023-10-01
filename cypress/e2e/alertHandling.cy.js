describe('Alert Test', function () {
    it('Test Case1', function () {
        cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");
        cy.get('button[name="submit"]').click();
        // firing window: alert event with on() method
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contains('You are submitting information to an external page.');
        })
    });
});
