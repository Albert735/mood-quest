export default function TrendingSongs() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center gap-4 p-2 rounded-md hover:bg-muted">
          <span className="text-muted-foreground font-medium w-4">{i}</span>
          <div className="w-10 h-10 bg-muted rounded" />
          <div className="flex-1">
            <p className="font-medium">Song Title</p>
            <p className="text-sm text-muted-foreground">Artist Name</p>
          </div>
        </div>
      ))}
    </div>
  );
}
