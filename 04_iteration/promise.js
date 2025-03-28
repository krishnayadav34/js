            // promise
            //1

//const promiseOne = new Promise(function( resolve,reject){
  //  setTimeout(function(){
    //    console.log('Asymc task is complete');
      //    resolve()
    //},1000)
//})
//promiseOne.then(function(){
  //  console.log("Promise Consumed");
//})
                                          //2


 //new Promise(function( resolve,reject){
   // setTimeout(function(){
     //   console.log('Asymc task is 2');
       //   resolve()
    //},1000)
//}).then(function(){
  //  console.log("Async 2 is resolved");
//})

                                          //5

                                          
 const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = false // true me error aayega
        if(!error){
            resolve ({ username : "krishna", password : "1234"})
         } else{
                reject('error : something Went Wrong')
            }
        },1000)
    });
    async function consumepromiseFive (){
        const response = await promiseFive
        console.log(response);
        }
        consumepromiseFive()


    
                                         
