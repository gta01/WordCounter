// 
let inputArea = document.getElementById("input-area");
let wordCount = document.getElementById("word-count");
let characterCount = document.getElementById("char-count");

// console.log(inputArea, wordCount, characterCount);

inputArea.addEventListener("input", () => {
    // counts no of characters
    characterCount.textContent = inputArea.value.length;
    // removes whitespace from both side of string
    let textPart = inputArea.value.trim();
    // console.log(textPart);
    // split text at spaces to array of substrings
    // filter empty string and count length of array
    wordCount.textContent = textPart.split(/\s+/).filter(
        (item) => item).length;
});



