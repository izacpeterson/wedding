<script>
  import { getImages } from "$lib/firebase.js";

  let images = [];

  let loading = true;

  getImages("images").then((data) => {
    images = data;
    console.log(images);
    loading = false;
  });

  let galleries = ["images", "engagement"];
</script>

<div class="flex flex-col justify-center items-center">
  <h2 class="text-2xl m-2 p-2">Images</h2>

  <div>
    <span class="m-2">Gallery:</span>
    <select
      class="bg-white p-2 m-2 rounded"
      on:change={(e) => {
        loading = true;
        getImages(e.target.value).then((data) => {
          images = data;
          console.log(images);
          loading = false;
        });
      }}
    >
      {#each galleries as gallery}
        <option value={gallery}>{gallery}</option>
      {/each}
    </select>
  </div>
  {#if loading}
    loading...
  {/if}
  {#each images as image}
    <div class="bg-white p-2 rounded flex flex-col items-center">
      <img src={image} class="" />
      <!-- styled line break -->
      <div class="w-1/2 h-[1px] bg-zinc-100" />
    </div>
  {/each}
</div>
