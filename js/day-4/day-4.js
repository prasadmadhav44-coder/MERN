var setI;
var count = 0;
setI = setInterval(() => {
count = count + 1;
console.log(count);
}, [1000]);

var cleI;
cleI = setTimeout(() => {
clearInterval(setI);
}, [5000]);

clearTimeout(cleI);