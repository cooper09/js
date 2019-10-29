( function( ) {
    //cooper s - chaining async functions

    const func3 = async () => {
        console.log("func3..");

        var http = new XMLHttpRequest();
        var url = 'https://intense-savannah-43793.herokuapp.com/track'

        //var params = 'category='+newData.category+'&source='+newData.source+'&description='+newData.description+'&utm_campaign='+newData.utm_campaign+'&utm_source='+newData.utm_source+'&utm_medium='+newData.utm_medium+'&timestamp='+newData.timestamp;
        var params = 'source=spinach&description=howdy&timestamp=now';
        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function() {//Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                window.location.href = 'http://sonyainc.net';
                return "Watson I need you...";               
            } else {
                //alert("Failed - Update data: " + http.status);
            }
        }//end state change

        http.send(params);
    }//end func3

    const func2 = async () => {
        console.log("func2..");
        return func3().then(
            console.log("func3 has finished doing its thing...")
        );
    }

    const func1 = async () => {
        console.log("func1..");
        return func2().then(
            console.log("func2 has finished doing its thing...")
        );
    }

    func1().then(result => {
        console.log("And then....");
        // process result here
        document.getElementById("ad").innerHTML = result;
      }).catch(err => {
        // process error here
        console.log("error: ", err );
        document.getElementById("ad").innerHTML = "Shit!!!";
      });
  
  
})()

