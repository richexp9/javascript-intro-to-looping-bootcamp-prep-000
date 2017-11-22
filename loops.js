var loopyArray = []

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

//console.log(forLoop(loopyArray))


function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}
