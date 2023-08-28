let array = [10, 20, 30, 80, 19, 29, 23, 100, 102, 108];

let shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

shuffle(array)
console.log(`Array length ${array.length}`);
console.log(...array);