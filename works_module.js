const path=require("path")

// 1. Parse a URL string: Write a Node.js program that takes a URL (https://example.com/products?category=books&id=10) and extracts hostname, pathname, and query parameters separately.

// let parses=path.parse("https://example.com/products?category=books&id=10")
// console.log("Hostname:",parses.hostname);
// console.log("pathname:",parses.pathname);
// console.log("querypara:",parses.querypara);

// 2.Format a URL object: Given an object { protocol: 'https', hostname: 'myapp.com', pathname: '/login', query: { ref: 'google' } }, use the url.format() method to build a complete URL.

// let formated=path.format({ protocol: 'https', hostname: 'myapp.com', pathname: '/login', query: { ref: 'google' } })
// console.log(formated)

// 4. URL Validation: Write a function that checks whether a given string is a valid URL or not.



// function validUrl(string) {
//   try
//   {
//     new url.URL(string);
//     return true;
//   }
//    catch (error) 
//   {
//     return false;
//   }
// }
// console.log(validUrl("https://example.com/products?category=books&id=10"));


// 5. URL Search Params: Given a URL, extract all query parameters and print them in key-value pairs.

// let parses=path.parse("https://example.com/products?category=books&id=10")
// console.log(parses)

// 6.Dynamic URL Builder: Take user input (protocol, hostname, pathname, query) and build a complete URL.


// 7. Short Link Generator (basic): Convert a long URL into a short one (just return the hostname + a random string).


// 8. File Path Joiner: Write a program that joins folder paths like 'users', 'vishnu', 'documents' into a single absolute path.


const segments = ['users', 'vishnu', 'documents'];

let joinedPath = path.join(segments);

console.log('Joined Path:', joinedPath);

// To make it absolute, combine with a root
// const absolutePath = path.resolve(...segments);
// console.log('Absolute Path:', absolutePath);





