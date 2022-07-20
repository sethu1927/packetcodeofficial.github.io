function Live_clock(){
    var rtclock = new Date();

    var HOUR = rtclock.getHours();
    var mintues = rtclock.getMinutes();
    var seconds =  rtclock.getSeconds();
    var milliseconds = rtclock.getMilliseconds();

    //AM TO PM
    var ampm = (HOUR < 12) ? 'am':'pm';


    // HOUR 12 HR FORMAT 
    HOUR = (HOUR > 12) ? HOUR-12 : HOUR;


    //ZERO FIRST 
    HOUR = ('0' + HOUR).slice(-2);
    mintues = ('0' + mintues).slice(-2);
    seconds = ('0' + seconds).slice(-2);
    milliseconds = ('0' + milliseconds).slice(-2);    

    // CLOCK DISPLAY
    document.getElementById('CLOCK').innerHTML = 
        HOUR +' : ' + mintues + ' : ' + seconds +' : '+milliseconds+' : ' + ampm;
    
    var t = setTimeout(Live_clock,300);


}