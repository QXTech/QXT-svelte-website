import type { Feature } from "../../types/feature.type";
import type { SecondaryFeature } from "../../types/secondary-feature.type";
import { terminalSource, linuxSource } from "../terminal";
// @ts-ignore
import Workspaces from "../../components/workspaces.svelte";

export const features: Feature[] = [
  {
    title: "Cloud-powered developer environments",
    paragraph:
      "Gitpod continuously builds your git branches like a CI server so that you can start coding right away - no more waiting for dependencies to download and builds to finish. Our own XXGB dev image takes only xx seconds to load.",
    moreButton: {
      text: "More on prebuilds",
      href: "/docs/prebuilds",
    },
    terminal: {
      source: terminalSource,
    },
  },
  {
    title: "Works on my machine - and yours",
    paragraph:
      "Spin up pre-configured, standardized dev environments from any git context when you need them and close them when you're done. You won’t go back to the friction of long-living stateful environments. ",
    previewComponent: Workspaces,
  },
];

export const otherFeatures: Feature[] = [
  {
    title: "Multi track development with ease",
    paragraph:
      "You can have multiple workspaces with different contexts open at once - one for your feature, one for a bug or one for your code review directly in Gitpod.",
    image: {
      src: "/svg/features/muti-track-development.svg",
      alt: "Multi track development with ease"
    }
  },
  {
    title: "Bringing dev closer to prod",
    paragraph:
      "Gitpod provisions powerful Linux containers under the hood. A Linux shell with root/sudo, a file system, Docker and all other tools and binaries that run on Linux. One OS for both dev and prod.",
    moreButton: {
      href: "#get-started",
      text: "Try now",
    },
    terminal: {
      source: linuxSource,
      dark: true,
      shadow: false,
      narrow: true,
      skipToEnd: true,
    },
  },
  {
    title: "Where teams code together",
    paragraph:
      "Collaborate on tasks without making changes to your dev environment. Share running workspaces for pair programming, use port forwarding or share a snapshot as a copy of your workspace with teammates.",
    moreButton: {
      href: "/docs/sharing-and-collaboration",
      text: "More on collaboration",
    },
    image: {
      src: "/images/features/collaboration.png",
      alt: "Collaboration"
    }
  },
  {
    title: "Code anywhere, on any device",
    paragraph:
      "You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. ",
    moreButton: {
      href: "#get-started",
      text: "Try now",
    },
    image: {
      src: "/images/features/ipad.png",
      alt: "Gitpod Workspace on an iPad."
    }
  },
]

export const secondaryFeatures: SecondaryFeature[] = [
  {
    icon: '/svg/features/open-source.svg',
    title: 'Open Source',
    text: 'We\'re free from big tech influence and integrate, not dictate. This makes our product development fast and close to our users & community.'
  },
  {
    icon: '/svg/features/saas.svg',
    title: 'SaaS or Self-hosted',
    text: 'Use our SaaS solution running on the carbon neutral Google Cloud Platform or host Gitpod on your own cloud infrastructure using GKE, k3s, EKS or AKS.'
  },
  {
    icon: '/svg/features/secure.svg',
    title: 'Secure by design',
    text: 'Gitpod centralizes all source code and safely stores it in the cloud, never locally. Security is at the core of everything we do at Gitpod.',
  }
]