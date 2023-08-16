class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        """Returns true if any value appears at least twice in the array"""
        unique_nums = set()
        for num in nums:
            if num in unique_nums:
                return True
            unique_nums.add(num)
        return False