# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

#Pseudocode:

# Create method called 'odd_or_even' that will determine if a number is odd or even.
# Use a parameter holding one value called 'number' (since it will hold a number).
# Use conditional statements methods '.odd?' and '.even?' to determine if the number is odd or even. Return a string interpolation based on what condition is met,
    # First condition checks if its a number.
    # Second condition checks if its a Float value.
    # Third condition checks if its odd number.
    # Fourth returns if its an even number.



def odd_or_even (number)
    if !number.is_a? Numeric
        return "Invalid argument. '#{number}' is not a number."
    elsif
        number.is_a? Float
        return "#{number} is a Float value."
    elsif number.odd?
        return "#{number} is odd."
    else
        return "#{number} is even."
    end
end

p odd_or_even(reposts1) #output: "7 is odd."
p odd_or_even(reposts2) #output: "42 is even."
p odd_or_even(reposts3) #output: "221 is odd."
p odd_or_even(4.6) #output: "4.6 is a Float value."
p odd_or_even('number') #output: "Invalid argument. 'number' is not a number."




# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudocode
# Create a method called 'vowel_deleter' that will remove all vowels from a string.
# Use a parameter called 'string' that will hold the string.
# Use conditional to check if argument is a string value.
# If value is a string, use the 'delete' method on the 'string' value.
    # Pass all the vowels as an argument to the 'delete' method, both lowercase and uppercase.



def vowel_deleter (string)
    if string.is_a? String
    string.delete "aeiouAEIOU"
    else
        "'#{string}' is not a string value."
    end
end

p vowel_deleter(beatles_album1) # output: "Rbbr Sl"
p vowel_deleter(beatles_album2) # output: "Sgt Pppr"
p vowel_deleter(beatles_album3) # output: "bby Rd"
p vowel_deleter(5) # output: "'5' is not a string value."






# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudocode
# Create a method called 'palindrome_checker' that checks to see if a string is a palindrome
# Use a parameter called 'string' that will hold the tested string
# Use conditional statements, return a string interpolation based on what condition is met
    # First condition checks to see if the object is a string.
    # Second uses a equality operator to determine if it is a palindrome. It also uses 'downcase' to avoid any errors based on capitlization.
    # Third will be an else that will determine it is not a palindrome.


def palindrome_checker (string)
    if
        !string.is_a? String
        "Invalid arugment, '#{string}' is not a string."
    elsif
        string.downcase == string.downcase.reverse
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome"
    end
end

p palindrome_checker(palindrome_tester1) # output: "Racecar is not a palindrome"
p palindrome_checker(palindrome_tester2) # output: "LEARN is not a palindrome"
p palindrome_checker(palindrome_tester3) # output: "Rotator is a palindrome"
p palindrome_checker(1) # output: "Invalid arugment, '1' is not a string."

