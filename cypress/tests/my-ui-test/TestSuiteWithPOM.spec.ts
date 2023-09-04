import signuppage from "../../pageobject/signuppage";
import signinpage from "../../pageobject/signinpage";
import bankaccount from "../../pageobject/bankaccount";
import myaccount from "../../pageobject/myaccount";



describe('Page Object Model', () => {

    it('signup', () => {

        cy.visit("http://localhost:3000")

        signuppage.clickOnsignup();


        signinpage.signin();

        
        bankaccount.click();

        
        myaccount.click();


        signuppage.elements.logoutBtn().click



    })


})
