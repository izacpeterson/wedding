<script>
  import { uploadImage } from "$lib/firebase.js";

  let files; // Note that this is plural
  let done = false;
  let uploading = false;

  const handleSubmit = async (e) => {
    uploading = true;
    e.preventDefault(); // Prevent default form submission

    if (files && files.length > 0) {
      // Loop through all selected files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        await uploadImage(file);
      }

      done = true;
      console.log("done");
    }
  };
</script>

<!-- Allow multiple file selection -->

<div class="fixed top-0 left-0 h-screen w-full backdrop-blur flex items-center justify-center">
  {#if !done}
    {#if !uploading}
      <form class="bg-white shadow-md rounded p-2 flex flex-col items-center" on:submit={handleSubmit}>
        <h2 class="text-2xl m-2 p-2">Upload a picture!</h2>
        <input type="file" bind:files multiple class="bg-zinc-200 p-2 mx-4 w-full" />
        <button type="submit" class="bg-green-900 text-white p-2 m-2"> Send </button>
      </form>
    {:else}
      <div class="bg-white p-8 shadow-md rounded flex flex-col items-center">
        <h2 class="text-2xl m-2 p-2">Uploading...</h2>
      </div>
    {/if}
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
