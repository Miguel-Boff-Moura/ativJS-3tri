function converterParaCelcius (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    alert(fahrenheit + "°F é igual a " + celsius.toFixed(2) + "°C");
}

converterParaCelcius(68);