// Promises can be created using the Promise constructor, which accepts an executor function with two parameters:resolve and reject

const { log } = require("async");

const myPromise = new Promise((resolve,reject)=>{
    // an async operation (e.g. API call,file read)
    setTimeout(()=>{
        const sucess = Math.random() > 0.5;
    
        if(sucess){
            resolve('Operation completed successfully');

        }else{
            reject(new Error('Operation failed'));
        }
    },1000);
});

myPromise
.then(result => console.log('Success:',result))
.catch(error => console.error('Error',error.message));