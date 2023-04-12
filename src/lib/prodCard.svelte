<script>
    import ProdModal from "$lib/prodModal.svelte";
    export let productName;
    export let productImage;
    export let brand;
    export let currentProductPrice;
    export let originalProductPrice;
    let isHidden = false
    function cardClick(){
        isHidden = !isHidden
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- i know i should use a button but like, i need this -->
<section on:click={cardClick} id="prodThumb" class="bg-black md:col-span-1 col-span-4 mx-1 overflow-hidden h-76 text-white flex flex-col justify-center items-center text-center rounded-md hover:bg-opacity-25 ease-in-out duration-200 hover:cursor-pointer">
    <header class="m-3">
        <h2 class="font-General-Sans">{productName}</h2>
        <h2 class="font-Gambetta text-yellow-500">Current Price: {currentProductPrice}</h2>
    </header>
    <img class="w-52 p-3" alt={productName} src={productImage}>
    <footer class="font-General-Sans">
        <h2>Brand: {brand}</h2>
    </footer>
</section>

{#if isHidden}
    <ProdModal
    {productName}
    {brand}
    {originalProductPrice}
    {currentProductPrice}
    {productImage}
    />
{/if}