function Square(n)
{
    return n*n;
}
function Cube(n)
{
    return n*n*n;
}

function Operation(a,b,fn)
{
    const val1=fn(a);
    const val2=fn(b);
}

console.log(Operation(1,2,Square));
console.log(Operation(3,4,Cube));