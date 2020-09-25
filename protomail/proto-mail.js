

( function( ) {

    const Mailer = new function(){
        console.log("The Lone Mailer is here!!")
        this.items = {}
        this.cartObj = []
        this.dataArr = []
    
        this.sayHello = () => {
            console.log("Hello out there in television land!!")
        }//end sayHello


        this.func2 = async (data) => {
            console.log("func2...Gets the data: ", data );

            if (data) {
                console.log("This is madness: ", data )
            } else {
                console.log("Or am I in Maimi...")
            }

            for (var i=0; i<data.length ; ++i ) {
                console.log(data[i]) 
            }

            data.map ( (contact) => {
                console.log(contact)
            })
            return { item1:"trivial data",
                     item2: "important data"
                    }
        }//end func2

        this.func1 = async () => {
         //   console.log("func1...Get the data....")
            const datafile = "contacts.csv"
            let mydata = [];

           //open the csv file..
        this.dataArr =  d3.csv(datafile , async function(data){
                //console.log('open csv file: ', datafile )
                var csvRows    = JSON.stringify(data).split(/\n/);
            //    console.log("csvRows: ", csvRows )
                for ( var i = 0; i < data.length ; ++i ) {
                //    console.log("name: ", data[i]["full_name"]," : " ,data[i]["phone_number"] );
                //    console.log("email Address: ", data[i].email );
                    let businessObj = {
                        name: data[i]["full_name"],
                        email: data[i].email
                    }
                    mydata.push(businessObj);
                } //end for

               return mydata;
        })//end CSV
        console.log("func1 mydata: ", mydata ) 
        return await this.func2(mydata)    
        }//end func1

    }//end Mailer

    Mailer.sayHello();

    const stinky = Mailer.func1( (data) => {
        //return func2();
      //  alert("We made it!!!!", data )
        console.log("Let the games begin: ", stinky )
     return "stinky"
    })

console.log("Let the games begin: ", stinky )

/*    const params = Mailer.getParams();
    console.log("params for url: ", params );

  Mailer.storeData(params) */

//window.location.href = 'http://localhost:8888/wordpress/?campaign='+ params[0].value +"&medium="+params[1].value+"&source="+params[2].value;
})()

