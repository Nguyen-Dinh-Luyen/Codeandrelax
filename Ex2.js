console.log("Testing Node.");
function findOppositeNumber(){
    const x = document.getElementById("n").value
    const y = document.getElementById("inputNumber").value
    let z = x / 2;
    let result;
    let num = x - 1;
    if (z <= y) {
        result = y - z;
        console.log(y - z);
    } else {
        result = parseInt(y) + parseInt(z);
        console.log(parseInt(y) + parseInt(z));
    }
    let node = document.createElement("li")
    let text = document.createTextNode("In a circle of " + x + " numbers from 0 to " + num + ", the opposite number of " + y + " is " + result);
    node.appendChild(text)
    document.getElementById("list1").appendChild(node)
}
function merge2String() {
    const a = document.getElementById("string1").value;
    const b = document.getElementById("string2").value;
    let merge ="";
    if (a.length > b.length) {
        for (let i = 0; i < b.length; i++) {
            merge += (a[i] + b[i]);
            console.log(merge)
        }
        for (let i = b.length; i < a.length; i++) {
            merge += a[i];
            console.log(merge)
        }
    } else if (a.length < b.length) {
        for (let i = 0; i < a.length; i++) {
            merge += (a[i] + b[i]);
            console.log(merge)
        }
        for (let i = a.length; i < b.length; i++) {
            merge += b[i];
            console.log(merge)
        }
    }
    let node = document.createElement("li")
    let text = document.createTextNode("Merged string result: " + merge);
    node.appendChild(text)
    document.getElementById("list2").appendChild(node)
    return merge;
}
console.log("End.")