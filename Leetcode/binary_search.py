class Solution:
    def search(self, nums: list[int], target: int) -> int:
        """Search for the index of a target value in a sorted list using binary search"""
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if target == nums[mid]:
                return mid
            elif target > nums[mid]:
                left = mid + 1
            else:
                right = mid - 1
        return -1