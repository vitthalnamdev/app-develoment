const arr=["vitthal","parikshit","pihu","kartik","avishi"]
arr.forEach((name)=> {console.log(name)})
 
console.log(2);
// so how the upper code works is mention below.
const myforeach = (names,cb) => {
    for (let index = 0; index < names.length; index++) {
        const element = names[index];
        cb(element)
    }
}
// then calling it.
myforeach(arr,(name)=> {console.log(name)}) 