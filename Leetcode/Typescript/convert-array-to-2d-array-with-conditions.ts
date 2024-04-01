// Optimized solution:
function findMatrix1(nums: number[]): number[][] {
    const ans: number[][] = [[]];

    for (let i = 0; i < nums.length; i++) {
        
        for (let j = 0; j < ans.length; j++) {
            if (!ans[j].includes(nums[i])) {
                // Populate 1st row
                ans[j].push(nums[i]);
                break;                
            } else if (j === ans.length - 1) {
                // Create new row
                ans.push([nums[i]]);
                break;
            }
        }
    }
    
    return ans;
};

// Hash map solution (bad performance)
type HashMap = { [key: number]: number }

function findMatrix2(nums: number[]): number[][] {
    const ans: number[][] = []; 
    const numMap: HashMap = {};
    // Store frequency of elements
    nums.forEach(num => { numMap[num] = ++numMap[num] || 1; });
    let numOfRows: number = Math.max(...Object.values(numMap));

    while (numOfRows > 0) {
        // Create empty rows
        ans.push([]);
        numOfRows--;
    }

    for (let num of Object.keys(numMap).map(Number)) {

        while(numMap[num] > 0) {
            // Populate rows
            ans[numMap[num] - 1].push(num);
            numMap[num]--;
        }
    }
    
    return ans;
};