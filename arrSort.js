let arrData=[11,34,2,56,7,5,78];

function bubbleSort(arr){
    let len=arr.length;
    for(let j=0;j<len;j++){
        for(let i=0;i<len-j;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
    }
    return arr;
}

function insertSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j>=0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
            }
        }
    }
    return arr;
}



console.log(bubbleSort(arrData))

console.log(insertSort(arrData))


