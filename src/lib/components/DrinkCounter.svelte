<script lang="ts">
  import {faMartiniGlassCitrus, faMartiniGlassEmpty} from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa';

  const tempPerc = Math.round(100*4/90)
  
</script>

<div class="w-full bg-background rounded-full dark:bg-gray-700 mb-4">
  <div class="bg-twisted-green text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: {tempPerc}%"> {tempPerc}%</div>
</div>

<div class="flex flex-wrap w-full">
  {#each {length: 90} as _, i}
    {#if i <= 3}
      <Fa class="text-gray-800 m-0.5" icon={faMartiniGlassCitrus} />
    {:else}
      <Fa class="text-gray-400 m-0.5" icon={faMartiniGlassCitrus} />
    {/if}
  {/each}
</div>
