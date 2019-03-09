(function () {
    console.log("index_funcs my funky friend...");

    return getAd(getArticles(getGenre));

})()

async function parseGenre() {
    console.log("parseGenre: ");
    return new Promise((resolve, reject) => {
        const userkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvb3BlckBtcG9pbnRpbmMuY29tIiwiaWQiOjM5Nywib3JnX2lkIjozMzEsIm9yZ19yb2xlIjoxfQ._M233oOb-MuhaXGAnLGow95r0Ap6YHZ2stt7Nxlxn9M';
        var domainString = window.location.href;
        console.log("parseGenre - domainString: ", domainString);

        var xhttp1 = new XMLHttpRequest()
        xhttp1.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("parseGenre response: ", this.responseText)
                resolve( this.responseText );
            } else {
                console.log("Something went wrong: ", this );
                reject("Sorry Charlie 2:  ", readyState  ," :me ", status )
            }
        }//end xttp call

        xhttp1.open("GET", "https://api.frase.io/api/v1/analysis_for_url?url=" + domainString + "&fields=genre", true)
        xhttp1.setRequestHeader('key', userkey);
        xhttp1.send();
    });

}//end parseGenre

function displayArticles() {
    console.log("Display articles...")
    return "my list of articles"
}

function getImage() {
    console.log("getImage...");
    var img = document.createElement("img");
    img.src = "img/rita-hayworth.jpg";
    var src = document.getElementById("ad");
    src.appendChild(img);
    return src;
}//end getImage

function getArticles(genre) {
    console.log("getArticles: ", genre());
    getImage();
    return displayArticles();
}//end getArticles

function getGenre() {
    console.log("getGenre: ");
    //
    .then((response) => {
        console.log("parseGenre returned 2: ", response);
        return parseGenre();
    })
    .catch(e => {
        console.log("promise error: ", e );
    });

}//end getGenre

function getAd(articles) {
    console.log("Ad goes here: ");
    return " "
}//end getAd

