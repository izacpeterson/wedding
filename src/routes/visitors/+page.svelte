<script>
  import { getVisitors } from "$lib/firebase.js";

  let visitors = [];
  let visitorCount = 0;
  let uniqueVisitorCount = 0;

  getVisitors().then((data) => {
    visitors = data;
    console.log(visitors);
    visitors.forEach((visitor) => {
      if (visitor.ip !== "75.169.29.49" && visitor.city !== "Ashburn") visitorCount += 1;
    });
    // filter out duplicate ip addresses and get length, assign to unique visitor count
    uniqueVisitorCount = [...new Set(visitors.map((visitor) => visitor.ip))].length;
  });
</script>

<div class="flex flex-col justify-center items-center">
  <h2 class="text-2xl m-2 p-2">Visits: {visitorCount}</h2>
  <h2 class="text-2xl m-2 p-2">Unique Visitors: {uniqueVisitorCount}</h2>
  {#each visitors as visitor}
    {#if visitor.ip !== "75.169.29.49" && visitor.city !== "Ashburn" && visitor.ip !== "45.86.210.206"}
      <div class="bg-white p-2 rounded flex flex-col items-center">
        <p class="text-md m-2 p-2">{visitor.city}, {visitor.region}, {visitor.timestring}</p>
        <!-- styled line break -->
        <div class="w-1/2 h-[1px] bg-zinc-100" />
      </div>
    {/if}
  {/each}
</div>
