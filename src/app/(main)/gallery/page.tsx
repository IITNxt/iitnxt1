export const dynamic = 'force-static';
import ImageGrid from "@/components/gallery/index";
import HeroSection from "@/components/gallery/HeroSection";
import fs from "fs";
import path from "path";

function getGalleries() {
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    if (!fs.existsSync(galleryDir)) return [];

    const items = fs.readdirSync(galleryDir);
    const galleries = items
      .filter((item) => {
        const fullPath = path.join(galleryDir, item);
        return fs.statSync(fullPath).isDirectory();
      })
      .map((folder) => {
        const folderPath = path.join(galleryDir, folder);
        const images = fs
          .readdirSync(folderPath)
          .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .map((file) => `/gallery/${folder}/${file}`);



        let description = "";
        try {
          const descPath = path.join(folderPath, "description.txt");
          if (fs.existsSync(descPath)) {
            description = fs.readFileSync(descPath, "utf-8");
          }
        } catch {
          // ignore error
        }

        return {
          title: folder,
          description,
          images,
        };
      });

    return galleries;
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}

// export const dynamic = 'force-dynamic'; // Removed to enforce static generation for Cloudflare

export default function GalleryPage() {
  const galleries = getGalleries();
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ImageGrid galleries={galleries} />
    </main>
  );
}




