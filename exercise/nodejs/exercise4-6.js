function minGap(x){
    s = 1000000
    for (i=0;i<x.length;i++){
        for(j=0;j<x.length-i;j++){
            n = x[j+1]-x[j]
            if(n<s) s = n
        }
    }
    return s
}

x = [1,9,15,22,100]
console.log("minGap([1,3,6,7,10])=",minGap(x))