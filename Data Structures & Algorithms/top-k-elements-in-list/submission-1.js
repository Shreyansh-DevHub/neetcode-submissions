class Solution {
    topKFrequent(nums, k) {
        const count = {}
        // created array for sorting the list to put the similar values in it
        for(const num of nums){
        count[num] = (count[num]|| 0)+1;
    
        }
        //maping values(frequency , index)
        const array = Object.entries(count).map(([num,freq])=>[freq , parseInt(num)])
        array.sort((a,b) => b[0] - a[0]); //order sorting
        return array.slice(0,k).map((pair) => pair[1]); //arranging to pairs from highest frequency to lowest

        }
}

