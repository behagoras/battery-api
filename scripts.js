navigator.getBattery().then( 
    (battery) => {
        console.log(battery)
        const $batteryMeter = document.getElementById('batteryMeter');
        let batteryLevel;
        const levelChangeEvent = ()=>{
            updateLevelInfo();
        }
        
        battery.addEventListener('levelChange', function(){
            console.log( `New battery level: ${batteryLevel}%` );
            console.log('changing battery level')
          });

    

        // battery.onlevelchange = (event)=>{
        //     // levelChangeEvent(event)
        //     // console.log('changing')
        //     // console.log('event',event)
        // }
        battery.addEventListener('levelchange', function(event){
            console.log('hello')
            levelChangeEvent();
            console.log(this)
        });

        const drawBattery=()=>{
            let color='';
            if(batteryLevel<=15){
                color='red';
            }else if(batteryLevel<100){
                color = 'orange'
            }else {
                color = 'green'
            }
            $batteryMeter.style.width=`${batteryLevel}%`;
            $batteryMeter.style.backgroundColor=color;
        }
        const updateLevelInfo = () => {
            batteryLevel=battery.level*100;
            drawBattery();
            console.log(batteryLevel)
        }
      
        updateLevelInfo();
        drawBattery();

        // alert(batteryLevel)
    }
);

