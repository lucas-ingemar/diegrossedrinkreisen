<script>
    import "../app.css";
    import Menu from '$lib/components/Menu.svelte';
    import { Hamburger } from 'svelte-hamburgers';
    import { navigating } from '$app/stores';

    let links = [
      {name: "Drinkar", link: "/"},
      {name: "Schema", link: "/schedule"},
    ];
    let innerWidth = 0
    
    let wantOpenMenu = false;
    $: openMenu = innerWidth >= 1024 || wantOpenMenu
    $: if ($navigating) (() => {
      wantOpenMenu = false;
    })();    

</script>

<svelte:window bind:innerWidth />

<header class="bg-cardBg">
    <nav class="container mx-auto p-3">
        <div class="flex justify-center items-center">
            <div class="w-1/6 bg-red-500a lg:hidden" />
            <p class="text-3xl text-center md:text-4xl w-4/6 bg-blue-500a font-rancho text-gray-800">Den Stora Drinkresan</p>
            <div class="w-1/6 bg-red-500a text-right lg:hidden">
                <Hamburger --color="#4c4637" --padding=0 bind:open={wantOpenMenu}/>
            </div>
        </div>
    </nav>
</header>

<Menu links={links} bind:open={openMenu} />

<slot />
