export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      
      animations.push([i, j]);
      
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      
      animations.push([i, i]);
      
      animations.push([i, i]);
      
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      
      animations.push([j, j]);
      
      animations.push([j, j]);
      
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  export function getQuickSortAnimations(array)
  {
      const animations = [];
      if (array.length <= 1) return array;
      quickSort(array,0,array.length -1, animations);
      return animations;

  }
  

  function quickSort(array, low, high, animations)
  {
        if(low < high)
        {
            let pi = partition(array, low, high, animations);
            quickSort(array, low, pi-1, animations);
            quickSort(array, pi+1, high, animations);
        }
  }

  function partition(array, low, high, animations)
  {
      let pivot = array[high];
      let i = low - 1;
      for(let j = low; j<=high; j++)
      {
          animations.push([j, high]);
          animations.push([j, high]);

          if(array[j] < pivot)
          {
              
              i++;


              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;

              animations.push([i, array[i],j, array[j]]);              
          }
          else
          {
              animations.push([j, array[j],high, pivot]);
          }
      }

      animations.push([i+1, high]);
      animations.push([i+1, high]);
      let temp = array[i+1];
      array[i+1] = pivot;
      array[high] = temp;

      animations.push([i+1, pivot,high, array[high]]);

      return i+1;
  }



  export function getBubbleSortAnimations(array)
  {
      const animations = [];
      if(array.length ===1 ) return array; 
      bubbleSort(array, animations);
      return animations;
  }

  function bubbleSort(array, animations)
  {
        let swapped = false;
        let n = array.length;
        for(let i =0; i<n; i++)
        {
            for(let j = 0; j<n - i - 1; j++ )
            {
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                if(array[j]>array[j+1])
                {
                    let temp  = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    swapped = true;

                }
                animations.push([j, array[j], j+1, array[j+1]]);

            }
            if(!swapped)
                break;
        }
  }


  export function getHeapSortAnimations(array)
  {

      const animations = [];
      heapSort(array, animations);
      return animations;
  }

  function heapSort(array, animations)
  {
      let n = array.length;
      for(let i = Math.floor(n/2) - 1; i>=0; i--)
      {
          heapify(array, n, i, animations);
      }

      for(let i = n-1; i>=0; i--)
      {
          animations.push([0,i]);
          animations.push([0,i]);

          let temp = array[0];
          array[0] = array[i];
          array[i] = temp;

          animations.push([0, array[0], i, array[i]]);

          heapify(array, i, 0, animations);
      }
  }

  function heapify(array, n , i, animations)
  {
      let largest = i;
      let left = 2*i + 1;
      let right  = 2*i + 2;

      if(left<n && array[left] > array[largest])
      {
        animations.push([largest, left]);
        animations.push([largest, left]);
        animations.push([largest, array[largest], left, array[left]]);
        largest = left;
      }

      if(right<n && array[right] > array[largest])
      {
        animations.push([largest, right]);
        animations.push([largest, right]);
        animations.push([largest, array[right], left, array[right]]);
        largest = right;
      }

      if(largest!==i)
      {
          animations.push([i, largest]);
          animations.push([i, largest]);

          let temp = array[i];
          array[i] = array[largest];
          array[largest] = temp;

          animations.push([i, array[i], largest, array[largest]]);

          heapify(array, n, largest, animations);
      }
  }



  

