<script>
    import Button from "$lib/buttons/button.svelte"
    export let isHidden = true
    export let productName;
    export let originalProductPrice;
    export let currentProductPrice;
    export let productImage;
    export let brand;
</script>
{#if isHidden}
<div class="flex justify-center items-center bg-black bg-opacity-75 {isHidden} w-full h-full fixed inset-0 z-10 my-16">
    <div class="prodModal flex flex-col justify-center bg-Matte-Black w-[75vw] h-fit rounded-md">
        <button on:click={() => isHidden = !isHidden} class="flex justify-end text-3xl text-Snow hover:text-yellow-500 duration-150 ease-in-out cursor-pointer p-1">
            <ion-icon name="close-sharp"></ion-icon>
        </button>
        <header class="text-center font-General-Sans my-3">
            <h2 class="text-2xl text-Snow">{productName}</h2>
            <h2 class="text-2xl text-Snow">Brand: {brand}</h2>
            <h2 class="text-xl text-yellow-500 my-1">Previous Price: {originalProductPrice}</h2>
            <h2 class="text-xl text-yellow-500 my-1">Current Price: {currentProductPrice}</h2>
        </header>
            <img alt={productName} src={productImage} class="w-52 m-auto"/>
        <span class="my-3 mx-auto">
            <Button
            buttonText="See Product"
            buttonSize="fit"
            /> 
        </span>
    </div>
</div>
{/if}