( function( ) {
    console.log("index_funcs my funky friend...");

    var csv = "name,age, hair\nMerble, 35, red\nBob,64,blonde";

    return getAd();

})()

function getAd() {
    console.log("getAd, baby!");
   return getArticles(getGenre);
}//end getAd

function getGenre( ) {
    console.log("getGenre....");
     //parseGenre()
     getImage()
    return parseGenre();
    
    }//getGen

function getArticles(callBack) {
    console.log("getArticles, you moron: ", callBack());
    document.getElementById("article").innerHTML = "Context article goes here...";
}

function getImage(){
    console.log("getImage...");
    var img = document.createElement("img");
    img.src = "img/rita-hayworth.jpg";
    var src = document.getElementById("ad");
    src.appendChild(img);

return src; 
}
//xmlhttprequests call functions - retrieve one at a time

function parseGenre () {
    console.log("parseGenre: ");
    const userkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvb3BlckBtcG9pbnRpbmMuY29tIiwiaWQiOjM5Nywib3JnX2lkIjozMzEsIm9yZ19yb2xlIjoxfQ._M233oOb-MuhaXGAnLGow95r0Ap6YHZ2stt7Nxlxn9M';
    var domainString =  window.location.href;
    console.log("parseGenre - domainString: ", domainString );

    var xhttp1 = new XMLHttpRequest()
    xhttp1.onreadystatechange = function(){
        if ( this.readyState == 4 && this.status == 200 ) {
            console.log("parseGenre response: ", this.responseText )
            return this.resonseText 
        }
    }//end xttp call

    xhttp1.open("GET", "https://api.frase.io/api/v1/analysis_for_url?url="+domainString+"&fields=genre", true)
    xhttp1.setRequestHeader('key', userkey );
    xhttp1.send();

}//end parseGenre