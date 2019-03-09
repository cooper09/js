(function () {
    console.log("index_funcs my funky friend...");

    const url = "tag-funcs.js"

    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
   
    let adObj = {
        adid: 1234,
        img: "img/placeholder.jpg"
    }

    window.onload = function() {

            adObj = getArticles(getIAB());

            console.log("Final ad object: ", adObj);
            return displayAd(adObj);

    }//end onload
})() //end iffy
