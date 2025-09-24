// Wait for dom to be loaded
document.addEventListener("DOMContentLoaded", function() {
    let catElement = document.getElementById("cat")

    function changeCatStatus(status) {
        if (status === "normal") {
            catElement.src = "./src/kitty_normal.png"
        } else if (status === "loud") {
            catElement.src = "./src/kitty_loud.png"
        }
    }

    catElement.addEventListener("pointerenter", (event) => {
        changeCatStatus("loud")

        let memeSound = document.getElementById("memeAudio")

        memeSound.play()

        setTimeout(function() {
            changeCatStatus("normal")
        }, 500)
    });

    catElement.addEventListener("pointerleave", (event) => {
        changeCatStatus("normal")
    });
})