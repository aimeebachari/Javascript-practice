// test the isPangram() function, and print results to the console.
let sentences = [
  { content: 'The quick brown fox jumps over the lazy dog.', pangram: true },
  { content: 'The quick onyx goblin jumps over the lazy dwarf.', pangram: true },
  { content: 'Grumpy wizards make toxic brew for the evil queen and jack.', pangram: true },
  { content: 'Not a pangram', pangram: false },
  { content: '', pangram: false },
];


let isPangram = (sentence) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let pangram = true;

  alphabet.forEach((letter) => {
    if (sentence.toLowerCase().indexOf(letter) === -1) {
      pangram = false;
    }
  });
  return pangram;
};

  // let pangram = true
  //
  // for(let i = 0; i < alphabet.length; i++) {
  //   if (sentence.toLowerCase().indexOf(alphabet[i]) === -1) {
  //     pangram = false
  //   }
  //   return pangram
  // }


// let sentenceSet = new Set ()
// check for sentenceSet.size == 26


// .filter method will put value into a new array.
// return sentence.length == 26

sentences.forEach((sentence) => {
  let result = isPangram(sentence.content);
  let correct = (result == sentence.pangram);
  console.log(`isPangram gave a ${correct ? '' : 'in'}correct result for: ${sentence.content}`);
});
