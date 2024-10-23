import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import JobGrid from './JobGrid';
import SearchBar from './SearchBar';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import CreateJobDialog from './CreateJobDialog';
import AnalyticsDashboard from './analytics/AnalyticsDashboard';

export default function Dashboard() {
  const [createJobOpen, setCreateJobOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'jobs' | 'analytics'>('jobs');

  return (
    <div className="min-h-screen bg-background">
      <Navbar>
        <div className="flex items-center gap-4">
          {currentView === 'jobs' && (
            <>
              <SearchBar onSearch={setSearchQuery} />
              <Button
                onClick={() => setCreateJobOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Job Post
              </Button>
            </>
          )}
        </div>
      </Navbar>
      <div className="flex">
        <Sidebar onNavigate={(view) => setCurrentView(view)} />
        {currentView === 'jobs' ? (
          <main className="flex-1 p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Job Listings</h1>
              <p className="text-muted-foreground mt-2">
                Manage and track your job postings
              </p>
            </div>
            <JobGrid searchQuery={searchQuery} />
          </main>
        ) : (
          <AnalyticsDashboard />
        )}
      </div>
      <CreateJobDialog open={createJobOpen} onOpenChange={setCreateJobOpen} />
    </div>
  );
}