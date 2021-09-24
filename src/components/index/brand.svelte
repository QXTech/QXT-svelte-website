<script lang="ts">
  import type { Brand } from "../../types/brand.type";

  export let brand: Brand;

  const { logo, alt, transform, className } = brand;
</script>

<style lang="scss">
  img {
    width: 5.9375rem;
  }

  .brand {
    flex-basis: calc(14% - 1.375rem);
    min-width: 130px;
    display: flex;
    border: 2px solid transparent;
    justify-content: center;
    margin: 0.75rem;
    
    .grey-logo {
      filter: grayscale(100%) contrast(0%) brightness(116%);
      -webkit-filter: grayscale(100%) contrast(0%) brightness(116%);
    }

    .fcc {
      -webkit-filter: grayscale(100%) contrast(0%);
      filter: grayscale(100%) contrast(0%);

      @media (min-width: 841px) {
        width: 8.125rem;
        transform: translateX(-0.625rem);
      }
    }

    .dwave-logo {
      transform: scale(1);
      filter: grayscale(100%) contrast(0%) brightness(112%);
      -webkit-filter: grayscale(100%) contrast(0%) brightness(112%);
    }

    .four-geeks {
      transform: scale(0.9);
    }

    .gatsby-logo {
      filter: grayscale(100%) opacity(47%);
      -webkit-filter: grayscale(100%) opacity(47%);
    }

    .vue-logo {
      filter: grayscale(100%) opacity(62%);
      -webkit-filter: grayscale(100%) opacity(62%);
    }
  }
</style>

<div class="brand">
  <img
    src={`/${logo}`}
    {alt}
    style={`transform: ${transform}`}
    class={className}
  />
</div>
