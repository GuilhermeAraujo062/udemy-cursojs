function clock(){
    function getHourForSeconds(seconds) {
        const date = new Date (seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;
    
    function startClock(){
        timer = setInterval(function(){
        seconds++
        clock.innerHTML = getHourForSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
    
        if(el.classList.contains('start')){
            clearInterval(timer);
            startClock();
            clock.style.color = 'black';
        }
    
        if(el.classList.contains('stop')){
            clearInterval(timer);
            clock.style.color = 'red';
        }
    
        if(el.classList.contains('reset')){
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            seconds = 0;
            clock.style.color = 'black';
        }
    });
}
clock();