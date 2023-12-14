// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs');
let data = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id at quos necessitatibus quas nemo exercitationem labore sequi adipisci eveniet sint unde odit autem sed, beatae, sit officiis commodi, quibusdam neque."
fs.writeFile('hello.txt',data, (err)=>{
    if(err){
        console.log(err)
    }else {
        console.log("file data saved!");
    }
})