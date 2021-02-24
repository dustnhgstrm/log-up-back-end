// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = "colin.jaffe@codeimmersives.com";
const password1 = "Hotforhimself";
const user2 = "mesuara@codeimmersives.com";
const password2 = "Console.logger";
const user3 = "anthony@codeimmersives.com";
const password3 = "like a BOSS";

// **YOUR** code below. Pass those tests!

// `isValidEmail` - returns `true` if the given string ends with `@codeimmersives.com`
// and has at least one character before that, and `false` otherwise.

function isValidEmail(email) {
  if (email.length >= 20 && email.includes("@codeimmersives.com")) {
    return true;
  } else return false;
}

const emailTest1 = isValidEmail("@codeimmersives.com");
emailTest1;
// `isValidPassword` - returns true if the given string is at least 8 characters with
// a lower case and upper case letter, and false otherwise. Do not use Regular Expressions (regex).
// HINT: you can COMPARE an upper-cased version of your string to the current string.
// If they're different, then it has at least one lower-cased letter. You can also do the
// same to check for an upper-cased letter.

function isValidPassword(pass1) {
  if (
    pass1.length >= 8 &&
    pass1 !== pass1.toUpperCase() &&
    pass1 !== pass1.toLowerCase()
  ) {
    return true;
  } else return false;
}
const tryOut1 = isValidPassword("This could work.");
tryOut1;

// `isRegisteredUser` - returns true if the given string is identical to ONE of the strings
// held in the variables `user1`, `user2`, and `user3`. Returns false otherwise.
// HINT: your solution should NOT need `&&`.

function isRegisteredUser(stringBeans) {
  if (
    stringBeans === "colin.jaffe@codeimmersives.com" ||
    stringBeans === "mesuara@codeimmersives.com" ||
    stringBeans === "anthony@codeimmersives.com"
  ) {
    return true;
  } else return false;
}
const tryUsers = isRegisteredUser("colijaffe@codeimmersives.com");
tryUsers;
// `passwordMatches` - returns true if the first string given is one of the strings in the
// user variables AND the second string is the matching string in the password variables.
// Returns false otherwise.

function passwordMatches(user, password) {
  if (
    (user === user1 && password === password1) ||
    (user === user2 && password === password2) ||
    (user === user3 && password === password3)
  ) {
    return true;
  } else return false;
}

// Our code below. Do not touch!

if (typeof isValidEmail === "undefined") {
  isValidEmail = undefined;
}

if (typeof isValidPassword === "undefined") {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === "undefined") {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === "undefined") {
  passwordMatches = undefined;
}

if (typeof user1 === "undefined") {
  user1 = undefined;
}

if (typeof user2 === "undefined") {
  user2 = undefined;
}

if (typeof user3 === "undefined") {
  user3 = undefined;
}

if (typeof password1 === "undefined") {
  password1 = undefined;
}

if (typeof password2 === "undefined") {
  password2 = undefined;
}

if (typeof password3 === "undefined") {
  password3 = undefined;
}

module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
};
