<script>
  import { quotes } from "../../contents/blog";
  import Carousel from "../carousel.svelte";
</script>

<style>
  div {
    scroll-snap-align: start;
    width: 500px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 320px;
    }
  }

  img {
    max-width: 200px;
  }
</style>

<section class="mt-large">
  <h2>Quotes</h2>
  <Carousel class="mb-small pr-44">
    {#each quotes as { text, author, jobTitle, companyLogo }}
      <div
        class="text-black text-base w-96 p-x-small overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mb-micro"
      >
        <p class="italic mb-small">{text}</p>
        <div>
          <span class="font-semibold">{author}</span>
          <br />
          <span>{jobTitle}</span>
        </div>
        <img src={companyLogo.src} alt={companyLogo.alt} class="h-6 mt-micro" />
      </div>
    {/each}
  </Carousel>
</section>
