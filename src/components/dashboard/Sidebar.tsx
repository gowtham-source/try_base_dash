import {
  BarChart3,
  LayoutDashboard,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const items = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    view: 'jobs' as const,
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    view: 'analytics' as const,
  },
  {
    title: 'Settings',
    icon: Settings,
    view: 'settings' as const,
  },
];

interface SidebarProps {
  onNavigate: (view: 'jobs' | 'analytics' | 'settings') => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const [selected, setSelected] = useState('Dashboard');
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sidebarRef.current) {
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const isNearSidebar = e.clientX <= sidebarRect.right + 50;
        setIsExpanded(isNearSidebar);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={cn(
        'pb-12 min-h-screen transition-all duration-300 border-r',
        isExpanded ? 'w-64' : 'w-16'
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {items.map((item) => (
              <Button
                key={item.title}
                onClick={() => {
                  setSelected(item.title);
                  onNavigate(item.view);
                }}
                variant={selected === item.title ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  selected === item.title
                    ? 'bg-muted hover:bg-muted'
                    : 'hover:bg-transparent hover:underline',
                  !isExpanded && 'justify-center p-2'
                )}
              >
                <item.icon className={cn('h-4 w-4', isExpanded && 'mr-2')} />
                {isExpanded && <span>{item.title}</span>}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}