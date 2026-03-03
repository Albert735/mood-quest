export default function Footer() {
  return (
    <footer className="p-4 text-center text-muted-foreground">
      © {new Date().getFullYear()} MoodQuest. All rights reserved.
    </footer>
  );
}
