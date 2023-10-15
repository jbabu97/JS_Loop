// for loop

for (let i = 0; i < 10; i++) {
    const element = i+1;
    console.log(element);
};

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`${i} is my favourite number`);
    }
    console.log(element);
};


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`my favourite number 5`);
        break;
    }
    console.log(`value of i is ${i}`);
};

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`my favourite number 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
};


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Looop value is ${j} and inner Loop in ${i}`);
        console.log(i + " * " + j + " = " + i*j);
    }
};

const myArray = ['Bangladesh', 'Pakistan', 'South Africa', 'New Zealand'];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}