let prom = prompt('Son kiriting')
if(prom % 3 === 0 && prom % 5 === 0){
      alert('FizzBuzz');
}else if(prom % 3 === 0){
      alert('Fizz');
}else if(prom % 5 === 0){
      alert('Buzz');
}else{
      alert(prom);
}


// function sonlar(son) {
//       if (son <= 1) return false
//       if (son === 2) return true
//       if (son % 2 === 0) return false

//       for (let i = 3; i <= Math.sqrt(son); i += 2) {
//             if (son % i === 0) return false/       }

//       return true
// }

// for (let tupsonlar = 1; tupsonlar <= 50; tupsonlar++) {
//       if (sonlar(tupsonlar)) {
//             console.log(tupsonlar)
//       }
// }

