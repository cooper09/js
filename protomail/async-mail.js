//cooper s - usefull helper files

// Functional Ad Tracker

const loadData = async (newData) => {
    console.log("loadData..");
    /*
        cooper s - save for later for full data tracking...
    */
            const sendMail = async (data) => {
                console.log("sendMail data: ", data );
                //format and send individual emails
                const mail_url = `https://sleepy-everglades-99189.herokuapp.com/automail`;
               
               data.map((email) => {
                console.log("map data: " , { name: email["name"], email:email.email})
                let emailObj = { name: email["name"], email:email.email}
                axios.post(mail_url,emailObj)
                    .then(function (response) {
                      console.log("POST: ", response.data);
                    //clear fields
                    })
                    .catch(function (error) {
                      console.log("POST Error: ",  error);
                    });

                })
            }//end sendMail

            const datafile = "contacts.csv"
            d3.csv(datafile, (data)=>{
                console.log('opened csv file: ', typeof(data ))
                let contacts = data.map( row_data => {
                    return { name: row_data["full_name"], email:row_data["email"]}
                })

                 sendMail(contacts);   
            })

        return "OK"              
}//end loadData

const doIt = async () => {
    console.log("doIt..");
    return loadData().then( result => {
        console.log("loadData has finished doing its thing, buddy: ", result );

       }
    );
}//end func1