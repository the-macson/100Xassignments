setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(`${hour}:${min}:${sec}`);
},1000);