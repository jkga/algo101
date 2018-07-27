const origArray = [1, 2890, 7, 11, 15, 1024, 55, 73, 10, 9, 8, 55, 4, 70, 6789]

let array = [...origArray]
let numSwapped = 0
let passes = 0

const bubble_sort = (array) => {
  return new Promise((resolve, reject) => {
    const _aLength = array.length
    for (let a = 0; a < _aLength - 1; a++) {
      
      let isSwapped = false
      passes++
      for (let b = 0; b < _aLength - 1 - a; b++) {
        // swap L -> R
        if(array[b] > array [b+1]) {
          let __l = array[b]
          let __r = array[b+1]
          array[b+1] = __l
          array[b] = __r
          // swapped
          numSwapped++
          isSwapped = true
        }
        resolve(array)
      }

      // if no swapping stop iteration
      if (!isSwapped) return
    }
  })
}


// call bubble sort
bubble_sort(array).then(res => {
  console.log(`Passes: ${passes}`)
  console.log(`Swapped: ${numSwapped}`)
  console.log(`Before: ${origArray}`)
  console.warn(`After: ${res}`)
}).catch(err => {
  console.log(err)
})