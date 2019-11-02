var music = [new Audio('../piano/C3.wav'), new Audio(), new Audio()];
  function play() {
    // music.loop = false;
    // music.play();
  //new Audio("./D4.wav").play();
  playChord('F');
  }
  function stop() {
    music.pause();
    music.currentTime = 0;
  }
var CHORDS = [['C', 'C3', 'E3', 'G3'], ['F', 'F3', 'A3', 'C4']];
function playChord(chord) {
  var sound;
  for (var i = 0; i < CHORDS.length; i++) {
    if (chord == CHORDS[i][0]){
      for (var j = 0; j <= 2; j++) {
        music[j].src = '../piano/' + CHORDS[i][j + 1] + '.wav';
        console.log(CHORDS[i][j+1]);
      }
    }
  }
  for (var i = 0; i < 3; i++) {
    music[i].play();
  }
}