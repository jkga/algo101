const origArray = [1, 2890, 7, 11, 15, 1024, 55, 73, 10, 9, 8, 55, 4, 70, 6789]

let array = [...origArray]
let numSwapped = 0
let passes = 0

const selection_sort = (array) => {
  return new Promise((resolve, reject) => {
    const _aLength = array.length
    let __index = 0 
    
    while(__index < _aLength) {
      passes++
      // minimum value
      let __min
      for (let a = __index; a < _aLength; a++) {
        if (!__min) __min = a
        // get current index of lowest value
        __min = array[a] < array[__min] ? a : __min
        
        // do the swapping on the end of the loop
        if (typeof array[a+1] === 'undefined') {
          let __l =  array[__index]
          let __r = array[__min]
          array[__index] = __r
          array[__min] = __l
          console.log(array)
          numSwapped++
          // next
          __index++ 
        } 
    
        resolve(array)
      }
    }
  })
}


// call bubble sort
selection_sort(array).then(res => {
  console.log(`Passes: ${passes}`)
  console.log(`Swapped: ${numSwapped}`)
  console.log(`Before: ${origArray}`)
  console.warn(`After: ${res}`)
}).catch(err => {
  console.log(err)
})