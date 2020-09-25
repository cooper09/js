( function( ) {
    console.log("index_funcs my funky friend...");

    var csv = "name,age, hair\nMerble, 35, red\nBob,64,blonde";

    //const ad = getAd("smokey", getGenre());
    //return getAd("smokey", getGenre());
    return  document.getElementById("stinky").innerHTML = "Please enter a 16-digit number."; 
})()

function getGenre() {
    return "sports";
}

function getAd (fn) {
    return fn;
}

function existy(x) {
    return x != null;
}

function truthy(x) {
    return ( x !== false ) && ( existy(x));
}

function lameCSV( "./contacts.csv" ) {
    return _.reduce(str.split("\n"), function(table, row ){
        //console.log("function time: ", row );
        table.push(_.map(row.split(","), function(c){
            //console.log("push row: ", c );
            return c.trim()
        })) //end push
        return table;
    },//end row
    [])//end reduce

}//end lameCSV
