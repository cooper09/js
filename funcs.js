( function( ) {
    console.log("Give me the func..");

    let letters = ['a','b', 'c']

    console.log("letter: ", letters[1])

    //pass a function to a function
    let final = mystinky( stinky(letters[1] )
    );
    console.log("Finally: ", final );
})()

function mystinky(fn) {
    console.log("mystinky: ", fn )
    let shit = fn + " kiss my ass!";
    return "mystinky: ", shit;
}

function stinky(goodie){
    console.log("stinky: ", goodie );
    function upyours(){
        function andback(){
            return "hey there"
        }
        return "UP yours, molly folloy!"
    }
    return "stinky says: ", upyours();
}