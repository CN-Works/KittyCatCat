// Wait for dom to be loaded
document.addEventListener("DOMContentLoaded", function() {
    let memeSound = new Howl({src: ["./src/ah.mp3"]});

    function changeCatStatus(status) {
        if (status === "normal") {
            document.getElementById("cat").src = "./src/kitty_normal.png"
        } else if (status === "loud") {
            document.getElementById("cat").src = "./src/kitty_loud.png"
        }
    }

    let catElement = document.getElementById("cat")

    catElement.addEventListener("pointerenter", (event) => {
        changeCatStatus("loud")

        memeSound.volume(1.0)
        memeSound.play()

        setTimeout(function() {
            changeCatStatus("normal")
        }, 500)
    });

    catElement.addEventListener("pointerleave", (event) => {
        changeCatStatus("normal")
    });
})