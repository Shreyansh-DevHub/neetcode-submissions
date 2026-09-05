class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return '';
        let size = [];
        let list = [];
        for(let s of strs){
            size.push(s.length);
        }
        for(let sz of size){
            list.push(String(sz), ',');
        }
        list.push('#', ...strs);
        return list.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        let size = [];
        let list = [];
        let i = 0;
        while(str[i] !== '#'){
            let j = i;
            while(str[j] !==','){
                j++;
            }
            size.push(parseInt(str.substring(i, j), 10));
            i = j + 1;
        }
            i++;
            for (let sz of size) {
                list.push(str.substr(i, sz));
                i += sz;
            }
        return list;
    }
    
}
