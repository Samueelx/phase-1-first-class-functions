let receivesAFunction = function (activity) {
    console.log(activity('Spotify'));
}
let returnsANamedFunction = function() {
    function log() {
        console.log("This is a named function inside another function");
    }
    return log;
}

let returnsAnAnonymousFunction = function () {
    return () => `This is an anonymous function inside another function`;
}

function listenToMusic(platform) {
    return `Open the ${platform} app.`;
}