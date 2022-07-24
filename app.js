

//- Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with

const allStudents = [
    [ 'raj',2,15,5,'male','dhaka',400 ],
    [ 'akash',1,25,7,'male','pirojpur',700 ],
    [ 'titu',7,10,5,'male','barishal',900 ],
    [ 'faria',24,12,10,'female','kaukhali',1400 ],
];



allStudents.sort().map( (data) => {
        console.log(`

        Name: ${data[0]} 
        Roll: ${data[1]} 
        Age: ${data[2]} 
        Class: ${data[3]}
        Gender: ${data[4]} 
        Location: ${data[5]} 
        Fees: ${data[6]}
        `);
    
});
//----------------------------------------------






//- Total Admnission fees

let fees = 0;
allStudents.map( (data,index) => {
    console.log(`
        ${index +1}. Name: ${data[0]}, Roll: ${data[1]}, Fees: ${data[6]}
    `)
    fees += data[6];
});
console.log(`
       --------------------
       Total Fees: ${fees}
`)
//----------------------------------------------






//- Find All Female Students
allStudents.sort().map( (data,index) => {


    if (data[4] == 'female'){
        console.log(`

        Name: ${data[0]} 
        Roll: ${data[1]} 
        Age: ${data[2]} 
        Class: ${data[3]}
        Gender: ${data[4]} 
        Location: ${data[5]} 
        Fees: ${data[6]}

        `);
    }
    
});
//----------------------------------------------






//- Find class wise student result
allStudents.sort().map( (data,index) => {


    if (data[3] == 5){
        console.log(`

        Name: ${data[0]} 
        Roll: ${data[1]} 
        Age: ${data[2]} 
        Class: ${data[3]}
        Gender: ${data[4]} 
        Location: ${data[5]} 
        Fees: ${data[6]}

        `);
    }
    
});
//----------------------------------------------






//- Location wise student result
allStudents.sort().map( (data,index) => {


    if (data[5] == 'dhaka'){
        console.log(`

        Name: ${data[0]} 
        Roll: ${data[1]} 
        Age: ${data[2]} 
        Class: ${data[3]}
        Gender: ${data[4]} 
        Location: ${data[5]} 
        Fees: ${data[6]}

        `);
    }
    
});
//----------------------------------------------






//- find student between 10 - 25 age
allStudents.sort().map( (data,index) => {


    if (data[2] >= 10 && data[2] < 25 ){
        console.log(`
        Age between 10 - 25

        Name: ${data[0]} 
        Roll: ${data[1]} 
        Age: ${data[2]} 
        Class: ${data[3]}
        Gender: ${data[4]} 
        Location: ${data[5]} 
        Fees: ${data[6]}

        `);
    }
    
});