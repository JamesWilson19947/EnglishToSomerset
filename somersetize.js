const dictionary = require('/translations/dictionary.json');
const randomSayings = require('/translations/somersetSayings.json');

const somersetize = (input) => {
  console.log(input)
  
  const words = input.split(' ');

  const translatedWords = words.map(word => {
    const lowerCaseWord = word.toLowerCase();

    if (dictionary.hasOwnProperty(lowerCaseWord)) {
      return dictionary[lowerCaseWord];
    }

    return word;
  });

  const outputWords = [];

  for (let i = 0; i < translatedWords.length; i++) {
    outputWords.push(translatedWords[i]);

    // Add random saying with a 5% chance
    if (i < translatedWords.length - 1 && Math.random() < 0.02) {
      const randomSaying = randomSayings[Math.floor(Math.random() * randomSayings.length)];
      outputWords.push(randomSaying);
    }
  }

  const output = outputWords.join(' ')

  // Add random saying at the beginning with a 5% chance
  if (Math.random() < 0.05) {
    const randomSaying = randomSayings[Math.floor(Math.random() * randomSayings.length)];
    return randomSaying + ' ' + output;
  }

  return output;
};

module.exports = somersetize;
