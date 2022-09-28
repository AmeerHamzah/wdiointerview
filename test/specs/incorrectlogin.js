const LoginPage = require('../pageobjects/login.page.js');
const Alert = require('../pageobjects/alert.js');

describe('Login Test', () => {
    it('Login with wrong credentials', async () => {

        await LoginPage.open();
        await LoginPage.continue('tes@gmail.com');
        await LoginPage.login('habibi');
        await expect(Alert.flashAlert).toHaveTextContaining(
            'Please provide valid log in credentials.');
            
    });

});

