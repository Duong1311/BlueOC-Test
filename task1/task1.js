function mostStringLength(arr) {
  if (arr.length === 0) {
    return [];
  }
  let lengthArr = arr.map((item) => item.length);

  let frequency = {};
  lengthArr.forEach((len) => {
    frequency[len] = (frequency[len] || 0) + 1;
  });
  //   console.log(frequency);

  let maxFreq = Math.max(...Object.values(frequency));
  //   console.log(maxFreq);
  let mostFrequentLengths = Object.keys(frequency).filter(
    (len) => frequency[len] === maxFreq
  );
  //   console.log(mostFrequentLengths);

  return arr.filter((str) =>
    mostFrequentLengths.includes(str.length.toString())
  );
}

console.log(mostStringLength(["a", "ab", "abc", "cd", "def", "gh"]));
console.log(
  mostStringLength(["cat", "dog", "fish", "mouse", "rat", "elephant"])
);
console.log(mostStringLength(["hello", "world", "hi", "bye", "hello world"]));
console.log(mostStringLength(["a", "aa", "aaa", "aaaa", "aaaaa"]));
console.log(mostStringLength(["one", "two", "three", "four", "five", "six"]));
