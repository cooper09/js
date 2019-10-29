( function( ) {

    const func3 = async () => {
        console.log("func3..");
        return "Func3 has the final say!";
    }

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

