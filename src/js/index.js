let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

log = param => console.log(param);
random = (alphabet) => alphabet[Math.floor(Math.random() * (alphabet.length - 0) + 0)];

current = (alphabet) => {
    if (alphabet.length == 0) return "alphabet is empty";
    return random(alphabet);
}

input = (alphabet) => {
    if (alphabet.length == 0) return "input is empty";
    return random(alphabet);
}

next = () => current(alphabet);


check = (current, input) => {
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

// iterate = (quantity, range) => {
//     if (quantity == 0) return;
//     console.log(
//         check(current(alphabet), input(alphabet))
//     )
//     return iterate(quantity - 1);
// }

// iterate(100);

create = () => document.createElement("div");

classify = (element, name) => {
    element.className = name;
    return element;
}

fill = (element, content) => {
    element.innerHTML = content;
    return element;
}

append = element => document.body.appendChild(element)


render = (alphabet, counter) => {
    if (counter == alphabet.length) return;
    append(
        fill(
            classify(
                create(), alphabet[counter]
            ),
            alphabet[counter]
        )

    );
    return render(alphabet, counter + 1);
}

render(alphabet, alphabet.length - alphabet.length);
