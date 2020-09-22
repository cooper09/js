

    const sendMail = new function(){
        console.log("welcome to sendmail");

        this.emailObj={}

        this.generateEmail = () =>{
            console.log("Time to make the donuts");
            //send and email somewhere...
            Email.send({
                Host: "smtp.gmail.com",
                Username : "<sender’s email address>",
                Password : "<email password>",
                To : 'cooperatkmba@gmail.com',
                From : "<sender’s email address>",
                Subject : "<email subject>",
                Body : "<email body>",
                }).then(
                    message => alert("mail sent successfully")
                )
                  
              
        }//end generateEmail
    }//end sendMail
    
    console.log( "sendMail: ", sendMail );
    sendMail.generateEmail();



