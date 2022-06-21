//Finding Phibonacci For given Number
const fibo = (n)=>{
    let i=0,j=1;
    let arr = [i,j]
    for(let k=2;k<n;++k){
        let fibo = i+j;
        arr.push(fibo);
        i = j;
        j = fibo;
    }
    return arr;
}

export default fibo;
