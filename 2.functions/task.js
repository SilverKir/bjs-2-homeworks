function getArrayParams(...arr) {
  if (arr.length<1){
    return 0;
  }
  let min=arr[0];
  let max=arr[0];
  let sum=arr[0];
  let avg=0;
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]){
        min =arr[i];
      } else if (max<arr[i]){
        max=arr[i];
      }
      sum +=arr[i];
    }
    avg=+(sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  if (arr.length<1){
    return 0;
  }
   return arr.reduce((a,b)=>a+b,0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length<1){
    return 0;
  }
  let min=arr[0];
  let max=arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]){
      min =arr[i];
    } else if (max<arr[i]){
      max=arr[i];
    }
  }
  return max-min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length<1){
    return 0;
  }
  let sumEvenElement=0;
  let sumOddElement=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0){
      sumEvenElement +=arr[i];
    } else {
      sumOddElement+=arr[i];
    }
  }
  return  sumEvenElement-sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length<1){
    return 0;
  }
  let sumEvenElement=0;
  let countEvenElement=0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0){
      sumEvenElement +=arr[i];
      countEvenElement++;
  }
}
  return  sumEvenElement/countEvenElement;
}



function makeWork (arrOfArr, func) {
  maxWorkerResult=func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i])
    if (maxWorkerResult<result){
      maxWorkerResult=result;
  }
}
return maxWorkerResult;
}
