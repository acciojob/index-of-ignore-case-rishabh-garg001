function indexOfIgnoreCase(s1, s2) {
  // write your code here
	
let temp = -1;

for (let i = 0; i < str.length; i++) {

    let k = i;
    let found = true;

    for (let j = 0; j < subStr.length; j++) {

        if (str[k] == subStr[j]) {
            k++;
        } else {
            found = false;
            break;
        }
    }

    if (found) {
        temp = i;
        break;
    }
}

console.log(temp);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
