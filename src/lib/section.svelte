<script>
    export let sectionHead = 'Head'
    export let paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta sed temporibus accusamus excepturi voluptatibus, a dolorum magni ratione illum error doloremque dicta fugiat assumenda."
    export let id = '';
</script>

<section {id} class="section-info col-span-4 text-Snow bg-Onyx-Color my-10 p-3">
    <h2 class="font-Expose md:text-3xl text-2xl my-3">{sectionHead}</h2>
    <p class="font-Bespoke md:text-lg text-md max-w-xl">
      {@html paragraph}
    </p>

    <slot/>
</section>