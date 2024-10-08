/*
Promise()

Estados:
pending
fullfilled
Rejected

callbacks:
resolve
reject

then()
catch()
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
    
        if(operationSuccessful) {
            resolve("Operación exitosa!");
        }else {
            reject("Falló de operación");
        }
    }, 2000);
});

promise
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });