var music = [new Audio('../piano/C3.wav'), new Audio(), new Audio()];

//HTMLの確認用
function play() {
    playChord('F');
}

function stop() {
    music.pause();
    music.currentTime = 0;
}

var CHORDS = [['C', 'C3', 'E3', 'G3'], ['Dm', 'D3', 'F3', 'A3'], ['Em', 'E3', 'G3', 'B3'], ['F', 'F3', 'A3', 'C4'], ['G', 'G3', 'B3', 'D4'], ['Am', 'A3', 'C4', 'E4']];

function playChord(chord) {
    console.log("こん");
    var sound;
    for (var i = 0; i < CHORDS.length; i++) {
        if (chord == CHORDS[i][0]) {
            for (var j = 0; j <= 2; j++) {
                music[j].src = './assets/' + CHORDS[i][j + 1] + '.wav';
                console.log(CHORDS[i][j + 1]);
            }
        }
    }
    for (var i = 0; i < 3; i++) {
        music[i].play();
    }
}
