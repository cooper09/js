
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

function getArticles( iab ) {
    console.log("getArticles: ", iab)
    const dataObj = {
        adid: 5678,
        img: "img/rita-hayworth.jpg"
    }
    return dataObj;
}
