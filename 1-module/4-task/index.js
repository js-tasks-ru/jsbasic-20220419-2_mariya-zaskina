function checkSpam(str) {
  let newStr = str.toLowerCase();
  let firstCheck = '1xBet'.toLowerCase();
  let secondCheck = 'XXX'.toLowerCase();
  return (newStr.includes(firstCheck) || newStr.includes(secondCheck));
}
