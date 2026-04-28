const loop=(data)=>{
    for(let i=1;i<=data;i++){
        console.log("data :",i);
    }

}
loop(20)


// find largest num

let arr=[10,100,1000,30,40]

let largenum=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]>largenum){
        largenum=arr[i]
    }
}
 console.log("largenum",largenum);