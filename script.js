let score = 10;
console.log(score);

let sum = 0;
for(let i=1; i<=100; i++){
    sum+= i;
};
console.log(sum);

let count = 0;
for(let i =1; i<=999; i++){
    if(i%2===0) count++
}
console.log(`짝수의 개수는 ${count}개 입니다.`)