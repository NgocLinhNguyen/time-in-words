// expecting time to be a string in the format like '8:15' or '12:30'
const numberMapping = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
  30: 'half',
};

function convertTimeToWords(time) {
  let [hour, minute] = time.split(":").map((info) => parseInt(info))
  if (minute === 0) {
    if (hour === 0) return 'midnight';
    if (hour === 12) return 'midday';
    return `${numberMapping[hour]} o'clock`;
  }

  let result =  [];
  let connected_word = ''
  if (minute > 30) {
    connected_word = 'to'
    hour += 1
    minute = 60 - minute
  } else {
    connected_word = 'past'
  }
  result.push(numberMapping[minute] || minute)
  result.push(connected_word)
  result.push(numberMapping[hour])

  return result.join(' ')
}

module.exports = { convertTimeToWords };