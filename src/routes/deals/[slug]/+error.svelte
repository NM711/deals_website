<script>
    import { page } from '$app/stores'
</script>

<header class="col-span-4 h-screen flex justify-center items-center font-Expose text-Snow md:text-5xl text-4xl text-center">
    <h1>ERROR: Could not retrieve items there has been a 
        <br>
    {$page.status}: {$page.error.message}
    </h1>
</header>