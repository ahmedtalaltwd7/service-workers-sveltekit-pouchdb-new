<script>

    
	//const Componentn = data.results.name;


    
    import { onMount } from 'svelte';
    
   
    

onMount(async () => {
    window.global = window
    const { greet } = await import('../lib')
    greet() 
})


    export let data;
	//const title = data.title;
	const a = data.results.results.results;  
    const b = data.results2.results2.results;
   console.log(a);
   console.log(b);
   
</script>

<div class="twd">twd</div>
<div class="twd2">twd2</div>

<h1><a href="/api">api</a></h1>

<h1>result</h1>

{#each a as result2}
 <li>
   <a href={result2.url}> {result2.name}  </a> 
 </li>     
{/each}


<hr>

<h1>result2</h1>
    
    {#each b as result2}
    <li>
    <a href={result2.url}> {result2.name}  </a> 
    </li>     
    {/each}






<style>
   :global(body) {
        background-color: orchid;
    }
      
.twd2{
    visibility: hidden;
    
}

    @media (max-width: 800px) {
        /* removed body selector */
    
            :global(body) {
                background: rgb(0, 0, 0, 0.5);
            }
       .twd {
        width: 100%;
           background-color: red;
       }
      
    }
    @media (max-width: 400px) {
        .twd {
            display: none;
        }
        .twd2 {
           visibility: visible;
        }


    }
    
</style>