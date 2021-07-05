console.log("page");
import axios from 'axios';
    
document.getElementById("AutoFill").addEventListener("click", function () {
    console.log("autofill clicked");    

    // Make a request for a user with a given ID
    axios.get('https://api.airtable.com/v0/appc3T8pv6R1qp86R/Table%201?maxRecords=3&view=Grid%20view',
        { headers: { Authorization: `Bearer keyDosDup4RisEMhi` } })
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
})