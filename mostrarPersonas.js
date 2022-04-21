const requestpromise = require('request-promise');
const URL= 'https://reclutamiento-14cf7.firebaseio.com/personas.json';

requestpromise({
    url : URL,
    method: 'GET',
    json : true,
}).then(body => console.log(body))
    .catch(err => console.log(err));
    