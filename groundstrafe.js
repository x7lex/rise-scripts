var module = rise.registerModule(
	"ground strafe", 
	"made it cuz rise only has air strafe");

script.handle("onUnload", function () {
    module.unregister();
});

module.handle("onStrafe", function (event) {
    if (player.isOnGround()) {
        player.strafe() // feel free to change
    }
});