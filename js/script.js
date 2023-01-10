// Function to Display Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num < 10 || num > 10000000 || num[0] == "0" || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 10 and 10000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.</p>`;
        txt += `Value of n, 1 < n < ${num}, for which φ(n) is a permuation of n and the ratio n/φ(n) produces a minimum is ${totientPermutation(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to find the value of n from 1 to limit, for which
    n/φ(n) produces a minimum.

    totientPermutation(10000)    returns 4435
    totientPermutation(100000)   returns 75841
    totientPermutation(500000)   returns 474883
    totientPermutation(10000000) returns 8319823
*/
function totientPermutation(limit) {
    function getSievePrimes(max) {
        const primes = [];
        const primesMap = Array(max).fill(true);
        primesMap[0] = false;
        primesMap[1] = false;
        for (let i = 2; i < max; i += 2) {
            if (primesMap[i]) {
                primes.push(i);
                for (let j = i * i; j < max; j += i) {
                    primesMap[j] = false;
                }
            }
            if (i === 2) i = 1;
        }
        return primes;
    }

    function sortDigits(number) {
        return number.toString().split('').sort().join('');
    }

    function isPermutation(numberA, numberB) {
        return sortDigits(numberA) === sortDigits(numberB);
    }

    const MAX_PRIME = 4000;
    const primes = getSievePrimes(MAX_PRIME);
    let nValue = 1;
    let minRatio = Infinity;
    for (let i = 1; i < primes.length; i++) {
        for (let j = i + 1; j < primes.length; j++) {
            const num = primes[i] * primes[j];
            if (num > limit) break;
            const phi = (primes[i] - 1) * (primes[j] - 1);
            const ratio = num / phi;
            if (minRatio > ratio && isPermutation(num, phi)) {
                nValue = num;
                minRatio = ratio;
            }
        }
    }
    return nValue;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}