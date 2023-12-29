//https://www.codewars.com/kata/582c5382f000e535100001a7

function parse(string) {
    let data = string.split('->').map((x) => +x.trim());

    if (isNaN(data[0])) return null;

    let root = new Node(data.shift());
    createNode(data, root);

    return root;
}

function createNode(data, node) {
    let currentData = data.shift();

    if (data.length == 0) {
        node.next = null;
        return node;
    }

    if (!isNaN(currentData)) {
        let currentNode = new Node(currentData);
        node.next = currentNode;
        return createNode(data, currentNode);
    }
}
