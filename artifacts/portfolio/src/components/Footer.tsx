export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">
          © {new Date().getFullYear()} Ibrahim Mammadov. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
