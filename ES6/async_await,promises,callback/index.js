

// ----------------------normal function call-------------------------
// const datas =[
// {name:"pratik",profession:"software engineer"},
// {name:"dageshwar",profession:"software engineer"}
// ];
// function getDatas (){
//     setTimeout(() => {
//         let output = " ";
//         datas.forEach((data,index)=> {
//          output+=`<li>${data.name}</li>`  
//         })
//         document.body.innerHTML = output;
//     }, 2000);
// }

// function creatData(newData){
//     setTimeout(() => {
//         datas.push(newData)
//     }, 2000);
// }
// getDatas();
// creatData({name:"hemant",profession:"civil engineer"})

// ----------------------callback------  function me function ko as a argument pass krn,aur just niche call krna --------------------------

// const datas =[
// {name:"pratik",profession:"software engineer"},
// {name:"dageshwar",profession:"software engineer"}
// ];
// function getDatas (){
//     setTimeout(() => {
//         let output = " ";
//         datas.forEach((data,index)=> {
//          output+=`<li>${data.name}</li>`  
//         })
//         document.body.innerHTML = output;
//     }, 2000);
// }

// function creatData(newData,callback){
//     setTimeout(() => {
//         datas.push(newData)
//         callback();
//     }, 2000);
// }

// creatData({name:"hemant",profession:"civil engineer"},getDatas);

// ---------------promises------------------------- callback use karne ki jarurat nahi hai
// const datas =[
//     {name:"pratik",profession:"software engineer"},
//     {name:"dageshwar",profession:"software engineer"}
//     ];
//     function getDatas (){
//         setTimeout(() => {
//             let output = " ";
//             datas.forEach((data,index)=> {
//              output+=`<li>${data.name}</li>`  
//             })
//             document.body.innerHTML = output;
//         }, 2000);
//     }
    
//     function creatData(newData){
//         return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             datas.push(newData);
//             let error = false;
// if(!error){
//     resolve();
// }
// else{
//     reject("sab gadbad hai re baba");
// }
         
//         }, 2000);
//     })}
    
//     creatData({name:"hemant",profession:"civil engineer"}).then(getDatas);
    
   

// ---------------------------async await------- await chalta hi tabhi hai jab function asyncronous ho,
 const datas =[
        {name:"pratik",profession:"software engineer"},
    {name:"dageshwar",profession:"software engineer"}
    ];
    function getDatas (){
        setTimeout(() => {
            let output = " ";
            datas.forEach((data,index)=> {
             output+=`<li>${data.name}</li>`  
            })
             document.body.innerHTML = output;
       }, 2000);
    }
    function creatData(newData){
                return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    datas.push(newData);
                    let error = false;
        if(!error){
            resolve();
        }
        else{
            reject("sab gadbad hai re baba");
        }
                  
                }, 2000);
            })}

       async function start(){
 await creatData({name:"hemant",profession:"civil engineer"});
 getDatas();
            }
            start();

            
