import { useState, useEffect } from "react";
import { fetchPhotos } from "../services/picsum";

export function usePhotos({ page = 1, limit = 10 }) {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function run() {
      setStatus("loading");
      setError(null);
      try {
        const results = await fetchPhotos({ page, limit, signal });
        if (signal.aborted) return;
        setPhotos(results);
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Failed to load photos");
        setStatus("error");
      }
    }
    run();
    return () => controller.abort();
  }, [page, limit]);

  return { photos, status, error, refetch: () => {} };
}
