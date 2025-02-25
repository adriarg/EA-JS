// Call Stack 

function first() {
    console.log("First");
}
  
// Task Queue - MacroTask Queue
function second() {
    setTimeout(() => { 
        console.log("Second")
    }, 0); 
}

// Job Queue - MicroTask Queue
function third() {
    Promise.resolve().then(() => {
        console.log("Third")
    }) 
}

forth = () => {
    console.log("Forth")
}

first(); // call stack
second(); // macrotask queue
third(); // microtask queue
forth(); // call stack

//en aquest codi el que fem es cridar a les funcions first, second, third i forth
//  la funcio first s'executa directament perque es crida des del call stack
//  la funcio second s'executa despres de la funcio first perque es crida des de la macrotask queue
//  la funcio third s'executa despres de la funcio first perque es crida des de la microtask queue
//  la funcio forth s'executa despres de la funcio first perque es crida des del call stack
