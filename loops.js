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

//whileLoop(100)

function doWhileLoop(array) {
  do { function maybeTrue() {
    return Math.random() >= 0.5
  }

  } while (array.length > 0 && maybeTrue());
}
