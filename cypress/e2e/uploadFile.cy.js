describe("Upload File Request", () => {
    it("TC1 - Input Field || upload File", () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo')
        cy.get('#file').selectFile('test.pdf')

    });
    it('Tc2 - Dropping of file ', () => {
        cy.visit('https://www.ilovepdf.com/pdf_to_word')
        cy.fixture('test2.pdf').as('pdf')
        cy.get('.uploader__droptxt').selectFile('@pdf', { action: 'drag-drop' })
    })
    it.only('Tc3 - Dropping of file - Input Field ', () => {

        cy.visit("https://www.ilovepdf.com/pdf_to_word");
        cy.get(".uploader__btn.tooltip--left.active").invoke('show')
            .selectFile("test.pdf", { force: true });

        // cy.visit('https://www.ilovepdf.com/pdf_to_word')
        // cy.fixture('test2.pdf').as('pdf')
        // cy.get('.uploader__droptxt').selectFile('@pdf',  { force: true })
    })

    //cy.get('.UploadFilestyles__UploadIconCircle-sc-xxr9kh-2.gUMUaV.material-icons-outlined').selectFile('products.csv')


});