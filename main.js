
function capilizeAndLowercase(word){
    let capitalWord = word.toUpperCase();
    let lowerWord = word.toLowerCase();
    return capitalWord + lowerWord;
}

console.log(capilizeAndLowercase('Hello'))

function findMiddleIndex(word){
    return Math.floor(word.length/2);
}

console.log(findMiddleIndex("Hello")) 
console.log(findMiddleIndex("Hello World")) 

function returnFirstHalf(word){
    let arr = Array.from(word);
    return arr.splice(0,findMiddleIndex(word)).join('');
}

console.log(returnFirstHalf('Hello'))
console.log(returnFirstHalf('Hello World'))

function capilizeAndLowercase(word){
    let firstHalf = returnFirstHalf(word).toUpperCase();
    let secondHalf = Array.from(word).splice(findMiddleIndex(word), word.length).join('').toLowerCase();
    
    return firstHalf+secondHalf;
}
console.log(capilizeAndLowercase("Hello")) 
console.log(capilizeAndLowercase("Hello World")) 

function capitalize(word){
    let arr = word.split(' ');
    let capitalizedWords;
    let newArr = [];

    arr.forEach(item=>{
        item = Array.from(item);
        item.forEach(letter=>{
            if(item.indexOf(letter) == 0){
                item[0] = letter.toUpperCase();
                capitalizedWords = item.join('');
                newArr.push(capitalizedWords);
            }
        })
    });
    
    return newArr.join(' ');
}

console.log(capitalize("hey friends! practice practice practice!")) // -> "Hey Friends! Practice Practice Practice!"