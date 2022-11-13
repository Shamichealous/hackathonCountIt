const mainFunction = (string) => {
  string = string.trim().replace(/\s+/g, '').replace(/[^a-zA-Z0-9 ]/g, '').replace(/[0-9]/g, '').split('')
  console.log(string)

  for (let i = 0; i < string.length; i++) {
      let counter = 0
      for (let j = 0; j < string.length; j++) {
          if (string[i] == string[j] && i > j) {
              break;
          }
          if (string[i] == string[j]) {
              counter++
              console.log(`The character ${string[i]} was found ${counter} number of times`)
          }
      }
  }
}

mainFunction("hohhoh!@#$1234")



