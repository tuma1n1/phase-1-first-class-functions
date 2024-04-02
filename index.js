function receivesAFunction(doSomething){
    doSomething()
};

function returnsANamedFunction(){
    return function kimbia (){console.log("run");}
}

function returnsAnAnonymusFunction(){
    return function() {return "before all"};
    
}
