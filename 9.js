function getNthAnagram(word, n) {
    // Helper function to generate all unique anagrams of a word
    function generateAnagrams(word) {
        if (word.length <= 1) return [word];
        const anagrams = [];
        for (let i = 0; i < word.length; i++) {
            const firstChar = word[i];
            const remainingChars = word.slice(0, i) + word.slice(i + 1);
            for (const anagram of generateAnagrams(remainingChars)) {
                anagrams.push(firstChar + anagram);
            }
        }
        return anagrams;
    }

    // Generate all unique anagrams and sort them alphabetically
    const uniqueAnagrams = [...new Set(generateAnagrams(word))].sort();

    // Return the n-th anagram or an empty string if n is out of bounds
    return n < uniqueAnagrams.length ? uniqueAnagrams[n] : '';
}

// Test cases
console.log(getNthAnagram('abc', 0));  // Output: "abc"
console.log(getNthAnagram('abc', 1));  // Output: "acb"
console.log(getNthAnagram('abc', 5));  // Output: ""
