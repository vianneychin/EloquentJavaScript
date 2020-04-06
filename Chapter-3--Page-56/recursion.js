/*
    We've seen % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it's divisible by two.
    Here's another way to define whether a positive whole number is even or odd.

    • Zero is even.
    • One is odd.
    • For any other number N, its evenness is the same as N - 2.


    Define a recursive function that isEven corresponding to this description.
    The function should accept a single parameter (a positive, whole number) and return a Boolean.

    Test it on 50 and 65. See how it behaves on -1. Why? Can you think of a way to fix this?
    */

const recursivelyCheckIfEven = (num) => {
    if (Math.sign(num) === -1) {
        console.error("yo, this ain't a positive number");
        return;
    }

    if (num === 1) {
        console.log(false);
        return;
    }

    if (num === 0) {
        console.log(true);
        return;
    }

    recursivelyCheckIfEven(num - 2);
};

recursivelyCheckIfEven(-1);
recursivelyCheckIfEven(50);
recursivelyCheckIfEven(65);
