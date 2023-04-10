<script>
  export let headerText = "Modal";
  export let headerColor = "text-[#04A69D]"
  export let innerText = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nulla deserunt neque delectus atque necessitatibus? Impedit saepe voluptas cum, quidem eaque laborum quaerat illo placeat.";
  export let modalShadow = "shadow-sm shadow-white"
  export let modalColor = "bg-[#27272A]"
  export let modalExitIconColor = "bg-[#FBFFFD]"
  export let innerTextColor = "text-[#FBFFFD]"
  export let innerTextFont = ""
  const inactiveClass = "w-full translate-y-1 md:scale-0 translate-x-1 opacity-0 ease-in-out duration-150"
  const activeClass = "w-full translate-y-0 md:scale-75 translate-x-0 opacity-100 ease-in-out duration-150"

  //**************************************************************************************// 

  //**************************************************************************************// 

  //**************************************************************************************//

  export let isModalActive = true;
  let modalClass;
  let isHidden;
  let backgroundOpacity = "bg-opacity-75"
 export function modalExitFunc(){
    isModalActive = !isModalActive
   
  }
  // work on animation tomorrow cos for somer reason im struggling to do this shit atm00
  $: {
    if (isModalActive === true){
        modalClass = activeClass
        backgroundOpacity = "bg-opacity-75"
        isHidden = "block"
      }
      if (isModalActive === false){
      modalClass = inactiveClass
      backgroundOpacity = "bg-opacity-0"
      setTimeout(() =>{isHidden = "hidden"}, 100)
      }
  }
</script>
<div {...$$props} class="flex justify-center items-center bg-black {backgroundOpacity} {isHidden} w-full h-full fixed inset-0 z-50">
  <div class="md:w-[50vw] w-[75vw] h-fit {modalShadow} {modalColor} rounded-sm {modalClass}">

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={modalExitFunc} class="flex justify-end my-3 cursor-pointer">
        <div class="absolute w-6 h-[2px] m-1 {modalExitIconColor} transform rotate-45 origin-center"></div>
        <div class="absolute w-6 h-[2px] m-1 {modalExitIconColor} transform -rotate-45 origin-center"></div>
    </span>

    <div class="flex flex-col justify-center items-center text-center p-3">
    <header>
      <h2 class="md:text-4xl text-3xl {headerColor}">{headerText}</h2>
    </header>
      <p class="md:text-2xl text-xl m-3 {innerTextColor} {innerTextFont}">{innerText}</p>
    </div>
  </div>
</div>