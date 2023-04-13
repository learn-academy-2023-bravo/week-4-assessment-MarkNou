# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP means that everything is an object. Since in OOP everything is an object, methods can be applied and serve as functions. Functional programming does have objects as well, but it is only a component of the language. Functional programming relies on functions to execute actions, with arguments as inputs. 


Researched answer: OOP is based on the concepts of using objects which are instances of classes. Classes encapsulates data and methods performed on that data. Functional programming focuses on functions and code blocks that takes inputs and returns outputs. One of the major differences is that OOP focuses on interactions between objects, and functional programming focuses on functions and their composition.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: A Float is a datatype in Ruby that consist of a decimal point, whereas an Integer is a whole number. Both are numeric values but differ in what methods can be called on them. An example is the .odd? or .even? method; decimals are neither so they can only be used on Integers.

Examples of Float values: 4.5, .34, 5.0
Examples of Integer values: 45, 34, 5


Researched answer: Floats and Integers in ruby are both classified as numeric data types. A Float is a floating-point number that means they include a value on either side of a decimal. They can be fractions, but they can also represent whole numbers such as '5.0'. Integers are whole numbers. The difference is Ruby reads integers in binary, and reads Floats in scientific notation.

1. Ruby has an implicit return. What does that mean?

Your answer: An implicit return in Ruby means that the user nor computer needs an actual 'return' statement to produce an output. Whereas in JavaScript, without a 'return' or 'alert', nothing will be returned. In a method, Ruby will always return the last implicit return if a condition is met.

Here's an example:

def addition (num1, num2)
    num1 + num2
end

This method will return the sum of num1 and num2 without having to tell it to, although you could use return if you'd like.



Researched answer: An implicit return is a behavior included in Ruby that returns a value of the last evaluate expression in a method or block. This is used to simplify code by reducing the need for a return statement. This feature adds to Ruby's philosophy of 'syntactical sugar'.



1. What is a block in Ruby?

Your answer: Blocks are objects like everything else in Ruby, and can be held in a variable. Blocks can hold all different types of data and methods within them. Blocks are similar to function blocks in JavaScript, they have data and an action being applied. Similar to JavaScript, blocks can be passed into other methods just as arguments can in functions.

Example of a block:

def block_one = do |x|
    x + 2
end

Researched answer: A Block is a piece of code in Ruby that can be passed into methods as an arguments. They can be used as a behavior to a method or to iterate over data. A block's syntax is defined with '{}' or between a 'do' and 'end'. Blocks are an important feature of Ruby allowing for flexible code.

1. How do you extract a value in a Ruby hash?

Your answer: Similar to how JavaScript uses dot notation to retrieve information, Ruby can extract data from hashes with square bracket notation. Using square bracket notation, you can extract specific key:value pairs anywhere within a hash. You can also assign key:value pairs to another variable making it an instance.

Example:

baseball_teams = {city: 'San Diego', team: 'Padres'}

p baseball_teams[:city] output: 'San Diego'
p baseball_teams[:team] output: 'Padres'


Researched answer: By first calling the object name followed by square brackets, you can extract certain keys and their values from a hash. There are two different ways to do this. Depending on how the hash is written, it can be extracted by 'object_name[:key]', or if the hash uses rocket arrow syntax, you can use 'object_name["key"]

## Looking Ahead: Terms for Next Week

1. RSpec: RSpec is a testing framework for Ruby to write automated test. It allowed developers to specify expected behavior and make sure the code works. This is similar to Jest in JavaScript.

2. Test-driven development: Also known as TTD, TTD is a software development method where test are written before the code. It consist of a red phase, green phase, and a refactor phase. 

3. PostgreSQL: Also known just as postgre, postgre is an open source object relational database management system. Postgre supports many languages and has many third-party libraries available for use. Its commonly used for web development, data warehousing, and business intelligence applications.

4. CRUD: CRUD stands for create, read, update, and delete. It is the basic functions for database management and web development to manipulate data.

5. HTTP: HTTP stands for Hypertext Transfer Protocol. Its a protocol for communication between clients and servers on the web. It allows users to interact with websites via their browser by sending information back and forth to a server.
