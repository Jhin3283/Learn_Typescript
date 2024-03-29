function add(n1:number, n2:number): number{
    return n1 + n2
}
function printResult(num: number): void {
    console.log("result: " + num);
}
printResult(add(5,12));

let combineValues: (a:number, b:number)=> number;

function addAndHandle(n1: number, n2: number, cb: (num: number)=> void) {
    const result = n1+ n2;
    cb(result);
}

combineValues = add;
// combineValues = 5;

console.log(combineValues(8,8))
addAndHandle(10, 20, (result) => {
    console.log(result);
})