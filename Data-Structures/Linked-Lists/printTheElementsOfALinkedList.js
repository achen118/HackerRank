function print(head) {
    let currNode = head;
    if (currNode) {
        console.log(currNode.data);
        while (currNode.next) {
            currNode = currNode.next;
            console.log(currNode.data);
        }
    }
}