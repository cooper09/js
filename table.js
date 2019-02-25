( function( ) {
    console.log("Give me the fable talk..");

    var csv = "name,age, hair\nMerble, 35, red\nBob,64,blonde";

    console.log(lameCSV(csv));

    console.log("Sorted: ", _.rest(lameCSV(csv)).sort())

    console.log("existy null: ", existy(null));
    console.log("existy undefined: ", existy(undefined));

    console.log("existy: ", existy(lameCSV(csv)))

    console.log("existy object: ", existy({}));

    console.log("existy array: ", existy([]));

    console.log("truthy: ", truthy(lameCSV(csv)));

    console.log("thruthy null: ", truthy(null));

    console.log("thruthy undefined: ", truthy(undefined));

    console.log("truthy object: ", truthy({}));

    console.log("thruthy array: ", truthy([]));
    

})()

function existy(x) {
    return x != null;
}

function truthy(x) {
    return ( x !== false ) && ( existy(x));
}

function lameCSV( str ) {
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
