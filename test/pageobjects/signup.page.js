const Page = require('./page');

class SignUp extends Page {

    get inputFirstName () {
        return $('[name="firstName"]');
    }

    get inputLastName () {
        return $('[name="lastName"]');
    }

    get inputEmail () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get inputConfirmPassword () {
        return $('[name="confirmPassword"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }
    
    get linkClick (){
        return $('a[href="/sign-up"]');
    }

    get flashAlert () {
        return $('//p[contains(., "Please provide valid log in credentials.")]');
    }

    async signUpPage(){
        await this.linkClick.click();
    }

    async signUpProcess (firstName,lastName,email,password,confirmPass) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmPass);
        await this.btnSubmit.click();
    }
    
    open () {
        return super.open('login');
    }
    

}

module.exports = new SignUp();
