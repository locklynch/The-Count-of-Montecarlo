
let inside = 0;
let ticks = 10000000;

for(let i=0;i<ticks; i++ ){
    let xDot=Math.random();
    let yDot=Math.random();
    if((xDot**2+yDot**2)<=1) {inside++};
}
let piCalc = 4*(inside/ticks);
document.write ('pi = '+piCalc);