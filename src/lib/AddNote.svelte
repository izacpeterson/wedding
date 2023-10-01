<script>
  import { addGuest } from "$lib/firebase.js";

  let name = "";
  let note = "";

  let done = false;
</script>

<div class="fixed top-0 left-0 h-screen w-full backdrop-blur flex items-center justify-center">
  {#if !done}
    <form
      class="bg-white shadow-md rounded p-2 flex flex-col items-center"
      on:submit={() => {
        addGuest(name, note).then(() => {
          // window.location.reload();
          done = true;
        });
      }}
    >
      <h2 class="text-2xl m-2 p-2">Leave us a note!</h2>
      <span>Your Name:</span>
      <input type="text" bind:value={name} class="bg-zinc-200 p-2 mx-4 w-full" />
      <span class="mt-4">Your Note:</span>
      <textarea type="text" bind:value={note} class="bg-zinc-200 p-2 mx-4 h-40 w-full" />
      <button type="submit" class="bg-green-900 text-white p-2 m-2">Send</button>
    </form>
  {:else}
    <div class="bg-white p-8 shadow-md rounded flex flex-col items-center">
      <h2 class="text-2xl m-2 p-2">Thanks!</h2>
      <button
        on:click={() => {
          window.location.reload();
        }}
        class="p-2 m-2 bg-green-900 text-white">Done</button
      >
    </div>
  {/if}
</div>
