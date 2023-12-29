Taken from: https://codegolf.stackexchange.com/questions/139034/encode-an-integer

−--

We shall encode an integer in the following way:

Given positive integer `n > 1`. We convert it to an array as follows:

1. First, create an array of all `n`'s prime factors sorted ascending
2. Then, for every element: if it is equal to `2`, return an empty array. Otherwise replace the number with an array with its index in the prime numbers sequence, and then convert this number.

For example, lets convert number `46` to array. Firstly, convert it to array of its prime factors:

    [2, 23]

Number `23` is `9`th prime, so replace `2` with empty array and `23` with `[9]`. Array now becomes:

    [[], [9]]

Prime factors of `9` are `3` and `3`, so:

    [[], [3, 3]]

Do the same for both `3`:

    [[], [[2], [2]]]

And finally:

    [[], [[[]], [[]]]]

Now, to encode it, we simply replace each open bracket with `1` and each closing bracket with `0`, then remove all ending zeros and drop one `1` from the end. This is our binary number. Using the above example:

    [ ] [ [ [ ] ] [ [ ] ] ]

    | | | | | | | | | | | |
    | | | | | | | | | | | |
    V V V V V V V V V V V V

    1 0 1 1 1 0 0 1 1 0 0 0

Now simply drop the last three zeros and the last `1`. The number becomes `10111001` which is `185` in decimal. That is the expected output. Notice that in array to binary conversion brackets of the main array are not included.

---

Your task is to write a pair of functions, `encode` and `decode`. `encode` should encode a number according the above procedure, and `decode` will return the original number given an encoded number.
