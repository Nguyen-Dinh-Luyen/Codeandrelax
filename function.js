console.log("Testing Node.")
function sumPrimeNumbers() {
    const a = document.getElementById("start").value
    const b = document.getElementById("end").value
    let tick = true;
    let j = 0;
    let i = 0;
    if (a < b) {
        if (a < 2 || b < 2) {
            console.log("Not a prime number: " + a + " and " + b)
        } else {
            let c = 0;
            if (i == 2) {
                console.log("Gotcha! " + i);
                c += parseInt(i);
            }
            for (i = a; i < b; i++) {
                for (j = 2; j < i; j++) {
                    if (i % j == 0) {
                        tick = false;
                        break;
                    }
                }
                if (tick == false) {
                    console.log("Non-prime: " + i);
                } else {
                    console.log("Gotcha! " + i);
                    c += parseInt(i);
                    console.log("Sum: " + c)
                }
                tick = true;
            }
            console.log("Sum: " + c);
            let node = document.createElement("li")
            let text = document.createTextNode("Total sum of all prime numbers within " + a + " and " + b + " equals " + c)
            node.appendChild(text)
            document.getElementById("list1").appendChild(node)
        }
    } else {
        let node = document.createElement("li")
        let text = document.createTextNode("Invalid input! Refresh this page to proceed!")
        node.appendChild(text)
        document.getElementById("list1").appendChild(node)
    }
}
function numberOneTriangle() {
    const s = document.getElementById("stars").value
    console.log("Check input: " + s);
    if (s < 1 || s > 10) {
        let node = document.createElement("li")
        let text = document.createTextNode("Invalid input! Refresh this page to proceed!")
        node.appendChild(text)
        document.getElementById("list2").appendChild(node)
    } else {
        for (i = 1; i <= s; i++) {
            let row = ""
            for (let j = 0; j < i ; j++) {
                row += "*"
            }
            console.log(row);
            let node = document.createElement("li")
            let text = document.createTextNode(row)
            node.appendChild(text)
            document.getElementById("list2").appendChild(node)
        }
    }
}
console.log("End.")