import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


iframe.addEventListener("timeupdate", (e) => {
        console.log(e);
    })

let isCurrentTime = localStorage.getItem("videoplayer-current-time");
console.log(isCurrentTime);
  
if (isCurrentTime) {
    player.setCurrentTime(isCurrentTime)
}


player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle(onTimeUpDate, 1000));
    function onTimeUpDate (time) {
    localStorage.setItem("videoplayer-current-time", time.seconds);
};

player.setCurrentTime(isCurrentTime).then(function (seconds) {
    
})




 



