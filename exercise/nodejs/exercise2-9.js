function isPrime(n) {
    for (var i=2; i<n; i++) {
      if (n%i === 0)
        return false;
    }
    return true;
  }

  for (var p=1; p<=100; p++) {
    if (isPrime(p))
      console.log("isPrime("+p+")");
  }