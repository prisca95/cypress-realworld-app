class signuppage {
   

    elements = {

        signUpBnt: () => cy.get("a"),
        firstName: () => cy.get("input[id='firstName']"),
        lastName: () => cy.get("input[id='lastName']"),
        userName: () => cy.get("input[id='username']"),
        passWord: () => cy.get("input[id='password']"),
        confirmPassword: () => cy.get("input[id='confirmPassword']"),
        finishsignupBtn: () => cy.get("span").contains("Sign Up"),
        
        logoutBtn: () => cy.get("div[class='MuiListItemIcon-root']")
    }

    clickOnsignup() {
        this.elements.signUpBnt().contains("Don't have an account? Sign Up").click()
        this.elements.firstName().type("Abeno")
        this.elements.lastName().type("Ranon")
        this.elements.userName().type("Abno")
        this.elements.passWord().type("quality04")
        this.elements.confirmPassword().type("quality04")
        this.elements.finishsignupBtn().click()
        
    }

}

export default new signuppage();
  
