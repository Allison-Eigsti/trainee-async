import { buildPhotoUrl } from "../services/picsum";

export default function PhotoCard({ photo }) {
  const src = buildPhotoUrl(photo, 640);
  const title = photo.author || "Untitled";

  return (
    <figure className="mb-4 break-inside-avoid group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={src}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
        alt={title}
        loading="lazy"
        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
      />

    </figure>
  );
}
