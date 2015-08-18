var deadline = new Date(2016, 0, 1);

function startCountdown() {
    var now = new Date();
    var difference = deadline - now;
    // var h=difference.getHours();
    // var m=today.getMinutes();
    // var s=today.getSeconds();
    // m = addZeroPadding(m);
    // s = addZeroPadding(s);
    document.getElementById('countdown').innerHTML = formatDateString(difference)
    var t = setTimeout(function(){startCountdown()},500);
}

function addZeroPadding(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function formatDateString(milliseconds) {
    var days = Math.floor(milliseconds / 1000 / 60 / (60 * 24));
    var date_diff = new Date(milliseconds);
    return days + " Days, "+ date_diff.getHours() + " Hours, " + date_diff.getMinutes() + " Minutes, " + date_diff.getSeconds() + " Seconds";
}
