// const name="prachi"
// const num=90
// console.log(name+" "+num+" "+"xyz")
// console.log(`Hello my name is ${name} and my repo count is ${num}`)

const game=new String('prachi')
console.log(game);
console.log(game.length);
console.log(game[4]);
console.log(game.toUpperCase())
console.log(game.charAt(5));
console.log(game.indexOf('r'))
console.log(game.__proto__)

const newstring=game.substring(0,4);
console.log(newstring)
const anotherstring =game.slice(-8,4)
console.log(anotherstring)
const str="    prachi    ";
console.log(str);
console.log(str.trim());//use for deleting spaces
const url="https://prachi.com/prachi%20pawar"
console.log(url.replace('%20','-'))//replace %20 to -
console.log(url.includes('prachi'))//check prachi in the url string
console.log(url.split('_'))
