(function func1() {
    console.log("Start here...")

    const getAsText = (fileToRead) => {
        console.log("getAsText: ", fileToRead )

        let reader = new FileReader();
        reader.readAsText(fileToRead);

        reader.onload = loadHandler;
        reader.onerror = errorHandler;

    }//end getAsText

    const handleFiles = (files) => {
        console.log("handleFiles...", files );

        if (window.FileReader) {
            getAsText(files[0])
            fileUploaded = true;
            return "File handled"
        } else {
            alert("Holy Bandino!!!")
        }
    }//end handleFiles

    const loadHandeler = (e) => {
        console.log("loadHandler")
        let csv = e.target.result;
        processData(csv)
    }//end loadHandler


    const errorHandeler = (e) => {
        console.log("errorHandler: ", e.target.error.name)
        if (e.target.error.name == "NotReadableErro") {
            alert("Gonzo with the Bonzo")
        }
    }//end errorHandler

    const processData = (csv) => {
        console.log("processData")
    }

    console.log("final: ",  handleFiles("./contacts.csv"))

})()//end func1