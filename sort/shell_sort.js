
const origArray = [1, 2890, 7, 11, 15, 1024, 55, 73, 10, 9, 8, 55, 4, 70, 6789]

let array = [...origArray]
let numSwapped = 0
let passes = 0

const insertion_sort = (array) => {
  return new Promise((resolve, reject) => {
    const _aLength = array.length
    for (let a = 0; a < _aLength; a++) {
      passes++
      let b = a+1;
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

const shell_sort = async (array) => {
  return new Promise((resolve, reject) => {
    const __aLength = array.length
    let __gap = Math.floor(__aLength / 2)

    while(__gap > 1) {
      for(a = 0; a < __aLength; a++) {
        let __l = array[a]
        let __r = array[a + __gap] // get next index
        passes++

        // do not proceed if next value betwwen gap is undefined
        if(!__r) {
          __gap = Math.floor(__gap / 2)
          break
        }

        // compare
        if(__l > __r) {
          array[a] = __r
          array[a + __gap] = __l
          numSwapped++

          // swap elements on the left side with equivalent gap
          let selectedIndex = a 
          while(array[selectedIndex - __gap] > -1) {
            __l = array[selectedIndex - __gap]
            __r = array[selectedIndex]
            if( __r < __l) {
              array[selectedIndex] = __l
              array[selectedIndex - __gap] = __r
              numSwapped++
            }

            // previous index
            selectedIndex-= __gap
            
          }
          console.log(array)
        }
      }
    }

    if(__gap === 1) {
      console.log('[--------------starting insertion sort --------------]')
      insertion_sort(array).then(res => resolve(res))
    }
    
  })
}


// call bubble sort
shell_sort(array).then(res => {
  console.log(`Passes: ${passes}`)
  console.log(`Swapped: ${numSwapped}`)
  console.log(`Before: ${origArray}`)
  console.warn(`After: ${res}`)
}).catch(err => {
  console.log(err)
})