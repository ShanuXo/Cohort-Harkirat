//Promises -are like syntactical sugar that makes the code slightly more readable

//Promise has three state - PENDING , RESOLVED , REJECTED
function findSum(n)
{
    let ans=0;
    for(let i=0;i<n;i++)
    {
        ans+=i;
    }
    return ans;
}

function findSumTill100()
{
    return findSum(20);
}

setTimeout(findSumTill100,5000);
console.log("Hello Shanu");
const { Console } = require('console');
//console.log(findSum(20));

// WITHOUT PROMISES

const fs=require('fs');

function shanuReadFile(cb)
{
    fs.readFile("Hello.txt", "utf-8", function(err,data)
    {
        cb(data);
    })
}

//Callback function to call
function onDone(data)
{
    console.log(data);
}

shanuReadFile(onDone);

// /With the help of Promises we can write it cleaner way-no need to call callback function(to get rid of callback)

function shanuReadFilePromise()
{
    console.log("Inside Shanu -Asynchronus Function");
    return new Promise(function(resolve,reject)
    {
        console.log("Inside Promises");
        fs.readFile("HelloPromises.txt", "utf-8", function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                console.log("Before resolve");
                resolve(data);
            }
        })
    })
}

//Callback frunctiuon to call
function onDone(data)
{
    console.log(data);
}

// var a=shanuReadFilePromise();
// console.log(a);
// a.then(onDone);
shanuReadFilePromise().then(onDone);


console.log("Simple Example");

// Simple Example

var p = new Promise(function(r)
{
    r("food");
});

function callBack()
{
    console.log(p);
}

p.then(callBack);


var sh=new Promise(function(res)
{
    setTimeout(function()
{
    res("Hi Xo");
},2000);   
})

function fun()
{
    console.log(sh);
}

sh.then(fun);


// ----------------------------------------ASYNC AWAIT--------------------------------------------

function shanuPromiseWithoutAsync()
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
    {
        resolve("Promise Without Async");
    },1000);
        
    });
}
function main()
{
    shanuPromiseWithoutAsync().then(function(value)
    {
        console.log(value);
    });
}

main();

//With Async Await
function shanuPromiseWithAsync()
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
    {
        resolve("Promise With Async");
    },1000);
        
    });
}
async function main2()
{
    let value = await shanuPromiseWithAsync();
    console.log(value);
}

main2();



