document.getElementById("convert").addEventListener("click", function() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    let unitText;

    if (isNaN(temperatureInput)) {
        document.getElementById("result").innerHTML = "Please enter a valid number for temperature.";
        return;
    }

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput - 32) * (5/9);
        unitText = "Celsius";
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        unitText = "Fahrenheit";
    } else {
        convertedTemperature = temperatureInput - 273.15;
        unitText = "Kelvin";
    }

    document.getElementById("result").innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitText}`;

});