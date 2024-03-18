<script>
  import data from '../../data.json';
  import DrinkView from '$lib/views/DrinkView.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';

</script>


<PageTitle name="Drinkar"/>

<div class="lg:p-4 lg:-m-2 flex space-between-4 flex-wrap w-screen">
  {#each data as d, idx}
    <DrinkView drinkData={d}/>
  {/each}
</div>
