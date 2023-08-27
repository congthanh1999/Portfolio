let array = [10, 20, 30, 80, 19, 29, 23];

let shuffle = (arr) => {
    let randomIndex = Math.floor(Math.random()*arr.length);
    for(let i = 0; i<arr.length; i++){
        let temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

shuffle(array)
console.log(...array)