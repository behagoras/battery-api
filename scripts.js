navigator.getBattery().then().then(
    (battery) => {
        const $batteryMeter = document.getElementById('batteryMeter');
        const batteryLevel = Math.round(battery.level*100);
        console.log(battery);
        $batteryMeter.style.width=`${batteryLevel}%`;
    }
);