const SignUp = require('../pageobjects/signup.page.js');
const Alert = require('../pageobjects/alert.js');

describe('Signup Test', () => {
    it('Uncomplete Signup', async () => {

        await SignUp.open();
        await SignUp.signUpPage();
        await SignUp.signUpProcess('H', 'H', 't@gmail.com', 'Aa112233@', 'Aa112233@');
        await expect(Alert.signUpAlert).toHaveTextContaining(
            'Please paste (or type) your 6-digit code:');

    });
});
