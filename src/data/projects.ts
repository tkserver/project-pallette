export interface Project {
  name: string;
  path: string;
  description: string;
  icon: string;
}

export const projects: Project[] = [
  // === SVG TOOLS ===
  {
    name: "Bitmap to SVG Converter",
    path: "/bitmap-to-svg",
    description: "Tool that converts bitmap images to SVG format.",
    icon: "image"
  },
  {
    name: "SVG Viewer",
    path: "/svg-viewer",
    description: "Tool that allows you to view and interact with SVG images.",
    icon: "image"
  },
  {
    name: "SVG to Bitmap Converter",
    path: "https://tonykorologos.com/svg-to-bitmap",
    description: "Tool that converts SVG images to bitmap formats.",
    icon: "image"
  },

  // === GRAPHIC DESIGN TOOLS ===
  {
    name: "Colorista - Color Palette Generator",
    path: "/colorista",
    description: "Color palette generator that allows you to create and save color palettes from images.",
    icon: "image"
  },
  {
    name: "App Store Image Converter",
    path: "/app-store-image-converter",
    description: "Tool that converts images to formats required by Google Play and Apple App Store.",
    icon: "image"
  },
  {
    name: "Favicon Generator",
    path: "/favicon-generator",
    description: "Generator that converts PNG, JPG, GIF, or SVG images to favicon and related favicon formats.",
    icon: "image"
  },
  {
    name: "QR Code Generator",
    path: "/qr-code-generator",
    description: "Create beautiful QR codes with custom logos and sizes.",
    icon: "image"
  },

  // === DATA TOOLS ===
  {
    name: "JSON Editor",
    path: "/json-editor",
    description: "Robust JSON editor with validation, formatting, and advanced features.",
    icon: "edit"
  },
  {
    name: "GeoJSON ID Processor",
    path: "/ideofixer",
    description: "Standardize and reformat IDs in GeoJSON feature collections.",
    icon: "map"
  },

  // === MUSIC & ENTERTAINMENT ===
  {
    name: "Guitar Chord Generator",
    path: "/guitar-chord-generator",
    description: "Generate guitar chord diagrams and explore different chord variations.",
    icon: "music"
  },
  {
    name: "Guitar Master",
    path: "/guitar-master",
    description: "Comprehensive guitar lessons for every skill level, from foundational techniques to advanced mastery.",
    icon: "music"
  },
  {
    name: "Steampunk",
    path: "/steampunk",
    description: "AI generated band website theme with steampunk aesthetic and design elements.",
    icon: "music"
  },

  // === APPS & UTILITIES ===
  {
    name: "Alta Guide",
    path: "/alta-guide",
    description: "Navigate Alta's legendary terrain with interactive maps, track your ski runs, plan your day based on live weather and road conditions with traffic cameras.",
    icon: "ski"
  },
  {
    name: "No Poo Left Behind",
    path: "/no-poo-left-behind",
    description: "The No Poo Left Behind mobile app that helps dog walkers mark poo bag and deposit spots for later recovery.",
    icon: "poop"
  },
  {
    name: "Pixel Speak",
    path: "/tk-translate",
    description: "Support page for Pixel Speak Translator app on Google and Apple app stores.",
    icon: "code"
  },
  {
    name: "Retro Games",
    path: "https://tonykorologos.com/games",
    description: "Play classic arcade games like Arkanoid, Galaga, and Space Invaders.",
    icon: "code"
  }
];
