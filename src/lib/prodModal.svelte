<script>
    import { goto } from "$app/navigation"
    import Button from "$lib/buttons/button.svelte"
    export let isHidden = true
    export let productName;
    export let originalProductPrice;
    export let currentProductPrice;
    export let productImage;
    export let brand;
    export let linkToProduct;
</script>
{#if isHidden}
<div class="flex justify-center items-center bg-black bg-opacity-75 {isHidden} w-full h-full fixed inset-0 z-[120]">
    <div class="prodModal flex flex-col justify-center bg-Matte-Black md:w-[75vw] w-[85vw] h-fit rounded-md shadow-md shadow-Onyx-Color overflow-x-hidden">
        <button on:click={() => isHidden = !isHidden} class="flex justify-end text-Snow hover:text-yellow-500 duration-150 ease-in-out cursor-pointer p-1">
            <ion-icon class="md:text-4xl text-3xl" name="close-sharp"></ion-icon>
        </button>
        <header class="text-center font-Bespoke text-Snow my-3">
            <h2 class="md:text-2xl text-lg font-Expose p-3">{productName}</h2>
            <h2 class="text-2xl font-Expose text-yellow-500">Brand: {brand}</h2>
            <h2 class="text-lg my-1 underline decoration-4 decoration-yellow-500">Previous Price: {originalProductPrice}</h2>
            <h2 class="text-2xl my-1 underline decoration-4 decoration-yellow-500">Current Price: {currentProductPrice}</h2>
        </header>
            <img alt={productName} src={productImage} class="md:w-52 w-40 m-auto"/>
        <span class="my-3 mx-auto">
            <Button
            buttonText="See Product"
            buttonSize="fit"
            buttonFont="font-Bespoke"
            on:click={() => goto(linkToProduct)} 
            /> 
        </span>
    </div>
</div>
{/if}
