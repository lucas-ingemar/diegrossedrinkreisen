<script>
  import data from '../data.json';
  import DrinkView from '$lib/views/DrinkView.svelte';
</script>

<div class="p-4 -m-2 flex space-between-4 flex-wrap w-screen">
  {#each data as d, idx}
    <DrinkView drinkData={d}/>
  {/each}
</div>
