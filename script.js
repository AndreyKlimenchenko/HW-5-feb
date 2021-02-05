// document.write()
function task1() {
    console.log('______task1_____');
    for(let i = 1; i < 51; i++) {
        console.log(i);
    }
};



function task1_1() {
    console.log('_____task1_____');
    for(let i = 35; i > 7; i--) {
        console.log(i);
    }
};

function task2() {
    let i = 89;
    while (i > 10) { 
        document.write(`${i} <br/>`);
        i--;
    }
};

function task3() {
    let sum = 0;
    for(let i = 1; i < 101; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

function task4() {
    const num = +prompt('Введите положительное число', 1);
    if (num < 0) {
        alert('NO!')
        return;
    } 
    let sum = 0;
    for (let index = 1; index < num + 1; index++) {
        sum = sum + index;
    }
    console.log(sum);
}

function task5() {
    for (let i = 8; i < 57; i++) {
        if (i % 2 == 0) {
            document.write(`${i} `);
        }
    }
}

function task5_1() {
    let num = 8;
    while (num < 57) {
    if (num % 2 === 0) {
        document.write(`${num} <br/>`);
    }
    num++;
    }
};

function task6() {
    for (let a = 2; a < 11; a++) {
        for (let i = 2; i < 11; i++) {
            document.write(`${a} * ${i} = ${a * i} <br/>`);
        }
        document.write('------------<br/>');
    }
};

function task7() {
    let n = 1000;
    let num = 0;
    while (n >= 50) {
        n = n / 2;
        num++;
    }
    console.log(num);
}

function task8() {
    
}