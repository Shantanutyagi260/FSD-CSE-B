function login(){
    waitForFiveSec();
    console.log("Naman has logged in successfully");
}

function  getData(){
    waitForFiveSec();
    console.log("Data added!");
}

function displayData(){
    waitForFiveSec();
    console.log("Data displayed");
}

function attemptTest(){
    waitForFiveSec();
    console.log("Test attempted successfully!");
}

function waitForFiveSec(){
    const ms=new Date().getTime()+5000;
    while(new Date().getTime()<ms);
}
login();
getData();
displayData();
attemptTest();
console.log("Call other application");