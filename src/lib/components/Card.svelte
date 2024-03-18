<script lang="ts">
  export let title;
  export let subtitle;
         
</script>

<div class="flex flex-col items-center justify-center md:px-10 min-w-full bg-red-500a">
  <div class="shadow border-1 border-classy-black min-w-full lg:min-w-fit lg:w-schedule">
     <!-- HEADER -->
    <div class="pl-4 pr-2 py-2 bg-classy-black text-cardBg">
        <h5 class="bg-green-500a text-3xl font-bold tracking-tight dark:text-white font-rancho">
            {title}
        </h5>
        {#if subtitle != undefined}
        <p class="bg-red-500a pl-1 text-sm tracking-tight text-gray-400a dark:text-white">
          {subtitle}
        </p>
        {/if}
    </div>
     <!-- END HEADER -->
    <div class="bg-cardBg p-4 min-w-full">
      <slot />
    </div>
  </div>
</div>
