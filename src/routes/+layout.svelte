<script>
    import "../app.css";
    import Nav from '$lib/nav.svelte'
    import Footer from "$lib/footer.svelte";
</script>

<Nav
textOrLogo="Deal Gatherer"
navFont="font-Expose"
itemHref1="/"
itemName2="FAQ"
itemHref2="/faq"
/>

<section class="grid grid-cols-4 h-full gap-3">
    <slot/>
</section>

<Footer/>

<style>
    :global(*){
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :global(html){
        background: radial-gradient(circle, #333333 0%, #1a1a1a 100%);
        background-color: #1A1A1A;
        scroll-behavior: smooth;
    }
    :global(ion-icon){
        visibility: visible;
    }
</style>