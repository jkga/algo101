const origArray = [10, 5, 8, 4, 1, 7, 11]

let array = [...origArray]
let numSwapped = 0
let passes = 0

const insertion_sort = (array) => {
  return new Promise((resolve, reject) => {
    const _aLength = array.length
    for (let a = 0; a < _aLength; a++) {
      passes++
      let b = a;
      while (b) {
        b--;
        
        const __left = array[b-1]
        const __right = array[b]
        // swap
        if(__right < __left) {
          numSwapped++
          array[b] = __left
          array[b-1] = __right
          console.log(array)
        } else {
          b = false
        }
        
      }
      resolve(array)
    }
  })
}


// call bubble sort
insertion_sort(array).then(res => {
  console.log(`Passes: ${passes}`)
  console.log(`Swapped: ${numSwapped}`)
  console.log(`Before: ${origArray}`)
  console.warn(`After: ${res}`)
}).catch(err => {
  console.log(err)
})