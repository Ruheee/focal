var input = process.argv;

if (input){
  console.log(input.reverse());
}

 function reverse(original) {
   
   return original.splice('').reverse().join('');

 }

 
