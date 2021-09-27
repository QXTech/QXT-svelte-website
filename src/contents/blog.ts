import type { Quote } from "../types/quote.type";
import type { Brand } from "../types/brand.type";

export const quotes: Quote[] = [
  {
    text: "“Gitpod’s move to open source their technology will improve the productivity of developers who run VS Code in the browser”",
    author: "Sid Sijbrandij",
    jobTitle: "Co-founder and CEO at GitLB",
    companyLogo: {
      src: '/svg/blog/gitlab.svg',
      alt: "GitLab"
    }
  },
  {
    text: "“As usual, Gitpod is at the forefront of delivering solutions that move the entire industry forward.”",
    author: "Chris Aniszczyk",
    jobTitle: "CTO at CNCF",
    companyLogo: {
      src: '/svg/blog/cncf.svg',
      alt: 'Cloud Native Computing Foundation'
    }
  },
  {
    text: "“At Uber, we’ve invested in remote development solutions to unlock productive and happy developers at our scale. OpenVSCode Server will allow us to keep a current and easy-to-maintain developer experience, while providing the latest tooling to our developers. We’re thrilled to partner with Gitpod to integrate this new project.”",
    author: "Ty Smith",
    jobTitle: "Tech Lead for Uber’s Developer Platform",
    companyLogo: {
      src: '/svg/blog/uber.svg',
      alt: "Uber"
    }
  },
]

export const brands: Brand[] = [
  {
    alt: "GitLab",
    logo: "svg/blog/gitlab.svg",
  },
  {
    alt: "VMware",
    logo: "svg/blog/vmware.svg",
  },
  {
    alt: "Uber",
    logo: "svg/blog/uber.svg",
  },
  {
    alt: "SAP",
    logo: "svg/blog/sap.svg",
  },
  {
    alt: "Sourcegraph",
    logo: "svg/blog/sourcegraph.svg",
  },
  {
    alt: "openSUSE",
    logo: "svg/blog/opensuse.svg",
  },
  {
    alt: "Tabnine",
    logo: "svg/blog/tabnine.svg",
  },
  {
    alt: "Render",
    logo: "svg/blog/render.svg",
  },
  {
    alt: "TypeFox",
    logo: "svg/blog/typefox.svg",
  },
];
