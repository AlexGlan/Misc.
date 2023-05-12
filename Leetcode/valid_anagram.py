class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        """Check if two strings are anagrams of each other"""
        if len(s) != len(t):
            return False
        return sorted(s) == sorted(t)