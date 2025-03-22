
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  fullDescription: string;
  year: number;
  client: string;
  services: string[];
  technologies: string[];
  imageUrls: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Minimalist Interior",
    category: "Web Design",
    description: "A clean, minimalist website for an interior design studio.",
    thumbnailUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    fullDescription: "This comprehensive design project involved creating a fully responsive website for a high-end interior design studio. The focus was on showcasing their portfolio in a clean, minimalist design that put the spotlight on their work.",
    year: 2023,
    client: "Modern Spaces Studio",
    services: ["UI/UX Design", "Web Development", "Art Direction"],
    technologies: ["React", "GSAP", "Tailwind CSS"],
    imageUrls: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "project-2",
    title: "Monochrome Photography",
    category: "Photography",
    description: "Black and white photography portfolio with a focus on urban landscapes.",
    thumbnailUrl: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1000&auto=format&fit=crop",
    fullDescription: "This photography portfolio showcases a series of black and white urban landscapes, capturing the essence of city life through a minimalist lens. The project involved art direction, photography, and the development of a custom portfolio website.",
    year: 2022,
    client: "Alex Harrison Photography",
    services: ["Photography", "Web Design", "Branding"],
    technologies: ["Gatsby", "Framer Motion", "Netlify"],
    imageUrls: [
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "project-3",
    title: "Minimal E-Commerce",
    category: "UX Design",
    description: "A streamlined shopping experience for a fashion brand.",
    thumbnailUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    fullDescription: "This e-commerce project focused on creating a streamlined, minimalist shopping experience for a high-end fashion brand. The design emphasizes product photography and offers an intuitive browsing and checkout process.",
    year: 2023,
    client: "Essence Apparel",
    services: ["UX/UI Design", "E-commerce Development", "Content Strategy"],
    technologies: ["Next.js", "Shopify", "GSAP"],
    imageUrls: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "project-4",
    title: "Modernist Architecture",
    category: "Branding",
    description: "Brand identity for an architecture firm specializing in modernist designs.",
    thumbnailUrl: "https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?q=80&w=1000&auto=format&fit=crop",
    fullDescription: "This branding project for an architecture firm specializing in modernist designs involved creating a comprehensive visual identity. The brand system includes logo design, typography, color palette, and various applications.",
    year: 2022,
    client: "Nova Architects",
    services: ["Brand Strategy", "Visual Identity", "Print Design"],
    technologies: ["Adobe Creative Suite", "Webflow", "Cinema 4D"],
    imageUrls: [
      "https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "project-5",
    title: "Clean Product Design",
    category: "Product Design",
    description: "Minimalist product designs for everyday objects.",
    thumbnailUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop",
    fullDescription: "This product design project focused on creating minimalist designs for everyday objects. The goal was to strip away unnecessary elements and focus on clean, functional forms that enhance the user experience.",
    year: 2023,
    client: "Purist Home Goods",
    services: ["Product Design", "Prototyping", "Manufacturing Consultation"],
    technologies: ["Blender", "Figma", "3D Printing"],
    imageUrls: [
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: "project-6",
    title: "Responsive Web App",
    category: "App Design",
    description: "A minimal, intuitive interface for a productivity web application.",
    thumbnailUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1000&auto=format&fit=crop",
    fullDescription: "This web application design project focused on creating a minimal, intuitive interface for a productivity tool. The design emphasizes usability and clean aesthetics, with careful attention to responsive behavior across devices.",
    year: 2022,
    client: "FocusFlow",
    services: ["UI/UX Design", "Front-end Development", "User Testing"],
    technologies: ["React", "TypeScript", "Framer Motion"],
    imageUrls: [
      "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2000&auto=format&fit=crop"
    ]
  }
];
