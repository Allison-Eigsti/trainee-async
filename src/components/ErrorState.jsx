export default function ErrorState({ error, onRetry }) {
  return (
    <div className="text-center py-12">
      <div className="text-red-600 mb-4">{error}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Try again
        </button>
      )}
    </div>
  );
}
