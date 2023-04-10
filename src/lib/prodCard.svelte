<script>
    export let productName;
    export let productImage;
    export let brand;
    export let currentProductPrice;
</script>

<section id="prodThumb" class="bg-black md:col-span-1 col-span-4 mx-1 overflow-hidden h-76 text-white flex flex-col justify-center items-center text-center">
    <header>
        <h2 class="font-General-Sans">{productName}</h2>
        <h2 class="font-Gambetta">Current Price: {currentProductPrice}</h2>
    </header>
    <img class="w-52 p-3" alt={productName} src={productImage}>
    <footer class="font-General-Sans">
        <h2>Brand: {brand}</h2>
    </footer>
</section>