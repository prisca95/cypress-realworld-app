class signinpage {


    elements = {

        userName: () => cy.get("input[name='username']"),
        passWord: () => cy.get("input[name='password']"),
        checkBox: () => cy.get("input[type='checkbox']"),
        loginBTn: () => cy.get("span[class='MuiButton-label']")

    
    }

    signin() {

        this.elements.userName().type("Abno");
        this.elements.passWord().type("quality04");
        this.elements.checkBox().click();
        this.elements.loginBTn().should('be.visible').click().wait(5000)

    }

}

//export default signinPage
export default new  signinpage();
