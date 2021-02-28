let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



let log = param => console.log(param);
let random = (alphabet) => alphabet[Math.floor(Math.random() * (alphabet.length - 0) + 0)];

let map = letter => require('../assets/sounds/' + letter + '.mp3');

let current = (alphabet) => {
    if (alphabet.length == 0) return "alphabet is empty";
    return random(alphabet);
}

let input = (alphabet) => {
    if (alphabet.length == 0) return "input is empty";
    return random(alphabet);
}

let next = () => current(alphabet);


let check = (current, input) => {
    if (current == input) return {
        check: true,
        current: current,
        input: input,
        next: next()
    };
    return {
        check: false,
        current: current,
        input: input,
        next: false
    }
}

let fillFinder = (element, content) => {
    element.innerHTML = "Find".toUpperCase() //:" + " " + content.toUpperCase();
    return element;
}

let create = () => document.createElement("div");

let classify = (element, name) => {
    element.className = name;
    return element;
}

let fill = (element, content) => {
    element.innerHTML = content.toUpperCase() + "  " + content;
    return element;
}

let append = (element, root) => {
    if (root == undefined) return document.body.appendChild(element);
    root.appendChild(element);
}

let clickify = (element, name) => {
    element.onclick = () => {
        if (check(document.body.className, name).next == false) {

            log(
                document.body.appendChild(
                    classify(
                        create(), "wrong"
                    ),
                    "you are wrong"
                )
            )

            return;
        };
        document.body.removeChild(document.getElementsByClassName("audio" + "-" + document.body.className)[0]);
        document.body.className = check(document.body.className, name).next;
        document.body.removeChild(document.getElementsByClassName("finder")[0]);
        document.body.appendChild(fillFinder(classify(create(), "finder"), document.body.className));
        document.body.appendChild(new Audio(map(document.body.className).default));
        document.body.getElementsByTagName("audio")[0].className = "audio" + "-" + document.body.className;
        log(
            document.body.appendChild(
                classify(
                    create(), "right"
                ),
                "you are right"
            )
        )
        document.body.getElementsByClassName("finder")[0].onclick = () => {
            document.body.getElementsByClassName("audio" + "-" + document.body.className)[0].play()
        }
    }
    return element;
}

let render = (alphabet, counter) => {
    if (counter == alphabet.length) return window.onload = () => {
        document.body.className = current(alphabet);
        document.body.appendChild(
            fillFinder(classify(create(), "finder"), document.body.className)
        );
        document.body.appendChild(new Audio(map(document.body.className).default));
        document.body.getElementsByTagName("audio")[0].className = "audio" + "-" + document.body.className;

        document.body.getElementsByClassName("finder")[0].onclick = () => {
            document.body.getElementsByClassName("audio" + "-" + document.body.className)[0].play()
        }
    }
    append(
        fill(
            classify(
                clickify(
                    create(),
                    alphabet[counter]),
                alphabet[counter]),
            alphabet[counter])
    );
    return render(alphabet, counter + 1);
}

// fillFinder = (element, content) => {
//     element.innerHTML = content;
//     return element;
// }




// console.log(new img());
render(alphabet, alphabet.length - alphabet.length);





// iterate = (quantity, range) => {
//     if (quantity == 0) return;
//     console.log(
//         check(current(alphabet), input(alphabet))
//     )
//     return iterate(quantity - 1);
// }

// iterate(100);