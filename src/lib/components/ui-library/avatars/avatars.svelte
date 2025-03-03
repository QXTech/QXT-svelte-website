<script lang="ts">
  import type { DisplayNames, SocialMediaLinks } from "./avatars";
  import Avatar from "./avatar.svelte";

  /**
   * One or more comma-separated GitHub username.
   */
  export let usernames: string;

  /**
   * A map of usernames to display names.
   * If not provided, the `usernames` prop value(s) is/are used.
   *
   * @example
   * ```
   * {
   *   mikenikles: "Mike Nikles",
   *   svenefftinge: "Sven Efftinge"
   * }
   * ```
   */
  export let displayNames: DisplayNames = null;

  /**
   * A map of usernames to social media URLs.
   * If not provided, it is assumed the `usernames` prop contains GitHub usernames.
   *
   * @example
   * ```
   * {
   *   mikenikles: "https://twitter.com/mikenikles",
   *   svenefftinge: "https://twitter.com/svenefftinge"
   * }
   * ```
   */
  export let socialMediaLinks: SocialMediaLinks = null;

  /**
   * Tailwind CSS classes to overwrite the social media <a> tag.
   */
  export let socialMediaLinkClasses = "";

  /**
   * Tailwind CSS classes to overwrite the social media <img> tag.
   */
  export let socialMediaImgClasses = "";

  /**
   * Set this to `false` to hide the avatar and instead show the display name only.
   */
  export let showAvatar = true;

  const trimmedUsernames = usernames
    .split(",")
    .map((username) => username.trim());

  const getSocialMediaLink = (username: string) =>
    socialMediaLinks
      ? socialMediaLinks[username]
      : `https://github.com/${username}`;
</script>

<span class:-space-x-2={!displayNames} class="avatars">
  {#each trimmedUsernames as username}
    {#if displayNames}
      <a
        href={getSocialMediaLink(username)}
        target="_blank"
        class:showAvatar
        class="no-underline transition-none after:hidden leading-7 {socialMediaLinkClasses}"
        rel="noreferrer"
        data-analytics={`{"variant":"social_media"}`}
      >
        <Avatar {username} {socialMediaImgClasses} />
        {displayNames[username]}
      </a>
    {:else}
      <Avatar {username} {socialMediaImgClasses} />
    {/if}
  {/each}
</span>
