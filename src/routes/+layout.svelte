<script>
    import "../app.css";
    import Nav from '$lib/nav.svelte'
    import Footer from "$lib/footer.svelte";
</script>

<Nav
textOrLogo="Deal Gatherer"
navFont="font-Expose"
itemHref1="/"
itemHref2="/about"
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
		background: #232526; /* fallback for old browsers */
  		background: -webkit-linear-gradient(to right, #232526, #414345); /* Chrome 10-25, Safari 5.1-6 */
  		background: linear-gradient(to right, #232526, #414345); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>