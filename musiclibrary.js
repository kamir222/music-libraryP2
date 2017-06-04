var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists : function () {
    var str = '';
    for (p in this.playlists) {
      var p = p;
      var value = p + ": " + this.playlists[p].name + " - " +this.playlists[p].tracks.length;
      str += value + '\n';

    }
    return str;
  },
  printPlaylist : function () {
    var myArray =[];
    for (t in this.playlists) {
        var t = t;
        var value = this.playlists[t].tracks;
        for (i of value) {
          myArray.push(i + ": " + this.tracks[i].name + "by" + this.tracks[i].artist + "(" + this.tracks[i].album + ")");
        }
    return myArray;
    }
  },
  printTracks : function () {
    var str = ""
    for (t in this.tracks) {
        var t = t;
        var value = t + ": " + this.tracks[t].name + " by " + this.tracks[t].artist;
        str += value + '\n';

      }
    return str;
  },
 addTrackToPlaylist : function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
  console.log(this.playlists[playlistId].tracks);
  },
  uid : function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
 addTrack : function (name, artist, album) {
  var random = this.uid();
  return this.tracks[random] = {
    id: random,
    artist: artist,
    album: album
  }
  },
   addPlaylist: function (name) {
    return this.playlists[this.uid()] = {name: name};
  }
}

// Calling functions
console.log(library.printPlaylists());
console.log(library.printPlaylist());
console.log(library.printTracks());
library.addTrackToPlaylist("t03", "p01");
console.log(library.playlists["p01"]);
console.log(library.addTrack('adele', 'adele', 'adele'));
console.log(library.addPlaylist("adele"));


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
