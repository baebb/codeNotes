//callback
function parent(CBFunc) {
    //do the stuff
    //but make sure you call the cbFunc
    CBFunc()
}

function theCallbackFunc () {
    //I happen at the end
}

parent(theCallbackFunc);

// function TaskRunner (limit) {
//     this.funcArr = [];
//     this.limit = limit;
//     this.current = 0;
//     this.push = function (newFunc) {
//         funcArr.push(newFunc);
//         this.runFunc();
//     };
//     this.runFunc = function () {
//         if (this.current < this.limit) {
//             var funcToRun = funcArr.shift();
//             this.current++;
//             funcToRun.bind(this, funcDone);
//         }
//     };
//     this.funcDone = function () {
//         this.current--;
//         this.runFunc();
//     }
// }

class TaskRunner {
    constructor(limit) {
        this.limit = limit;
        this.funcArr = [];
        this.current = 0;
    }
    push(newFunc) {
        this.funcArr.push(newFunc);
        runFunc.call();
    }
    runFunc() {
        if (this.current < this.limit) {
            let funcToRun = funcArr.shift();
            this.current++;
            funcToRun.bind(this, funcDone);
        }
    }
    funcDone() {
        this.current--;
        runFunc().call;
    }
}



