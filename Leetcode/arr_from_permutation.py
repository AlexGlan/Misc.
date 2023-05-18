class Solution:
    def buildArray(self, nums: list[int]) -> list[int]:
        """Builds a new array using the values from zero-based permutation based on their indices"""
        ans = []
        counter = 0
        while counter < len(nums):
            ans.append(nums[nums[counter]])
            counter += 1
        return ans