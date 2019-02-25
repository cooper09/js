var doYourStuff = function () {

    this.getCategories = function() {
        //options = ["four","five", "size"]
        testArr = [];
        objArr = [];

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function()
        {
            console.log("YO: ",  xmlhttp.responseText );
            allText = xmlhttp.responseText;
            allTextLines = allText.split(/\r\n|\n/);
            console.log("All Text: ", allTextLines[0] );
    
            var jsonObj = [];
            var headers = allTextLines[0].split(',');
            console.log("headers: ", headers );
            for(var i = 1; i < allTextLines.length; i++) {
              var data = allTextLines[i].split(',');
              //console.log("data: ", data );
              testArr.push(data);
              var obj = {};
              for(var j = 0; j < data.length-2; j++) {
                 obj[headers[j].trim()] = data[j].trim();
                 //console.log("Obj: ", obj);
                 objArr.push(obj)
              }
              //jsonObj.push(obj);
            }
            //console.log("final object: ", Object.keys((JSON.stringify(jsonObj))));
            //console.log("Final testArr: ", objArr[0]["Name"] );
    
            objArr.map(function(category) {
                //console.log("What have we got 2: ", category["Name"] ); 
            })
        } 
    
        try {
            console.log("Try...");
            xmlhttp.open("GET", "IAB-cats.csv", true);
            xmlhttp.send(); // Here a xmlhttprequestexception number 101 is thrown 
        } catch(err) {
            console.log("Catch: ", err )
            
        }
        return objArr
    }

    this.addElements = function(options) {
        console.log("add html elements");

        var mySelect = document.createElement("SELECT");
        mySelect.id = 'mySelect';
        mySelect.setAttribute("style","margin-right: 0.5em;font-size:1em");

            // cooper s - add multiple options from an array

            for (var i=0 ; i < options.length ; ++i) {
                var option = document.createElement("option");
                option.text = options[i];

                mySelect.add(option);
            }

        document.body.appendChild(mySelect);

         var myButton = document.createElement("BUTTON");
         document.body.appendChild(myButton);
         var t = document.createTextNode("CLICK ME");
         myButton.setAttribute("style","color:red;font-size:1em;cursor:pointer");
     
         myButton.appendChild(t);
         myButton.onclick =  function (){ 
            var x = document.getElementById("mySelect").selectedIndex;
            var y = document.getElementById("mySelect").options;
            alert("Index: " + y[x].index + " is " + y[x].text);
            var  myValue = document.getElementById("mySelect").options[document.getElementById("mySelect").selectedIndex].text;

            alert("The Value: "+ myValue );
         };

    }
}//end doyourstuff