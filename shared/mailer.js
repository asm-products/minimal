/**
 * Created by theoutlander on 2/24/2015.
 */

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_APIKEY);

module.exports = function Mailer() {

    var SendMail = function(to, from, message) {

    }

    return {
        SignupEmail: function() {
            console.log("Signup mail");
        }
    }
}