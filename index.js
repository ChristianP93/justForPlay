const _calculateNext    = (arrayOfNumbers, value, index)=>{
    const starterPoint  = index+1;
    const limiter       = (value+index+1);
    const nextNumbers   = arrayOfNumbers.slice(starterPoint, limiter);
    if(nextNumbers.length === 0) return null;
    return nextNumbers.reduce((total, index)=>total+index);
}

const thereIsADup = (arrayOfNumbers)=>{
    let result = false;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
        if(arrayOfNumbers.indexOf(element) > -1 && arrayOfNumbers.indexOf(element) != i){ 
            result = true;
            break
        };  
    }
    return result;
}

const _calculateResult = (arrayOfNumbers) =>{
    const result = [];
    arrayOfNumbers.forEach( (value, index) => { 
        if(_calculateNext(arrayOfNumbers, value, index)) result.push(_calculateNext(arrayOfNumbers, value, index, false)); 
    });
    return result
}

const x = function(n){
    if(!Number(n)) return false;
    const arrayOfNumbers    = n.toString().split("").map((i)=> Number(i));
    const normal            = _calculateResult(arrayOfNumbers);
    const reverse           = _calculateResult(arrayOfNumbers.reverse());
    const result            = normal.concat(reverse);
    return thereIsADup(result);
}


console.log('123',x(123)); // true
console.log('124',x(124)); // false
console.log('6943923',x(6943923)); // true
console.log('235893528',x(235893528)); // true
console.log('235982309',x(235982309)); // true
console.log('9687983',x(9687983)); // false
console.log('764245',x(764245)); // false
console.log('6453',x(6453)); // false
console.log('12344',x(12344)); // false
console.log('1432543656456312',x(1432543656456312)); // true
console.log('1234423435',x(1234423435)); // true

