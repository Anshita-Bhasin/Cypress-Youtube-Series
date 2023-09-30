describe(' GET Call in Cypress', () => {


    it('Get All Users', () => {

        cy.request('https://gorest.co.in/public/v2/users/',
            { Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b" })
            .then((response) => {
                cy.log("response", JSON.stringify(response))
                expect(response.status).to.equal(200);
            })

    })

    it('2- Get All Users', () => {
cy.request({
    method:'GET',
    url:'',
    headers:{

    }
})


        cy.request('https://gorest.co.in/public/v2/user',
            { Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b" })
            .then((response) => {
                expect(response.status).to.equal(200);
            })

    })
    it('3- Get All Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/122',
            headers: {
                Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b"

            }, failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.equal(404);
            })

    })
    it('4- Get All Users', () => {

        cy.request('https://gorest.co.in/public/v2/users/4377180',
            {
                Authorization: "Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b"

            })
            .then((response) => {
                expect(response.status).to.equal(200);
            })


    })


})