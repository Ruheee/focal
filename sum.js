/* first challenge
const args = process.argv;
console.log(args.slice(2,4))
*/
console.log(process.argv);

const args = process.argv.slice(2);

console.log(Number(args[0]));
