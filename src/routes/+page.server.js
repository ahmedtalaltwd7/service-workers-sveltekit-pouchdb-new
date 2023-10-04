export const load = async ({ fetch }) => {
const results= async () => {
    const title = 'List of available products';
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
	const results = await response.json();
  //  console.log(results);
	return  { title, results };
}

const results2= async () => {
    const title = 'List of available products';
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
	const results2 = await response.json();
   // console.log(results2);
	return  { title, results2 };
}

return {
    results: results(),
    results2: results2(),
     }; 
	
};