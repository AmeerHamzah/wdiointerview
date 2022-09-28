const Page = require('./page');

class Alert extends Page {

    get flashAlert () {
        return $('//p[contains(., "Please provide valid log in credentials.")]');
    }

    get signUpAlert () {
        return $('//h6[contains(., "We sent a temporary sign-in code to")]');
    }

    
}

module.exports = new Alert();
