class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        let map = {};
        for(let i = 0; i < strs.length;i++){
            let x = strs[i].split("").sort().join("")
            if(!map[x]){
                map[x] = [];
            }
            map[x].push(strs[i]);

            
        }
        return Object.values(map);
    }
}
