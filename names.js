// Name Challenge 

let names = ["Wesley Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

let first_name = [];
let last_name = [];

for(let i = 0; i < names.length; i++){
  let res = names[i].split("");
  for(let j = 0; j < res.length; j++){
    if(j % 2 === 0){
      first_name.push(res[j]);
    } else {
      last_name.push(res[j]);
    }
  }
}

console.log(first_name);
console.log(last_name);