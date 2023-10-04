<script>
  import { getVisitors } from "$lib/firebase.js";

  let visitors = [];
  let visitorCount = 0;

  getVisitors().then((data) => {
    visitors = data;
    console.log(visitors);
    visitors.forEach((visitor) => {
      if (visitor.ip !== "75.169.29.49" && visitor.city !== "Ashburn") visitorCount += 1;
    });
  });
</script>

<div class="flex flex-col justify-center items-center">
  <h2 class="text-2xl m-2 p-2">Visitors: {visitorCount}</h2>
  {#each visitors as visitor}
    {#if visitor.ip !== "75.169.29.49" && visitor.city !== "Ashburn"}
      <div class="bg-white p-2 rounded flex flex-col items-center">
        <p class="text-md m-2 p-2">{visitor.city}, {visitor.region}, {visitor.timestring}</p>
        <!-- styled line break -->
        <div class="w-1/2 h-[1px] bg-zinc-100" />
      </div>
    {/if}
  {/each}
</div>
