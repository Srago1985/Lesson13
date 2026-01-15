//problem: console.log prints 10 ten times after 1 second
//fix it to print 0,1,2,...9
//use only var in your solution
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

//solution: this happens because of var scoping
//var is function scoped, so the same i is shared in all iterations
//after 1 second the loop is finished and i is 10
//that's why 10 is printed ten times
//we need to create a new scope for each iteration

for (var i = 0; i < 10; i++) {
    ((index) => {
        setTimeout(() => {
            console.log(index);
        }, 1000);
    })(i);
}

//or

for (var i = 0; i < 10; i++) {
    setTimeout(((index) => {
        return () => {
            console.log(index);
        };
    })(i), 1000);
}

//or

for (var i = 0; i < 10; i++) {
    function printIndex(index) {
        setTimeout(() => {
            console.log(index);
        }, 1000);
    }
    printIndex(i);
}