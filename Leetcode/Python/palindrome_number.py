class Solution:
    def isPalindrome(self, x: int) -> bool:
        """Check if the given integer is a palindrome."""
        return True if str(x) == "".join(reversed(str(x))) else False