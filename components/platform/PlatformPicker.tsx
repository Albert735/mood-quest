import { PLATFORMS } from '@/constants/platforms';
import { Platform } from '@/types';

export default function PlatformPicker() {
  return (
    <div className="flex gap-2">
      {PLATFORMS.map((platform: { id: Platform; label: string; icon: string }) => (
        <button key={platform.id} className="p-2 border rounded-md hover:bg-muted">
          {platform.label}
        </button>
      ))}
    </div>
  );
}
