<!-- here goes the api docs -->
<script>
  import Section from "$lib/section.svelte";
  import Button from "$lib/buttons/button.svelte";
  import { onMount } from "svelte";
  $: value = "";
</script>

<header class="col-span-4 mt-36 mb-24 bg-Onyx-Color p-5">
  <h1 class="text-center font-Expose text-yellow-500 md:text-6xl text-5xl">
    Deal Gatherer Api
  </h1>
</header>

<Section
  sectionHead="How Can You Get Access?"
  paragraph="Getting access to the api is easy, all you need to do is submit your email
    below and your key will be sent to this. Your email is necessary to
    authenthicate you and send you the key, and also to revoke your access to the api if you misuse it."
>
  <form class="p-3 flex flex-col" target="_blank" method="post" action="http://localhost:3000/api/create_key">
    <label for="emailInput" class="font-Expose text-2xl my-3">
        Email
      <br />
      <input
        id="emailInput"
        name="userEmail"
        type="email"
        class="bg-orange-500
        focus:outline-orange-500
        hover:bg-orange-900
        duration-150
        shadow-md
        shadow-Onyx-Color
        ease-in-out
        text-xl
        w-fit
        h-fit
        p-2
        rounded-md
        placeholder-Snow
        font-Bespoke"
        placeholder="Enter Email"
        required
      />
    </label>

    <Button
      type="submit"
      buttonText="Submit"
      buttonStyle="success"
      buttonType="outline"
      buttonFont="font-Bespoke"
      buttonSize="md"
      buttonShapeType="rounded"
    />
  </form>
</Section>