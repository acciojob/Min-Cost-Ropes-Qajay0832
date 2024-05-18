function mincost(arr)
{
	arr.sort((a,b)=>a-b)
	let totalcost=0;
	while(arr.length>1){
		const min1=arr.shift();
		const min2=arr.shift();
		let cost=min1+min2;
		totalcost+=cost;
		arr.push(cost);
	arr.sort((a,b)=>a-b)
	}
	return totalcost;
	
	
	
//write your code here
// return the min cost
  
}
module.exports=mincost;
