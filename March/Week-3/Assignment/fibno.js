function fibonacci(n){
    var n1 = 0;
    var n2 = 1;
    var n3 ;
    console.log(n1)
    console.log(n2)
    for(i=3; i<n; i++){
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;
        console.log(n3)
    }
}

fibonacci(10);