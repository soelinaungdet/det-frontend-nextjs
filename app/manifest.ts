import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DET",
    short_name: "DET",
    description: "A Progressive Web App built with Next.js",
    start_url: "http://localhost:3000/",
    display: "standalone",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icon512_rounded.png",
        type: "image/png",
      },
    ],
    dir: "auto",
    lang: "en-GB",
    background_color: "#ffffff",
    theme_color: "#000000",
  };
}
