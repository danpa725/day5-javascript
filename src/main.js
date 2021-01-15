const NINE_HOURS_MILLISECONDS = 32400000;
const body = document.body;

function getTime() {
    // christmas day
    const xmasDay = new Date("2021-12-24:00:00:00+0900");

    //get kr date
    const time = new Date();
    const krTime = new Date(time + NINE_HOURS_MILLISECONDS);

    // get sec
    const sec = krTime.getTime() / 1000;
    const xSec = xmasDay.getTime() / 1000;

    //calc difference sec
    const diff = xSec - sec;

    return diff;
}

function init() {
    const sec = getTime();

    let seconds = parseInt(sec % 60);
    let minute = parseInt(sec / 60);
    let hour = parseInt(minute / 60);
    const day = parseInt(hour / 24);

    // once more %60 and %24 cause 60, 24 is max-num for min and hour
    minute = parseInt(minute % 60);
    hour = parseInt(hour % 24);

    body.innerHTML = `[❤] Before Christmas [❤] : ${day}d ${hour}h ${minute}m ${seconds}s`;
}

setInterval(init, 1000);
