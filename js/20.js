// Propiety Methods

const musicPlayer = {
    play: function(id) {
        console.log(`Playing Song with the ID: ${id}`);
    },
    pause: function() {
        console.log("Pausing...");
    },
    createPlaylist: function(name) {
        console.log(`Creating the Playlist: ${name}`);
    },
    playPlaylist: function(name) {
        console.log(`Playing the Playlist: ${name}`);
    }
}

musicPlayer.deleteSong = function(id) {
    console.log(`Deleting the song: ${id}`);
}

musicPlayer.play(3840);
musicPlayer.pause();
musicPlayer.deleteSong(20);
musicPlayer.createPlaylist("Heavy Metal");