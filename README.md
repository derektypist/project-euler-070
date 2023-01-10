# Project Euler 070 - Totient Permutation

Euler's Totient function, &phi;(n), sometimes called the phi function, is used to determine the number of positive numbers less than or equal to n which are relatively prime to n.  For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, &phi;(9) = 6.

The number 1 is considered to be relatively prime to every positive number, so &phi;(1) = 1.

Interestingly, &phi;(87109) = 79180, and it can be seen that 87109 is a permutation of 79180.

Find the value of n, 1 &lt; n &lt; limit, for which &phi;(n) is a permutation of n and the ratio n/&phi;(n) produces a minimum.

Information at [Project Euler 070](https://projecteuler.net/problem=70)

## UX

**Getting Started**

In the input field, enter a whole number between 10 and 10000000 (without leading zeros) and select the Submit Button.  Unless you have made an invalid input, you will see the value of n, for which &phi;(n) is a permutation of n and the ratio n/&phi;(n) produces a minimum.  For example, if you entered 10000, you would expect n to be 4435.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 10 or greater than 10000000
- Including leading zeros such as 01000
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, I expect the function `totientPermutation(10000)` to return a number.

As a user, I expect the function `totientPermutation(10000)` to return 4435.

As a user, I expect the function `totientPermutation(100000)` to return 75841.

As a user, I expect the function `totientPermutation(500000)` to return 474883.

As a user, I expect the function `totientPermutation(10000000)` to return 8319823.

User Stories on function `totientPermutation(limit)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 070](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-70-totient-permutation)

**Information Architecture**

The function `totientPermutation(limit)` returns a number, where `limit` is a number between 10 and 10000000.

## Features

Allows the user to enter a number in order to get the value of n from 1 to the number entered such that n/&phi;(n) produces a minimum and &phi;(n) is a permutation of n.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.3.0-alpha1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-070) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)