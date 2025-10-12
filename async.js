// Call back hell
getUser(userId,(err,user)=>{
    if(err) return handleError(err);
    getOrders(user.id,(err,orders)=>{
        if(err) return handleError(err);
        processOrders(orders,(err)=>{
            if(err) return handleError(err);
            console.log('All done');
        });
    });
});

// Promises
getUser(userId)
.then(user=>getOrders(user.id))
.then(orders=>processOrders(orders))
.then(()=>console.log('All done!'))
.catch(handleError);

// Async/Await
async function processUser(userId){
    try{
        const user = await getUser(userId)
        const orders = await getOrders(user.id);
        await processOrders(orders);
        console.log('All done');
    }catch(err){
        handleError(err);
    }
}

let User = {};
// Best Practices
async function getUserData(userId){
    try{
        const user = await User.findById(userId);
        const orders = await Order.find({userId});
        return {user,orders};

    }catch(error){
        console.error('Failed to fetch user data:',error);
        throw error; 
    }
}

// Async code lets Node.js handle many request at once, without waiting for slow operations like files or database access

// It makes Node.Js great for servers and real time apps 
