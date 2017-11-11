function blaa(n) {
    console.log(n);
    if (n<10) {
        return n;
    }
    n--;
    blaa(n);
}
blaa(13)
