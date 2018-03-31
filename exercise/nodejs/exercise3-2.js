function reverse(x){
    var y = ""
    l = x.length    
    for(i=0;i<l;i++){
        y += x[l-i-1]
    }
    return y
}

var x = 'hello'
console.log('x is',x,'reverse(x)=',reverse(x))