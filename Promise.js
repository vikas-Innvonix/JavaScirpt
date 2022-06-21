// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("First Promise Resolve");
//         resolve(10);
//     },1000);
// });

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Second Promise Rejected");
//         reject("Promise Rejected");
//     },2000);
// });

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Third Promise Resolved");
//         resolve(40);
//     },3000);
// });

// let final = Promise.all([p1,p2,p3]);
// final.then((res)=>{console.log(res)}).catch(err=>{
//     console.log(err);
// })


let promise = fetch("https://dog.ceo/api/breeds/image/random").then(async res=>{
    let result = await res.json();
    console.log(result)
}).catch(err =>{
    if(err instanceof SyntaxError){
        console.log("JSON Error");
    }else{
        throw err;
    }
})

new Promise((resolve,reject)=>{
        console.log("First Promise Resolved");
        resolve(10)
}).then((res)=>{
    new Promise((resolve,reject)=>{
            console.log(res);
            console.log("Second Promise Resolved");
            resolve(res+20);
    }).then((res)=>{
        new Promise((resolve,reject)=>{
            console.log(res);
            console.log("Third Promise Rejected");
            reject(new Error("Promise Rejected"));
        }).catch(err=>{
            console.log(err)
        })
    })
}).catch(err=>{
    console.log(err);
})
