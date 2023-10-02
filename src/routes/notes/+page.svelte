<script>
  import { getNotes } from "$lib/firebase.js";

  let notes = [];

  getNotes().then((data) => {
    notes = data;
    console.log(notes);
  });
</script>

<div class="flex flex-col justify-center">
  <h2 class="text-2xl m-2 p-2">Notes</h2>
  {#each notes as note}
    <div class="bg-white p-2 rounded flex flex-col items-center">
      <h2 class="text-2xl m-2 p-2">{note.name}</h2>
      <p class="text-lg m-2 p-2">{note.text}</p>
      <!-- styled line break -->
      <div class="w-1/2 h-[1px] bg-zinc-100" />
    </div>
  {/each}
</div>
