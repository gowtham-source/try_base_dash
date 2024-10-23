import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CreateJobDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateJobDialog({
  open,
  onOpenChange,
}: CreateJobDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Create New Job Post</DialogTitle>
          <DialogDescription>
            Fill in the details for your new job posting.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Job Title</Label>
            <Input id="title" placeholder="e.g. Senior Frontend Developer" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g. Remote, New York, NY" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the role and requirements..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Create Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}