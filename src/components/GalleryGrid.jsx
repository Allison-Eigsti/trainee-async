import PhotoCard from "./PhotoCard";

export default function GalleryGrid({ photos }) {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
