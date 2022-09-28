const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get btnSettings () {
        return $('#institution-menu-id');
    }

    get btnLogout () {
        return $('//div[contains(., "Logout")]');
    }

    async continue (username) {
        await this.inputUsername.setValue(username);
        //await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
    async login (password) {
        //await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async logout (){
        await this.btnSettings.click();
        await this.btnLogout.click();
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
