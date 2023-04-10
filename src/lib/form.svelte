<script>
    import Input from '$lib/textBoxes/input.svelte'
    import Button from '$lib/buttons/button.svelte';
    export let input1 = ''
    export let input2 = ''
    export let buttonText = "Create Account"
</script>

<form method="POST" action="http://localhost:3000/auth/sign_up" class="bg-[#343434] rounded-md font-Bebas_Neue mx-5 p-3">
  <div class="text-left my-5">
    <div class="my-3">
        <Input 
        placeholder="Enter Email"
        inputShape="squared" 
        inputSize="full" 
        inputStyle="custom" 
        inputPlaceholderColor="placeholder-yellow-500"
        inputTextColor="text-yellow-500" 
        inputBgColor="bg-white" 
        hoverBgColor="hover:bg-opacity-70" 
        outline="outline-none"
        name="Email"
        labelColor="text-white"
        bind:value={input1}
        />
      </div>
    
       <div class="my-3">
        <Input 
        placeholder="Enter Password"
        inputShape="squared" 
        inputSize="full" 
        inputStyle="custom" 
        inputPlaceholderColor="placeholder-yellow-500"
        inputTextColor="text-yellow-500" 
        inputBgColor="bg-white" 
        hoverBgColor="hover:bg-opacity-70" 
        outline="outline-none"
        name="Password"
        labelColor="text-white"
        bind:value={input2}
        />
       </div>
  </div>

    <Button 
    buttonType="outline" 
    buttonStyle="secondary" 
    buttonShapeType="rounded" 
    buttonSize="full"
    {buttonText}
    type="submit"
    on:click
    />
</form>