class bankaccount {



    elements = {
       //Dashboard popup

       
        nextbtn: () => cy.get("span").contains("Next"),
        
        //createbankAccount
        createbankAccount: () => cy.get("input[name='bankName']").type("Access"),
        routingNumber: () => cy.get("input[name='routingNumber']").type("223344559"),
        accountNumber: () => cy.get("input[name='accountNumber']").type("9998887711"),
        saveBtn: () => cy.get("span").contains("Save"),
        doneBtn: () => cy.get("span").contains("Done").should("be.visible").click()

    }

    click() {

        this.elements.nextbtn().click()

        this.elements.createbankAccount()
        this.elements.routingNumber()
        this.elements.accountNumber()
        this.elements.saveBtn().click()
        this.elements.doneBtn().click()

    }

}
export default new  bankaccount();
