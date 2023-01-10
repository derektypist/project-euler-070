// Function to Display Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.length==0 || num<10 || num>10000000 || num[0]=="0" || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 10 and 10000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.</p>`;
        txt += `Value of n, 1 < n < ${num}, for which φ(n) is a permuation of n and the ratio n/φ(n) produces a minimum is ${totientPermutation(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}