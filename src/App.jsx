import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GalleryGrid from "./components/GalleryGrid";
import Loader from "./components/Loader";
import ErrorState from "./components/ErrorState";
import EmptyState from "./components/EmptyState";
import { usePhotos } from "./hooks/usePhotos";

export default function App() {
  const [page, setPage] = useState(1);
  const { photos, status, error, refetch } = usePhotos({ page, limit: 10 });

  function handleSearch() {
    setPage((p) => p + 1);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <SearchBar onSearch={handleSearch} loading={status === "loading"} />
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorState error={error} onRetry={refetch} />}
        {status === "success" && photos.length === 0 && <EmptyState />}
        {status === "success" && photos.length > 0 && <GalleryGrid photos={photos} />}
      </main>
    </div>
  );
}
