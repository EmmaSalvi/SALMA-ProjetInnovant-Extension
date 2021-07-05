console.log("test")

let data = []

axios.get('https://api.airtable.com/v0/appc3T8pv6R1qp86R/Table%201?maxRecords=3&view=Grid%20view',
    { headers: { Authorization: `Bearer keyDosDup4RisEMhi` } })
    .then(function (response) {
        // handle success
        data = response.data.records;
        console.log(data)
        // response.data.map(record => {
            
        // })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    
    document.getElementById("AutoFill").addEventListener("click", function () {
        if(data.length > 0) {
            document.getElementById("BirthName").value = data[0].fields.BirthName
            document.getElementById("UsualName").value = data[0].fields.UsualName
            document.getElementById("FirstName").value = data[0].fields.FirstName
            document.getElementById("Gender").value = data[0].fields.Gender
            document.getElementById("BirthDate").value = data[0].fields.BirthDate
            document.getElementById("Mobile").value = data[0].fields.Mobile
            document.getElementById("Email").value = data[0].fields.Email
            document.getElementById("AddressStreet").value = data[0].fields.AddressStreet
            document.getElementById("AddressZipcode").value = data[0].fields.AddressZipcode
            document.getElementById("AddressCity").value = data[0].fields.AddressCity
            document.getElementById("AddressCountry").value = data[0].fields.AddressCountry
            document.getElementById("TempAddressZipcode").value = data[0].fields.TempAddressZipcode
            document.getElementById("TempAddressRegion").value = data[0].fields.TempAddressRegion
            document.getElementById("TempAddressCountry").value = data[0].fields.TempAddressCountry
            document.getElementById("TempAddressIncomingCountry").value = data[0].fields.TempAddressIncomingCountry
            document.getElementById("HealthWorker").value = data[0].fields.HealthWorker
        }
    }

    )
