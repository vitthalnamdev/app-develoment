const student = {
   name: 'vitthal',
   marks: 99,
   greet(){       
     console.log("hi, i am " + this.name);
   }
};
const arr=["hi",1,2,0,'a'];
// console.log(student);
// student.greet();
// for(let i of arr){  
//     console.log(i);
// }
// // operations with array.
// console.log(arr.map(i => {
//     return 'ele ' +   i;
// }));
// console.log(arr);
// compare assigning the array to the array with and without the (...) spread operator.
const brr=[arr];// it made the array of an array or 2-d array
const crr=[...arr];// it copies the array into the given array.
console.log(brr);
console.log(crr);
// a cool function to return the array by spread operator .
const toarray = (...arg) => {
    return arg;
}
const a=toarray(1,2,3,4,5,5);
console.log(a);
