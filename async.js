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

// Parallel execution
async function fetchAllData(){
    try{
        const [users,products,orders] = await Promise.all([
            User.find(),
            Product.find(),
            Order.find()
        ]);

    }catch(error){
        console.error('error fetching data:',error);
        throw error;
    }
}

//  async function always returns a promise

// Sequential vs Parallel
function fetchData(id){
    return new Promise(resolve =>{
        setTimeout(()=>resolve("data for ID",id),1000)

    });
}

// Sequential Operation ~ 3 secs
async function fetchSequential(){
    console.time('sequential');
    const data1 = await fetchData(1);
    const data2 = await fetchData(2);
    const data3 = await fetchData(3);
    console.timeEnd('sequentail');
    return [data1,data2,data3];
}

// Parallel Operation - takes ~ 1 secs
async function fetchParallel(){
    console.time('parallel');
    const results = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3),

    ]);
    console.timeEnd('parallel');
    return results;
}

async function runDemo(){
    console.log("Running sequentialy");
    const seqResults = await fetchSequential();
    console.log(seqResults);

    
    console.log("\nRunning parallel");
    const parResults = await fetchParallel();
    console.log(parResults);
}

runDemo();