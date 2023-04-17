<script>
    import ProdCard from '$lib/prodCard.svelte';
    import Button from '$lib/buttons/button.svelte'
    import { goto } from '$app/navigation'
    export let data;
    $: ({ data, index, slug } = data)
    // let headerSlug = slug.split('')[0].toUpperCase()
</script>

<header class="col-span-4 my-36 text-center font-General-Sans">
    <h1 class="md:text-6xl text-5xl text-yellow-500">Deals</h1>
    <h2 class="text-3xl text-white my-5">{slug.toUpperCase()}</h2>
    <h2 class="text-3xl text-white my-5">Page Number {index}</h2>
</header>
<!-- prods go here when loaded dynamically -->
{#each data as {brand, productName, productImage, originalProductPrice, currentProductPrice, linkToProduct}}
    <ProdCard
    {brand}
    {productName}
    {productImage}
    {originalProductPrice}
    {currentProductPrice}
    {linkToProduct}
    />
{/each}

<span class="col-span-4 flex justify-center my-3">
    
    {#if index - 1 !== -1}
    <span class="mx-3">
        <Button
        buttonType="ghost"
        buttonText="Previous Page {index - 1}"
        buttonFont="font-General-Sans"
        buttonSize="fit"
        on:click={() => goto(`?index=${index - 1}`)}
        />
    </span>
    {/if}

    <span class="mx-3">
        <Button
        buttonType="ghost"
        buttonText="Next Page {index + 1}"
        buttonFont="font-General-Sans"
        buttonSize="fit"
        on:click={() => goto(`?index=${index + 1}`)}
        />
    </span>
</span>