<script>
    import { fly, scale } from "svelte/transition";
    import { quadOut } from "svelte/easing";

    export let open;
    export let links;
</script>

{#if open}
    <div transition:fly={{ y: -10, duration: 200 }}>
        <div
            class="menu bg-cardBg text-gray-800 text-center text-2xl flex flex-col lg:flex-row lg:justify-center lg:space-x-10 lg:text-lg"
        >
            {#each links as link, i (link)}
<a href={link.link} class="pb-3 hover:underline" on:click={()=>{console.log("hej")}}>
    {link.name}
</a>
            {/each}
        </div>

        <div
            class="bar border-classy-black border-b-1 lg:hidden"
            transition:scale={{ duration: 350, easing: quadOut, opacity: 1 }}
        />
    </div>
{/if}

<!-- <style> -->
<!--     .menu { -->
<!--         letter-spacing: 0.15em; -->
<!--         padding: 1em; -->
<!--         padding-top: 0; -->
<!--     } -->
<!-- </style> -->
