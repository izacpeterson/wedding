<script>
  import Upload from "$lib/upload.svelte";
  import AddNote from "$lib/AddNote.svelte";
  import AddFile from "$lib/AddFile.svelte";

  import { logVisitor } from "$lib/firebase.js";

  import { onMount } from "svelte";

  let showUpload = false;
  let showNote = false;

  onMount(() => {
    logVisitor();
    var data = {
      content: "New Visitor on Wedding " + new Date().toLocaleTimeString(),
    };
    var options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    // fetch("https://discordapp.com/api/webhooks/770724245214986261/qQTsNZsFXoiRopoc6EB3p0Ixt7427RkLd-BB_Cf4xKcWoOhFmvV1__2wJu590gkEAwmz", options);
  });
</script>

{#if showUpload}
  <AddFile />
{/if}

{#if showNote}
  <AddNote />
{/if}

<main class="flex flex-col items-center text-center">
  <div class="flex flex-col items-center p-2">
    <h2 class="text-xl">Wedding Reception:</h2>
    <h4>October 16th, 2023</h4>
    <h4>6pm - 8pm</h4>
    <h4>50 West 500 North, Lehi, Utah</h4>
  </div>
  <!-- <a href="/rsvp" class="bg-green-900 p-2 rounded text-white">Let us know you're coming!</a> -->
  <ul class="flex flex-col items-center p-2">
    <h2 class="text-xl">Links:</h2>
    <li class="text-green-800 m-2"><a href="https://www.amazon.com/wedding/share/rachelizac">Amazon Registry</a></li>
    <li class="text-green-800 m-2"><a href="https://www.google.com/maps/place/50+W+500+N,+Lehi,+UT+84043/@40.3939417,-111.8528229,17z/data=!3m1!4b1!4m5!3m4!1s0x874d802ca4b10763:0xcd3c5c7f3b48a412!8m2!3d40.3939376!4d-111.850248?entry=ttu">Reception Location</a></li>
    <li class="text-green-800 m-2"><a href="https://account.venmo.com/u/Izac-Peterson">Venmo</a></li>
  </ul>

  <div class="flex flex-col items-center">
    <h2 class="text-lg">Have a great picture of us? Feel free to share!</h2>
    <button on:click={() => (showUpload = !showUpload)} class="bg-green-900 mt-2 p-2 rounded text-white">Upload Pictures</button>
  </div>

  <div class="flex flex-col items-center mt-4">
    <h2 class="text-lg">Leave us a note, advice, or kind message</h2>
    <button on:click={() => (showNote = !showNote)} class="bg-green-900 mt-2 p-2 rounded text-white">Click me!</button>
  </div>
</main>
