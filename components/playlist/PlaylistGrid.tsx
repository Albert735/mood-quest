import PlaylistCard from './PlaylistCard';

export default function PlaylistGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <PlaylistCard key={i} />
      ))}
    </div>
  );
}
