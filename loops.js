var loopyArray = []

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array[i]= "I am ${i} strange loops."
  }
  return array
}

console.log(forLoop(loopyArray))
