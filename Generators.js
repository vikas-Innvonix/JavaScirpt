function* generators(){
    yield 1;
    let doubleNumber = yield 2;
    yield *[20,30,40];
    return doubleNumber*2;
}

let a = generators();
console.log(a.next())
console.log(a.next());
console.log(a.next(200))
console.log(a.next())
console.log(a.next())
console.log(a.next())

