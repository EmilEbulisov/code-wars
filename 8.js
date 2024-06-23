function removeUniqueCharacters(inputString) {
    // Count the occurrences of each character in the string
    const charCounts = {};
    for (const char of inputString) {
        if (char in charCounts) {
            charCounts[char] += 1;
        } else {
            charCounts[char] = 1;
        }
    }

    // Filter out the characters that appear only once
    let result = '';
    for (const char of inputString) {
        if (charCounts[char] > 1) {
            result += char;
        }
    }

    return result;
}

// Test case
const inputStr = "abccdefee";
const outputStr = removeUniqueCharacters(inputStr);
console.log(outputStr);  // Output: "cceee"
