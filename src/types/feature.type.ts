export type Feature = {
  title: string;
  paragraph: string;
  moreButton?: { text: string; href: string; type?: "secondary" | "tertiary" };
  documentationLink?: string;
  image?: { src: string; alt: string; height?: number; width?: number; classNames?: string; };
  terminal?: {
    source: string;
    skipToEnd?: boolean;
    shadow?: "grey" | "brand" | false;
    narrow?: boolean;
    dark?: boolean;
  };
  previewComponent?: any;
};
