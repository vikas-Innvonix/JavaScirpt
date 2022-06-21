const arr = [1,2,3,4,5,6];
let sum = 7;

let hashTable = {};
let ans = [];

for(let i=0;i<arr.length;++i){
    let difference = sum - arr[i];
    if(hashTable[arr[i]]!=undefined){
        ans.push([hashTable[arr[i]],i]);
    }
    else{
        hashTable[difference] = i;
    }
}
console.log(ans);