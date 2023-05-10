<script>
    import Section from "$lib/section.svelte";
</script>

<header class="col-span-4 mt-36">
    <h1 class="text-center font-Expose text-yellow-500 md:text-6xl text-5xl">FAQ</h1>
</header>

<Section id="api_data" sectionHead="How is The API Data Gathered?"
paragraph="The api data is collected through the process of web scraping, 
which is why some price information may be innacurate or some links may not point to the actual product but rather the store."/>
<div class="col-span-4 border-2 border-yellow-500 border-dashed"></div>

<Section id="privacy" sectionHead="Does This Website Collect User Data?"
paragraph="This website does not collect any user data but,
if you want to access the api you need to provide an email so we can tie your key to it."
/>
<div class="col-span-4 border-2 border-yellow-500 border-dashed"></div>

<Section id="terms" sectionHead="What are The Terms of Use and Conditions?"
paragraph="
You cannot exploit or abuse the api in any way, 
we have the right to revoke your key at any time and lastly we also have the right to
stop updating the api data at any time"
/>
