function MusicAlbum(name, artist, artistImage, songs, yearReleased, albumCover, albumDuration){
    this.name = name;
    this.artist = artist;
    this.artistImage = artistImage;
    this.songs = [];
    this.yReleased = yearReleased;
    this.albumCover = albumCover;
    this.albumDuration = albumDuration;

    this.Album = function(){
        const el = document.querySelector('.top');
        let html = "";
        html += `  
                    <div class='cover'>${this.albumCover}</div>
                    <div class='right1'>
                        <h5>Album</h5>
                        <h1>${this.name}</h1>
                        <div class='about'>
                            <div>${this.artistImage}</div>
                            <div>${this.artist}</div>
                            <div>${this.yReleased}</div>
                            <div>${this.songs.length}</div>
                            <div>${this.albumDuration}</div>
                        </div>
                    </div>
                
                `

        el.innerHTML = html;
    }


    this.addSong = function(song){
        this.songs.push(song);
    }

    this.listAllSongs = function(){
        const element = document.querySelector('.songs');
        let html ='';
        html += `<div class='top1'>
        <div class='title'>
            <div>#</div>    
            <div>Title</div>
        </div>
        <div>Plays</div>
        <div>Time</div>
        </div>
        <hr class='hr'>`

        let index=1;
        for(let song of this.songs){
            html +=
            `<li>
            <div class='li'>
                <div class = 'flex0'>
                    <div class='index'>${index}</div>
                    <div class='artist'>${song.title}<br> ${song.artist}</div>
                </div>
                <div class='plays'>${song.plays}</div>
                <div>${song.duration}</div>
            </div>
            </li>`
            index++;
        }
        element.innerHTML += html;
    }
}
function Songs(title, artist, plays, duration){
    this.title = title;
    this.artist = artist;
    this.plays = plays;
    this.duration = duration;
}

const song1 = new Songs(
    'Intro (Neon City)',
    'ZHU',
    45069,
    '1m 10s'
)
const song2 = new Songs(
    'In the Morning',
    'ZHU',
    45439,
    '4m 07s'
)
const song3 = new Songs(
    'Cold Blooded',
    'ZHU',
    45983,
    '4m 18s'
)
const song4 = new Songs(
    'Secret Weapon',
    'ZHU',
    34578,
    '4m 03s'
)
const song5 = new Songs(
    'Electrify Me',
    'ZHU',
    45389,
    '4m 16s'
)
const song6 = new Songs(
    'Numb',
    'ZHU',
    45837,
    '4m 27s'
)
const song7 = new Songs(
    'Palm of My Hand',
    'ZHU',
    45386,
    '6m 13s'
)
const song8 = new Songs(
    'Money',
    'ZHU',
    45839,
    '5m 07s'
)
const song9 = new Songs(
    'Good Life',
    'ZHU',
    34587,
    '4m 31s'
)
const myAlbum = new MusicAlbum('Generationwhy', 'ZHU', "<img class='artist' src = './assets/img/zhu22.webp' width=25px>", 16, 2016, "<img src = './assets/img/zhu.webp' width=200px>", '2h30m' );
myAlbum.addSong(song1);
myAlbum.addSong(song2);
myAlbum.addSong(song3);
myAlbum.addSong(song4);
myAlbum.addSong(song5);
myAlbum.addSong(song6);
myAlbum.addSong(song7);
myAlbum.addSong(song8);
myAlbum.addSong(song9);
myAlbum.listAllSongs();
myAlbum.Album();

