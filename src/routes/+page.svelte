<script>
  import data from '../data.json';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import DrinkCounter from '$lib/components/DrinkCounter.svelte';
  import Card from '$lib/components/Card.svelte';
  
  import {faMartiniGlassCitrus, faMartiniGlassEmpty} from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa';

</script>


<!-- <PageTitle name="Main"/> -->
<div class="flex flex-col mt-10">
  <Card title="Drinkräknare">
    <DrinkCounter />
  </Card>
</div>
