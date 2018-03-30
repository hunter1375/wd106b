function GCD(a,b)
{
    while(b!=0)
    {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

sum = GCD(24,36);
gcd = GCD(105,20);
console.log(sum,gcd);