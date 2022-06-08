//  Normal for loop with var
for(var i=0;i<10;i++){
    console.log(i);
}

// Funtion loop with var
for(var i=0; i<10; i++) {
    setTimeout(()=>{
        console.log(i);
    },1000);
}

// Funtion loop with let
for(let i=0; i<10; i++) {
    setTimeout(()=>{
        console.log(i);
    },1000);
}