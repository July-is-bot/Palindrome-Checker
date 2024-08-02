const result = document.getElementById("result");
const checkButton = document.getElementById("check-btn");

const cleanInput = (input) => {
    const cleanedInput = input.replace(/[^a-z0-9]/ig, "")
    return cleanedInput.toLowerCase();
}

const reverseInput = (input) => {
    let reversedInput = "";
    for (let i = input.length - 1; i > -1; i-- ) {
        reversedInput += input[i];
    }
    return reversedInput;
}

const checkForPalindrome = () => {
    const textInput = document.getElementById("text-input").value;
    if (textInput) {
        if (cleanInput(textInput) === reverseInput(cleanInput(textInput))) {
            result.innerText = `${textInput} is a palindrome`;
            result.classList.remove("red");
            result.classList.add("green");
        } else {
            result.innerText = `${textInput} is not a palindrome`;
            result.classList.remove("green");
            result.classList.add("red");
        };
    } else {
        alert("Please input a value");
    }
}

const displayResult = (input) => {
}

console.log(reverseInput(cleanInput("A man, a plan, a canal. Panama")))
console.log(cleanInput("A man, a plan, a canal. Panama"))
checkButton.addEventListener("click", checkForPalindrome);