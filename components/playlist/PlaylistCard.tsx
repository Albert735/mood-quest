export default function PlaylistCard() {
  return (
    <div className="rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-muted" />
      <div className="p-3">
        <h3 className="font-medium truncate">Playlist Title</h3>
        <p className="text-sm text-muted-foreground">Owner</p>
      </div>
    </div>
  );
}
