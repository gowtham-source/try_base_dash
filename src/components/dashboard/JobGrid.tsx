import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Job {
  id: number;
  title: string;
  location: string;
  description: string;
  createdAt: string;
  status: 'active' | 'closed';
  stage: 'prescreening' | 'assessment' | 'filtration';
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    location: 'Remote',
    description:
      'We are looking for an experienced Frontend Developer to join our team...',
    createdAt: '2024-03-20',
    status: 'active',
    stage: 'prescreening',
  },
  {
    id: 2,
    title: 'Product Designer',
    location: 'New York, NY',
    description:
      'Seeking a talented Product Designer to help shape the future of our products...',
    createdAt: '2024-03-19',
    status: 'active',
    stage: 'assessment',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    location: 'San Francisco, CA',
    description:
      'Looking for a Backend Engineer to build scalable infrastructure...',
    createdAt: '2024-03-18',
    status: 'closed',
    stage: 'filtration',
  },
];

const stageColors = {
  prescreening: 'bg-blue-500',
  assessment: 'bg-purple-500',
  filtration: 'bg-orange-500',
};

const statusColors = {
  active: 'bg-emerald-500',
  closed: 'bg-red-500',
};

interface JobGridProps {
  searchQuery: string;
}

export default function JobGrid({ searchQuery }: JobGridProps) {
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredJobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] text-center">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search terms or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredJobs.map((job) => (
        <Card key={job.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-200">
          <CardHeader
            className={cn(
              'gradient-header h-20 flex flex-col justify-between relative',
              job.status === 'active'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                : 'bg-gradient-to-r from-gray-500 to-gray-600'
            )}
          >
            <div className="absolute top-3 right-3">
              <div
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium inline-flex items-center',
                  job.status === 'active' ? 'bg-emerald-50' : 'bg-red-50'
                )}
              >
                <div
                  className={cn(
                    'h-1.5 w-1.5 rounded-full mr-1.5',
                    statusColors[job.status]
                  )}
                />
                <span
                  className={cn(
                    'capitalize',
                    job.status === 'active' ? 'text-emerald-700' : 'text-red-700'
                  )}
                >
                  {job.status}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-white text-lg group-hover:underline">
                {job.title}
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span>{job.location}</span>
              <span className="mx-2">•</span>
              <span>Posted on {job.createdAt}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {job.description}
            </p>
            <Badge
              variant="secondary"
              className={cn(
                'text-white',
                stageColors[job.stage]
              )}
            >
              {job.stage.charAt(0).toUpperCase() + job.stage.slice(1)}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}