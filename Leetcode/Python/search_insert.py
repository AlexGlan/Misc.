class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        """Searches for the target value in a sorted list and returns its index
            Or the index where it should be inserted."""
        if target in nums:
            return nums.index(target)
        else:
            nums.append(target)
            return sorted(nums).index(target)