# Date: 27 / 01 / 2022

# Recursion

## What is recursion

A **Process** (a function in our case) that **calls itself**

### What should you care? why should you know this

- it's EVERYWHERE!
- it's use all the time

## The Call Stack

- it's a **stack** Data structure - we'll talk about later!
- Any time a function is invoked it is placed **(pushed)** on the top of the call stack
- When javascript see the **return** keyword or when the function ends, the compiler will remove **(pop)**

### Why do i Care?

- When we write recursive functions, we keep pushing new functions onto the call stack!

## Our first Recursive Function

### How recursive function work

invoke the **same** function with a different input until you reach your base case!

## Base case

the condition were the recursion ends.**This is most important to understand**
