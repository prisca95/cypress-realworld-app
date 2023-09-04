class myaccount {
   
    
    elements= {
myaccountBtn: () => cy.get("span").contains("My Account"),
emailField: () => cy.get("input[name='email']").type("abeno@gmail.com"),
phoneNumber: () => cy.get("input[name='phoneNumber']").type("07053456782"),
saveBtn: () => cy.get("span[class='MuiButton-label']").contains('Save')


    }

click () {

this.elements.myaccountBtn().click()
this.elements.emailField()
this.elements.phoneNumber()
this.elements.saveBtn().click()

}

}
export default new  myaccount();