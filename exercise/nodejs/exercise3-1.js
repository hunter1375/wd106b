function palindrome(a){
    for(i=1;i<a.length;i++){
        for(j=1;j<i;j++){
            if(a[j]==a[i]) return true;
        }
    }
    return false;
}

x = "abcdefghijklmnopqrstuvwxyz";
y = "abcdefghijklmnopqrstudwxyz";
if(palindrome(x)) console.log("true");
else console.log("false");
if(palindrome(y)) console.log("true");
else console.log("false");