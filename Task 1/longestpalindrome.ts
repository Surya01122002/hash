import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (str: string) => {
    let rev = "";
    let longpal = "";
    const len = str.length;

    for (let i = len - 1; i >= 0; i--) {
        rev += str.charAt(i);
    }

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let str1 = "";
            let revstr = "";

            for (let k = i; k <= j; k++) {
                str1 += str.charAt(k);
                revstr += rev.charAt(k);
            }

            if (str1 === revstr && str1.length > longpal.length) {
                longpal = str1;
            }
        }
    }

    console.log(longpal);
});