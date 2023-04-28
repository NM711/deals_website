<script>
  //  this navbars code is kinda ass redo later on if necessary
  import Input from "./textBoxes/input.svelte";
  $: value = "";
  function keyDownEv(ev) {
    if (ev.key === "Enter") {
      console.log(value);
    }
  }
  // export let keydownFunc;
  export let textOrLogo = "Logo";
  export let navBg = "bg-Onyx-Color";
  export let navText = "text-Snow";
  export let navFont = "";
  export let navPadding = "p-3";
  export let itemHref1 = "#";
  export let itemHref2 = "#";
  export let itemName1 = "Home";
  export let itemName2 = "About";
  let navListTranslateClasses =
    "md:opacity-100 opacity-0 duration-500 ease-in-out md:translate-x-0 translate-x-96";
  let listActive = "opacity-100 duration-300 ease-in-out translate-x-0";
  let categoriesListTranslateClasses =
    "opacity-0 duration-300 ease-in-out -translate-x-96";
  export let menuColor = "bg-Snow"; // note that when trying to change color you need to use bg-color not text or anything else
  let menuActive = false;
  let categoriesActive = false;
  function toggleMenu() {
    menuActive = !menuActive;
    menuActive
      ? (navListTranslateClasses = listActive)
      : (navListTranslateClasses =
          "md:opacity-100 opacity-0 duration-500 ease-in-out md:translate-x-0 translate-x-96");
  }

  function toggleCategories() {
    categoriesActive = !categoriesActive;
    categoriesActive
      ? (categoriesListTranslateClasses = listActive)
      : (categoriesListTranslateClasses =
          "opacity-0 duration-300 ease-in-out -translate-x-96");
  }

  const menuSpanClasses = `w-full ${menuColor} h-1 transition-transform duration-150 ease-out`;
</script>

<nav
  {...$$props}
  class="{navBg} {navText} {navFont} fixed z-[100] w-full shadow-sm shadow-black"
>
  <div class="flex justify-between items-center {navPadding}">
    <span class="text-4xl">
      {textOrLogo}
    </span>

    <div class="md:hidden block">
      <button
        on:click={toggleMenu}
        id="menu-btn"
        class="flex flex-col justify-between w-8 h-6 border-none cursor-pointer"
      >
        <span id="span1" class={menuSpanClasses} class:menuActive />
        <span id="span2" class={menuSpanClasses} class:menuActive />
        <span id="span3" class={menuSpanClasses} class:menuActive />
      </button>
    </div>

    <ul
      class="md:inline-flex block md:static fixed right-0 top-16 md:h-fit md:w-fit h-screen w-[75vw] md:text-2xl text-3xl text-center {navBg} bg-opacity-75 {navListTranslateClasses}"
    >
      <li class="md:mx-3 md:px-3 md:py-0 py-3">
        <a
          class="hover:text-yellow-500 duration-150 ease-in-out"
          href={itemHref1}>{itemName1}</a
        >
      </li>
      <li class="md:mx-3 md:px-3 md:py-0 py-3">
        <a
          class="hover:text-yellow-500 duration-150 ease-in-out"
          href={itemHref2}>{itemName2}</a
        >
      </li>
      <li class="md:mx-3 md:px-3 md:py-0 py-3">
        <!-- have deals/ROUTE BE EQUAL TO AN ANY TYPE IN THE API -->
        <a
          class="hover:text-yellow-500 duration-150 ease-in-out"
          href="/deals/all?index=0&brand=any">Deals</a
        >
      </li>
      <li class="md:mx-3 md:px-3 md:py-0 py-3">
        <!-- have deals/ROUTE BE EQUAL TO AN ANY TYPE IN THE API -->
        <a
          class="hover:text-yellow-500 duration-150 ease-in-out"
          href="/api">Api</a
        >
      </li>
      <button
        on:click={toggleCategories}
        class="md:mx-3 md:px-3 md:py-0 py-3 cursor-pointer text-3xl hover:text-yellow-500 duration-150 ease-in-out"
      >
        <ion-icon class="visible md:block hidden" name="apps-sharp" />
        <p class="md:hidden block">Categories</p>
      </button>
    </ul>

    <ul
      class="block fixed py-3 top-0 left-0 h-screen md:w-[25vw] w-[50vw] md:text-4xl text-3xl text-center shadow-md shadow-black {navBg} {categoriesListTranslateClasses}"
    >
      <li class="md:mx-3 md:px-3 py-3 text-yellow-500 duration-150 ease-in-out">
        Products
      </li>
      <li
        class="md:mx-3 md:px-3 py-3 cursor-pointer hover:text-yellow-500 duration-150 ease-in-out"
      >
        <a href="/deals/computers?index=0&brand=any">Computers</a>
      </li>
      <li
        class="md:mx-3 md:px-3 py-3 cursor-pointer hover:text-yellow-500 duration-150 ease-in-out"
      >
        <a href="/deals/monitors?index=0&brand=any">Monitors</a>
      </li>
      <li
        class="md:mx-3 md:px-3 py-3 cursor-pointer hover:text-yellow-500 duration-150 ease-in-out"
      >
        <a href="/headlines/WORLD%20NEWS">Other</a>
      </li>
    </ul>
  </div>
  <div class="flex justify-center items-center {navPadding}">
    <Input
      placeholder="Search For Page Product Here"
      inputShape="squared"
      inputSize="full"
      inputStyle="custom"
      inputPlaceholderColor="placeholder-yellow-500"
      inputTextColor="text-yellow-500"
      inputBgColor="bg-white"
      hoverBgColor="hover:bg-opacity-70"
      outline="outline-none"
      bind:value
      on:keydown={keyDownEv}
    />
  </div>
</nav>

<style>
  #span1.menuActive {
    transform: rotate(-45deg) translate(-35%, -50%);
  }

  #span2.menuActive {
    opacity: 0;
  }

  #span3.menuActive {
    transform: rotate(45deg) translate(-50%, -50%);
  }
</style>
