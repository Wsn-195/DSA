//Insertion Sort 
//Insertions sort works well for sorting linked list

//Use cases of Inserttion Sort 
//1. Adaptive - works well when data is nearly sorted . 
//2. In-Place - Requires only O(1) memory space only. 
//3. Online - Sorting can occur as data is received. 



var arr=[34,4,56,67,2,56,8,0,23,57,4,78];

for(var i=0;i<arr.length;i++)
{
pickedElement=arr[i];// i=4
IndexOfElementToShift=i-1; //3

while(IndexOfElementToShift>=0 && arr[IndexOfElementToShift]>pickedElement)
{
 arr[IndexOfElementToShift+1]=arr[IndexOfElementToShift];
 IndexOfElementToShift--;

}
arr[IndexOfElementToShift+1]=pickedElement;
}

console.log(arr);