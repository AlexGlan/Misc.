from functools import reduce

class Solution:
    def romanToInt(self, s: str) -> int:
        """Converts roman numeral to an integer"""
        roman_numerals = {
            "I":  1,
            "IV": 4,    
            "V":  5,
            "IX": 9,
            "X":  10,
            "XL": 40,
            "L":  50,
            "XC": 90,
            "C":  100,
            "CD": 400,
            "D":  500,
            "CM": 900, 
            "M":  1000
        }
        roman_arr = list(s)

        current_iteration = 0
        for index, num in enumerate(roman_arr):
            current_iteration += 1
            if current_iteration == len(roman_arr):
                break
            elif roman_numerals[num] < roman_numerals[roman_arr[index + 1]]: 
                roman_arr[index] = roman_arr[index] + roman_arr.pop(index + 1)

        int_arr = [roman_numerals[num] for num in roman_arr]
        return reduce(lambda x, y: x + y, int_arr)