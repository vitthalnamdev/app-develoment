const fetchdata = (name) => {
   console.log("HI");
   setTimeout(()=> {
      name('done')
   },1500)
}
setTimeout(() => {
    console.log('timer is done')
    fetchdata((txt)=> {
      console.log(txt)
    })
}, 2000);
console.log("hi")
