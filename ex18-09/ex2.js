let i = 30;

while (i >= 0) {
    if (i % 3 === 0) {
        console.log("Ping");
    } else if (i % 5 === 0) {
        console.log("Pong");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("Ping Pong");
    } 
    i--;
}
