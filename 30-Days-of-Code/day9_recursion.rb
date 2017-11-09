#!/bin/ruby

def factorial(n)
    # Complete this function
    return n if n < 3
    return n * factorial(n - 1)
end

n = gets.strip.to_i
result = factorial(n)
puts result