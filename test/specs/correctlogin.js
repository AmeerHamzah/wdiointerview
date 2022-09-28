const LoginPage = require('../pageobjects/login.page.js');
const Alert = require('../pageobjects/alert.js');

describe('Login Test', () => {
    it('Login with correct credentials', async () => {

        await LoginPage.open();
        await LoginPage.continue('mhanifshk1953@gmail.com');
        await LoginPage.login('Aa1122334@');

        await LoginPage.logout();

    });

});

