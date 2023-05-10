<script>
  import ProdCard from "$lib/prodCard.svelte";
  import Button from "$lib/buttons/button.svelte";
  import { goto } from "$app/navigation";
  import Dropdown from "$lib/buttons/dropdown.svelte";
  export let data;
  $: ({ data, index, search, slug, brand } = data);

  let endReached = false;

  $: {
    if (data.length === 0) {
      endReached = true;
    } else endReached = false;
  }
</script>

<header class="col-span-4 mt-36 text-center font-Expose">
  <h1 class="md:text-6xl text-5xl text-yellow-500 break-words">{slug.replace("_", " ").toUpperCase()}</h1>
    {#if search.length > 0}
        <h2 class="text-3xl text-yellow-500 my-3">Searched: {search}</h2>
    {/if}
  <h2 class="text-2xl text-white my-5 font-Bespoke">Page Number {index}</h2>
</header>

<section class="bg-black col-span-4 p-3">
  <h2 class="text-Snow md:text-4xl text-3xl text-center font-Expose">
    Filters
  </h2>

  <div class="flex justify-center items-center">
    <Dropdown
      labelTitle="Brands/Stores"
      first="HP"
      second="Acer"
      third="Lenovo"
      fourth="Newegg"
      on:change={(ev) => goto(`?index=${index}&brand=${ev.target.value}&s=`)}
    />
  </div>
</section>
<!-- prods go here when loaded dynamically -->

{#if endReached}
  <h2 class="col-span-4 text-center text-Snow font-Expose md:text-5xl text-4xl">There are no more products!</h2>
{/if}

{#each data as { brand, productName, productImage, originalProductPrice, currentProductPrice, linkToProduct }}
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
        buttonFont="font-Bespoke"
        buttonSize="fit"
        on:click={() => goto(`?index=${index - 1}&brand=${brand}&s=${search}`)}
      />
    </span>
  {/if}
  {#if !endReached}
    <span class="mx-3">
      <Button
        buttonType="ghost"
        buttonText="Next Page {index + 1}"
        buttonFont="font-Bespoke"
        buttonSize="fit"
        on:click={() => goto(`?index=${index + 1}&brand=${brand}&s=${search}`)}
      />
    </span>
  {/if}
</span>
