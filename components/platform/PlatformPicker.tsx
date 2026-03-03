import { PLATFORMS } from '@/constants/platforms';

export default function PlatformPicker() {
  return (
    <div className="flex gap-2">
      {PLATFORMS.map((platform) => (
        <button key={platform.id} className="p-2 border rounded-md hover:bg-muted">
          {platform.label}
        </button>
      ))}
    </div>
  );
}
