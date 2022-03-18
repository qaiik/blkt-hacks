let gdata = {};
((() => {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        if (arguments[1].startsWith("https://api.blooket.com/api/games?gameId=")) {
          
        this.addEventListener('load', function() {
            console.log(JSON.parse(this.responseText));
        });
        origOpen.apply(this, arguments);
    };
}))();
