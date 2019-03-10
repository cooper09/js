
function displayAd(ad){
    var img = document.createElement("img");
    img.src = ad.img;
    var src = document.getElementById("ad");
    return src.appendChild(img);
}//end displayAd

function getIAB () {
    console.log("getIAB")
    return "sports"
}

/*
function getArticles( iab ) {
    console.log("getArticles: ", iab)
    const dataObj = {
        adid: 5678,
        img: "img/rita-hayworth.jpg"
    }
    return dataObj;
} */

async function getArticles(iab) {
    console.log("getArticles: ", iab)
    const userkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvb3BlckBtcG9pbnRpbmMuY29tIiwiaWQiOjM5Nywib3JnX2lkIjozMzEsIm9yZ19yb2xlIjoxfQ._M233oOb-MuhaXGAnLGow95r0Ap6YHZ2stt7Nxlxn9M';
    var domainString =  window.location.href;

    try {
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
    
                if (this.readyState == 4 && this.status == 200) {
                    console.log("Genre - category response: ", this.responseText );
    
                    var genreData = JSON.parse(this.response );
                    console.log("genreData: ", genreData );
                      
                }// ifchange
            };// onstate
            //cooper s - eventually point to frase endpoint
          
            xhttp2.open("GET", "https://api.frase.io/api/v1/analysis_for_url?url="+domainString+"&fields=genre", true);
            xhttp2.setRequestHeader('key', userkey );
            xhttp2.send();

            const dataObj = {
                adid: 5678,
                img: "img/rita-hayworth.jpg"
            }
            return dataObj;

        return dataObj;     // this will be the resolved value of the returned promise
  
    } catch(e) {
        console.log("Error: ", e);
        throw e;      // let caller know the promise was rejected with this reason
    }
 } //end getArticles