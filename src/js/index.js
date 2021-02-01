let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

random = (alphabet) => {
    return alphabet[Math.floor(Math.random() * (alphabet.length - 0) + 0)];
}

current = (alphabet) => {
    if (alphabet.length == 0) return "alphabet is empty";
    return random(alphabet);
}

input = (alphabet) => {
    if (alphabet.length == 0) return "input is empty";
    return random(alphabet);
}

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

next = () => {
    return current(alphabet);
}



// iterate = (quantity, range) => {
//     if (quantity == 0) return;
//     console.log(
//         check(current(alphabet), input(alphabet))
//     )
//     return iterate(quantity - 1);
// }

// iterate(100);









"dssssddssssss"