/* write a function min that will take two arguments and returns the lowest one */

const min = (first, second) => {
    if (first > second) {
        console.log(second);
    }
    if (second > first) {
        console.log(first);
    }
};

min(2, 1);
