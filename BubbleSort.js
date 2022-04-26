var arr=[77,8,24,67,99,2,39];
console.log('Unsorted array is :', arr);

//Bubble Sort
//Move largest elment at top and keep doing one by one for all elements


for(var j=0;j<arr.length;j++)
{


for(var i=0;i<arr.length;i++)
{

    if(arr[i]>arr[i+1])
    {
        temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
}






}

console.log("Sorrted Array is: " );
console.log(arr);