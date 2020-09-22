( function( ) {
    //cooper s - chaining async functions

    const func3 = async () => {
        console.log("func3..");

        var http = new XMLHttpRequest();

        var url = 'https://sleepy-everglades-99189.herokuapp.com/tracks';
        http.open('GET', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                console.log(" Retrieved Address Data: ", http.response);
            //    window.location.href = 'http://sonyainc.net';
                return http.response;               
            } else {
                //alert("Failed - Update data: " + http.status);
            }
        }//end state change

        http.send();
    }//end func3

    const func2 = async () => {
        console.log("func2.." );
        return func3().then( (data) => {
            console.log("func3 has finished doing its thing: ", data  )
        })

        //);
    }

    const func1 = async () => {
        console.log("func1..");
        return func2().then(
            console.log("func2 has finished doing its thing...")
        );
    }

      (async function(){
        const message = await func1().then(result => {
            console.log("Funcy Func1: ", result );
            // process result here
            document.getElementById("ad").innerHTML = result;
          }).catch(err => {
            // process error here
            console.log("error: ", err );
            document.getElementById("ad").innerHTML = "Shit!!!";
          });
          
        console.log("And the message is: " ,message);
        document.getElementById("ad").innerHTML = message;
       })();
  
})()

