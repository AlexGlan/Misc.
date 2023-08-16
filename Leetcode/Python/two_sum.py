class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        """Finds the indices of two numbers in a list that add up to the target value"""
        next_val = 1
        for i in nums:
            for j in nums[next_val:]:
                if i + j == target:
                    return [nums.index(i), nums.index(j, next_val)]
            next_val += 1
        return []