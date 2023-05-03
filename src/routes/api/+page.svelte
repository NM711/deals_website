<!-- here goes the api docs -->
<script>
  import Section from "$lib/section.svelte";
  import Button from "$lib/buttons/button.svelte";
</script>

<header class="col-span-4 mt-36 md:mb-10 my-16">
  <h1 class="text-center font-Expose text-yellow-500 md:text-6xl text-5xl">
    Deal Gatherer Api
  </h1>
</header>

<Section
  sectionHead="How Can You Get Access?"
  paragraph="Getting access to the api is easy, all you need to do is submit your email
    below and your key will be sent to it. Your email is necessary to
    authenthicate you and send you the key, and also to revoke your access to the api if you misuse it.">
  <form class="p-3 flex flex-col w-fit" target="_blank" method="post" action="http://localhost:3000/api/create_key">
    <label for="emailInput" class="font-Expose text-2xl my-3">
        Email
      <br />
      <input
        id="emailInput"
        name="userEmail"
        type="email"
        class="
        bg-Snow
        border-2
        border-orange-500
        focus:outline-orange-500
        focus:text-orange-500
        hover:bg-orange-900
        hover:placeholder-Snow
        duration-150
        shadow-md
        shadow-Onyx-Color
        ease-in-out
        text-xl
        w-fit
        h-fit
        p-2
        rounded-md
        placeholder-orange-500
        font-Expose"
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

<div class="col-span-4 border-2 border-yellow-500 border-dashed"></div>

<Section sectionHead="Api Endpoints and Queries" 
paragraph={`When you fetch the api, you do not need to include ?index= or ?brand= because these default to 0 and any.
But you do need to include the API key or else you simply wont be authorized to use it. You can include the key either with ?key=<span class="text-yellow-500">yourkeyhere</span> or &key=<span class="text-yellow-500">yourkeyhere</span>,
the differences between ? and & is that ? goes at the very beginning if there is no existing querys yet and & goes after to chain the querys.`}>
  <div class="my-3">
    <p class="font-Expose md:text-lg text-md text-yellow-500">Get All Deals</p>
    <p class="font-Bespoke md:text-md text-sm underline decoration-yellow-500">http://localhost:3000/api/all?index=&brand=&key=</p>
  </div>

  <div class="my-3">
    <p class="font-Expose md:text-lg text-md text-yellow-500">Get Computer Deals</p>
    <p class="font-Bespoke md:text-md text-sm underline decoration-yellow-500">http://localhost:3000/api/computers?index=&brand=&key=</p>
  </div>

  <div class="my-3">
    <p class="font-Expose md:text-lg text-md text-yellow-500">Get Monitor Deals</p>
    <p class="font-Bespoke md:text-md text-sm underline decoration-yellow-500">http://localhost:3000/api/monitors?index=&brand=&key=</p>
  </div>

  <div class="my-3">
    <div class="my-3">
    <p class="font-Expose md:text-lg text-md text-yellow-500">Filter by Brand</p>
    <p class="font-Bespoke md:text-md text-sm underline decoration-yellow-500">?brand=yourbrandhere</p>
  </div>

  <div class="my-3">
    <p class="font-Expose md:text-lg text-md text-yellow-500">Filter by Index</p>
    <p class="font-Bespoke md:text-md text-sm underline decoration-yellow-500">?index=yourindexhere</p>
  </div>
  </div>
</Section>
