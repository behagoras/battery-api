navigator.getBattery().then( 
    (battery) => {
        
        console.log(battery)

        const drawBattery=()=>{

            const $batteryMeter = document.getElementById('batteryMeter');
            const $chargeLevel = document.getElementById('chargeLevel');
            const $powerSource =document.getElementById('powerSource');
            const $levelPercentage = document.getElementById('levelPercentage');
            const $remainingTime = document.getElementById('remainingTime');
            const $remainingTimeLabel = document.getElementById('remainingTimeLabel');
            const {charging} = battery;

            let batteryLevel;
            batteryLevel=battery.level*100;
            let color='';
            if(batteryLevel<=15){
                color='red';
            }else if(batteryLevel<100){
                color = 'orange'
            }else {
                color = 'green'
            }
            $batteryMeter.style.width=`${batteryLevel}%`;
            $chargeLevel.innerHTML=`${batteryLevel}%`;
            $levelPercentage.value=`${batteryLevel}%`;
            $batteryMeter.style.backgroundColor=color;
            if(charging){
                $powerSource.value="charging";
                $remainingTimeLabel.innerHTML="Time to fully charge";
            }else{
                $powerSource.value="battery"
                $remainingTimeLabel.innerHTML="Remaining Time";
            }
        }
        const drawInfo = () => {

        }
        const levelChangeEvent = ()=>{
            console.log('levelChangeEvent')
            updateLevelInfo();
        }

        battery.addEventListener('levelchange', levelChangeEvent);


        const updateLevelInfo = () => {
            drawBattery();
            // console.log(batteryLevel)
        }
      
        updateLevelInfo();

        // alert(batteryLevel)
    }
);

