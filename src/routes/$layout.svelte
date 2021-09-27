<script>
  import Segment from "../components/segment.svelte";
  import LayoutMain from "../components/layout-main.svelte";
  import LayoutRoot from "../components/layout-root.svelte";
  import Nav from "../components/main-nav/index.svelte";
  import Footer from "../components/footer.svelte";
  import CookieConsent from "../components/banners/cookie-consent.svelte";
</script>

<style>
  :global(#svelte-announcer) {
    @apply sr-only;
  }

  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>

<LayoutRoot>
  <Nav />
  <LayoutMain>
    <slot />
  </LayoutMain>
  <Footer />
</LayoutRoot>
<CookieConsent />
<Segment />
