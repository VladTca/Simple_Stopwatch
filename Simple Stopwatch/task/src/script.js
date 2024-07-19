 const start=document.getElementById('start');
 const stop=document.getElementById('stop');
 const reset=document.getElementById('reset');
 const lap=document.getElementById('lap');
 const timer=document.getElementById('timer');
 let count=0;
 let timerId;
 let minute=0;
 let second=0;
 let millisecond=0;
 function stopWatch(){
     count++;
     if(count==1){
         timerId=setInterval(function(){
             millisecond+=10;
             if(millisecond==1000){
                 second++;
                 millisecond=0;
             }
             if(second==60){
                 minute++;
                 second=0;
             }
             let timerFormat=(minute<10?'0'+minute:minute)+':'+(second<10?'0'+second:second)+':'+(millisecond<10?'0'+millisecond:millisecond);
             timer.innerHTML=timerFormat;
         },10);
     }
 }
 function resetStopWatch(){
     clearInterval(timerId);
     count=0;
     minute=0;
     second=0;
     millisecond=0;
     timer.innerHTML='00:00:00';
     document.getElementById('laps').innerHTML='';
 }
 function lapStopWatch(){
     let li=document.createElement('li');
     li.innerHTML=timer.innerHTML;
     document.getElementById('laps').appendChild(li);
 }

 start.addEventListener('click',stopWatch);
 stop.addEventListener('click',function(){
     clearInterval(timerId);
     count=0;
 });
 reset.addEventListener('click',resetStopWatch);
 lap.addEventListener('click',lapStopWatch);