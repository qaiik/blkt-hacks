let gameUrl = "";
((() => {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].startsWith("https://api.blooket.com/api/games?gameId=")) {
            gameUrl = arguments[1]
        }
        origOpen.apply(this, arguments);
    };
}))();
