// We can use the Switch instead of multiple if..else statements, it can help us simplify our code a bit
// 'case' statements compare to expression in switch(exp)
// We use 'break' statements to exit our of each case
// The 'default' statement is for no match

switch (expression) {
  case expression1:
    // Statement(s)
    break; // (required before the next case so it is able to continue)
  case expression2:
    // Statement(s)
    break;
  default:
    // If no other case is matched
    // Statement(s)
    break;
}

// The 'default' statement can actually be placed anywhere, it doesn't have to be at the bottom of the switch

// Something we're allowed to do with Switch statements, we're allowed to have multiple case statements. If expression matches any case, then the statement(s) are executed. We do this when we want to match up an expression on many different types of cases.
// Multiple case statements, and what happens when we forget a 'break'?

switch (expression) {
  case expression1:
  case expression2:
  case expression3:
    // Statement(s)
    break;
  default:
    break;
}

// Switch statements do what's called a 'Strict Comparison'
// Strict Comparisons mean the type and value must match in order for the expresion to match to one of the case statements

// Each case statement is NOT a block, this should be obvious
// In other words, a Switch statement is a block, but **_each_** case statement is not a block
// If we want a case statement to have a block, we must do so by wrapping in braces

switch (expression) {
  case expression1: {
    // Statement(s)
    break;
  }
}

// By wrapping a block of code in braces, any variable declared within that block is only visible within the block, and is released once the block ends.

// Switch statements help with readability
// More efficient than multiple if..else statements
// Remember: be careful with block scope