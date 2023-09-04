describe('Page Object Model', () => {

    it('signup', () => {

        cy.visit("http://localhost:3000/signin")

        cy.get("input[name='username']").type("Abni");
        cy.get("input[name='password']").type("quality01");
        cy.get("input[type='checkbox']").click();
        cy.get("span[class='MuiButton-label']").should('be.visible').click()
        //Dashboard - create bank account
        cy.get("span").contains("Next").should('be.visible').click()
        cy.get("input[name='bankName']").type("Access")
        cy.get("input[name='routingNumber']").type("223344557")
        cy.get("input[name='accountNumber']").type("999888778")
        cy.get("span").contains("Save").should("be.visible").click()
        cy.get("span").contains("Done").should("be.visible").click()
        //My account
        cy.get("span").contains("My Account").click()
        cy.get("input[name='email']").type("abey@gmail.com")
        cy.get("input[name='phoneNumber']").type("07053456789")
        cy.get("span[class='MuiButton-label']").contains('Save').click()
        //Logout
        cy.get("div[class='MuiListItemIcon-root']").click()


    })

}) 