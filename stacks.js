//check if brackets are being closed properly
var text = "{[]()}";

var stringText = text.split('');

function getFriend(text) {
    var openerStack = [];
    var closerStack = [];

    for (var i = 0; i < stringText.length; i ++) {

        if (stringText[i] == '(' || stringText[i] == '{' || stringText[i] == '[') {
            openerStack.push(stringText[i]);
        }

        if (stringText[i] == ')' && openerStack[openerStack.length-1] == '(') {
            openerStack.pop();
        }

        if (stringText[i] == '}' && openerStack[openerStack.length-1] == '{') {
            openerStack.pop();
        }

        if (stringText[i] == ']' && openerStack[openerStack.length-1] == '[') {
            openerStack.pop();
        }
        // console.log(openerStack);
    }

    if (openerStack.length) {
        console.log('false');
    } else {
        console.log('true');
    }

}

getFriend(text);