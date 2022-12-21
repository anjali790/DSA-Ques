function fibo(num){
    let n1=0, n2=1, nextTerm;
    for(let i=0; i<num; i++){
        console.log(n1);
        nextTerm=n1+n2;
        n1=n2;
        n2=nextTerm;
    }
}
console.log(fibo(8));