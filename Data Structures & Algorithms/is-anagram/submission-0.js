class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let x = s.split("").sort().join();
        let y = t.split("").sort().join();

        if(s.length != t.length){
            return false;
        }
        else if(x == y){
            return true

        }
        else{
            return false;
        }
    }
}
