class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        let map = {};
        for(let i = 0; i < strs.length;i++){
            let x = strs[i].split("").sort().join("")
            //if function check for the key to be same and then later add the item itself to a seperate list in the array, and if the key matches it skips the if fucntion and dirfectly add the list item to the array.
            if(!map[x]){
                map[x] = [];
            }
            map[x].push(strs[i]);

            
        }
        return Object.values(map);
    }
}
