(function() {
    console.log("halo");

    /* COUNTER */
    function pad(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    var totalSeconds = 0;

    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
        document.getElementById("minutes").innerHTML = pad(
            parseInt(totalSeconds / 60)
        );
    }

    /* TIME IN FORMAT HH:MM:SS */
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    setInterval(getTime, 1000);

    function getTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers < 10
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function() {
            getTime();
        }, 500);
    }
    var SELECTOR_SCREEN_ELEMENT = ".screen";
    var SELECTOR_SWITCHER_TV = "#switcher-tv";

    var isTurnedOn = true;

    var timeline;

    function buildTimeline() {
        timeline = new TimelineMax({
            paused: true
        });

        timeline
            .to(SELECTOR_SCREEN_ELEMENT, 0.2, {
                width: "100vw",
                height: "2px",
                background: "#ffffff",
                ease: Power2.easeOut
            })
            .to(SELECTOR_SCREEN_ELEMENT, 0.2, {
                width: "0",
                height: "0",
                background: "#ffffff"
            });
    }

    function toggleSwitcherTV() {
        if (isTurnedOn) {
            timeline.restart();
        }

        if (!isTurnedOn) {
            timeline.reverse();
        }

        isTurnedOn = !isTurnedOn;
    }

    // Initialize
    $(document).ready(buildTimeline);

    // Bindings
    $(document).on("click", SELECTOR_SWITCHER_TV, function() {
        toggleSwitcherTV();
    });

    var audio, playbtn, mutebtn, seek_bar;
    function initAudioPlayer() {
        audio = new Audio();
        audio.src = "/assets/Prologue.mp3";
        audio.loop = true;
        audio.play();
        // Set object references
        playbtn = document.getElementById("playpausebtn");
        // Add Event Handling
        playbtn.addEventListener("click", playPause);
        // Functions
        function playPause() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }
    window.addEventListener("load", initAudioPlayer);
})();
