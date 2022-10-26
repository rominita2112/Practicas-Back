function Fibonacci (number){
let fibon=[0,1];
for(i=2;i<number; i++){
   fibon.push(fibon[i -1]+fibon[i-2]);
}

return fibon
} 


 
module.exports=Fibonacci;