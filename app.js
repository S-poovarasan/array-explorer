const input=document.getElementById("array");
const disp=document.getElementById("display");



function sort() {
    const arr1=input.value.split(",").map(Number);
    const sortarr=arr1.sort((a, b) => a-b);
    disp.innerHTML="Sorted array is:";
    disp.innerHTML = sortarr.join(", ");
}

function reverse(){
    const arr1=input.value.split(",").map(Number);
    const revarr=arr1.sort((a, b) => b-a);
    disp.innerHTML =revarr.join(", ");
}

function even(){
    const arr1=input.value.split(",").map(Number);
    const evennum=arr1.filter((eve)=>eve%2==0);
    disp.innerHTML = evennum.join(", ");
}

function odd(){
    const arr1=input.value.split(",").map(Number);
    const oddnum=arr1.filter((eve)=>eve%2!=0);
    disp.innerHTML = oddnum.join(", ");
}

function max(){
    const arr1=input.value.split(",").map(Number);
    let max=0;
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]>max)
        {
            max=arr1[i];
        }
    }
    disp.innerHTML=max;
}

function min(){
    const arr1=input.value.split(",").map(Number);
    let min=arr1[0];
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]<min)
        {
            min=arr1[i];
        }
    }
    disp.innerHTML=min;
}
