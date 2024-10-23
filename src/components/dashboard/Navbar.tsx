import { ModeToggle } from './ModeToggle';

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            AI-R
          </h2>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {children}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}