const API_BASE = "https://picsum.photos/v2";

export function buildPhotoUrl(photo, width = 640, height = null) {
  if (photo?.download_url) {
    return photo.download_url;
  }
  const h = height || Math.round(width * 0.75);
  if (photo?.id !== undefined && photo?.id !== null) {
    return `https://picsum.photos/id/${photo.id}/${width}/${h}`;
  }
  return `https://picsum.photos/${width}/${h}`;
}

export async function fetchPhotos({ page = 1, limit = 10, signal } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const url = `${API_BASE}/list?${params.toString()}`;
  const response = await fetch(url, { method: "GET", signal });

  if (!response.ok) {
    throw new Error(`Picsum API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    return [];
  }
  return data;
}
