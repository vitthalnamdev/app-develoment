let p = new Promise((resolve,reject)=> {
    let a=1+1
    if(a==2){
        resolve('Accepted')
    }else{
        reject('Wrong Answer')
    }
})  

p.then((message)=> {console.log(message)}).catch((message) => {console.log(message)})
