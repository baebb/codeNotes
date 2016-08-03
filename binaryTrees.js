//count nodes
var CountTotal = 0;

function countNodes(node) {
    if (node != null) {
        CountTotal += 1;
        countNodes(node.left);
        countNodes(node.right);
    }
}

//depth (pre-order) first search
function depthFirst(node) {
    if (node) {
        console.log(node.value); //is node 'x'?
        depthFirst(node.left);
        depthFirst(node.right);
    }
}

//get depth of each node too
var depth = 0;

function dfDepthToo(node, depth) {
    if (node) {
        console.log(node.value + " at depth: " + depth);
        dfDepthToo(node.left, depth + 1);
        dfDepthToo(node.left, depth + 1);
    }
}

//in-order first search
function inOrder(node) {
    if (node) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}

//breadth first search
function breadthFirst(node, depth) {
    var queue = [node];
    
    while (queue.length) {
        current_node = queue.pop();
        if (node.left) {
            queue.push([node.left, depth + 1]);
        }
        if (node.right) {
            queue.push([node.right, depth + 1]);
        }
    }
}


//is tree balanced?
function getHeight(node, n) {
    var notBalanced = -1;

    if (node === null) {
        return n;
    }

    var leftHeight = getHeight(node.left, n + 1);
    if (leftHeight == notBalanced) {
        return "not balanced";
    }

    var rightHeight = getHeight(node.right, n + 1);
    if (rightHeight == notBalanced) {
        return "not balanced";
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return "not balanced";
    }

    return Math.max(leftHeight, rightHeight);

}