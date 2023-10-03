<script>




    
    import { onMount } from 'svelte';
    
   
    

onMount(async () => {
    window.global = window
    const { greet } = await import('../lib')
    greet() 
})
  
    </script> 