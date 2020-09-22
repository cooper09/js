( function( ) {
    //cooper s - chaining async functions

    console.log("Waddup?");

    async function getCSVData() {
  /*      console.log("Dig up your CSV code here...");
        let csvArr = [];
        const datafile = './data.csv';

      return await d3.csv(datafile , function(data){
          console.log("Get some csv data")
          var csvRows    = JSON.stringify(data).split(/\n/);
          console.log("csvRows: ", csvRows );
/*
          for ( var i = 0; i < data.length ; ++i ) {
            //console.log("Business name: ", data[i]["Business Name"]," : " ,data[i]["Address"] );
            //console.log("Address: ", data[i].Address );
            let businessObj = {
                name: data[i]["Business Name"],
                address: data[i].Address
            }
            csvArr.push(businessObj);
          }//end for loop

          csvArr = [{data: "one"},{data: "Two"}]
          console.log("getCSVData data: ", csvArr);
          return csvArr;
        })//end csv data

*/
      //  return data;
    }//end funkyFred

    async function getCSV(datafile) {
      return await d3.csv(datafile , function(data){
        console.log("Get some csv data")
        var csvRows    = JSON.stringify(data).split(/\n/);
       // console.log("csvRows: ", csvRows );

        csvArr = [{data: "one"},{data: "Two"}]
      //  console.log("getCSVData data: ", csvArr);
        return csvArr;
      })//end csv data
    }

    async function getData() {
        return await axios.get('https://sleepy-everglades-99189.herokuapp.com/tracks');
      }

      async function getData2() {
       // return await getCSVData();
       return await getCSV("./data.csv").then( (result) => {
         console.log("REsult: ", result)
       });
      }
      
      (async () => {
        console.log("getData returns: ", await getData() )
        console.log ("second data feed: " , await getData2() )
        const verbose = await getData2();
        console.log("Verbose means: ", verbose )
      })()
      
  
})()

