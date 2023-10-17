// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i+1;
//     console.log(element);
// };

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`${i} is my favourite number`);
//     }
//     console.log(element);
// };


// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`my favourite number 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// };

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`my favourite number 5`);
//         continue;
//     }
//     console.log(`value of i is ${i}`);
// };


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Looop value is ${j} and inner Loop in ${i}`);
//         console.log(i + " * " + j + " = " + i*j);
//     }
// };

// const myArray = ['Bangladesh', 'Pakistan', 'South Africa', 'New Zealand'];

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// };

// const myArr = ['Rahim', 'Karim', 'Jamal', 'Kamal'];

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
// }


// while loop

// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i++
// };

let team = ['Tamim', 'Shakib', 'Mushfiq', 'Mahmudullah', 'Mashrafi'];

let player = 0;
while (player < team.length) {
    console.log(`Player name is ${team[player]}`);
    player = player +1
};

//  do while

let run = 1;
do {
    console.log(`Team score is ${run}`);
    run++;
} while (run <= 10);

let runs = 11;
do {
    console.log(`The score is ${runs}`);
    runs++;
} while (runs <= 10);