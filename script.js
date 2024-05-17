function mincost(arr)
{ 
	let sum=0;
	arr=arr.sort()
	const arr2= arr.map((e)=>{
		return sum+=e;
	})
	sum=0;
	arr2.map((e)=>{
		sum+=e;
	})
	return sum
	
	
//write your code here
// return the min cost
  
}

module.exports=mincost;
