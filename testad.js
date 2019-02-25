( function( ) {
    console.log("index_funcs my funky friend...");

    return getAd( getArticles(getGenre));

})()

function displayArticles(){
    console.log("Display articles...")
    return "my list of articles"
}

function getImage(){
    console.log("getImage...");
    var img = document.createElement("img");
    img.src = "img/rita-hayworth.jpg";
    var src = document.getElementById("ad");
    src.appendChild(img);
    return src; 
}//end getImage

function getArticles (genre) {
    console.log("getArticles: ", genre() );
    getImage();
    return    displayArticles();
}//end getArticles

function getGenre() {
    console.log("getGenre: ");
    return "sports"
}//end getGenre

function getAd ( articles ) {
    console.log("Ad goes here: ",  );
    return " "
}//end getAd