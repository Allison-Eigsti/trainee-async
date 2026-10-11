export default function Loader() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
      {[...Array(10).keys()].map((i) => (
        <div
          key={i}
          className="mb-4 break-inside-avoid rounded-lg bg-gray-200 animate-pulse"
          style={{ height: `${100 + (i % 5) * 40}px` }}
        />
      ))}
    </div>
  );
}
