import { ProjectModalProps } from '../types/projectTypes';
import { Globe, Code } from 'lucide-react';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ProjectModal = ({ data }: ProjectModalProps) => {
  const incomplete: boolean = data.status === 'incomplete';
  const hasRepo = data.repoURL && data.repoURL !== '#';
  const hasLive = data.pageURL && data.pageURL !== '#';

  return (
    <DialogContent className='w-[calc(100%-1rem)] sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-background text-foreground border-border '>
      <DialogHeader>
        <DialogTitle className='text-2xl font-bold text-accent flex items-center gap-2'>
          {data.title}
          {incomplete && (
            <Badge variant='destructive' className='text-xs'>
              Incomplete
            </Badge>
          )}
        </DialogTitle>
        <DialogDescription className='text-muted-foreground'>
          {data.category} - {data.role}
        </DialogDescription>
      </DialogHeader>

      <div className='grid gap-4 py-4 md:grid-cols-2'>
        <div className='w-full max-w-[300px] mx-auto md:max-w-none rounded-lg overflow-hidden border border-border'>
          <div className='md:hidden'>
            <AspectRatio ratio={16 / 9}>
              <img
                src={data.src}
                alt={data.alt}
                className='w-full h-full object-cover'
              />
            </AspectRatio>
          </div>
          <div className='hidden md:block'>
            <AspectRatio ratio={1}>
              <img
                src={data.src}
                alt={data.alt}
                className='w-full h-full object-cover'
              />
            </AspectRatio>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-sm text-muted-foreground leading-relaxed'>
            {data.description}
          </p>

          <div>
            <h4 className='text-sm font-semibold mb-2 text-foreground hidden md:block'>
              Technologies
            </h4>
            <div className='flex flex-wrap gap-2'>
              {data.tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant='secondary'
                  className='text-xs px-2 py-0.5'
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DialogFooter className='flex sm:justify-between gap-4 sm:gap-0'>
        <div className='flex gap-4 w-full sm:w-auto justify-center sm:justify-start'>
          {/* Links */}
          <a
            href={hasRepo ? data.repoURL : undefined}
            target={hasRepo ? '_blank' : undefined}
            rel='noopener noreferrer'
            className={`flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground transition-colors ${
              hasRepo
                ? 'hover:bg-secondary/80'
                : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={(e) => !hasRepo && e.preventDefault()}
          >
            <Code size={18} />
            <span>Code</span>
          </a>

          <a
            href={hasLive ? data.pageURL : undefined}
            target={hasLive ? '_blank' : undefined}
            rel='noopener noreferrer'
            className={`flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground transition-colors ${
              hasLive ? 'hover:bg-primary/90' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={(e) => !hasLive && e.preventDefault()}
          >
            <Globe size={18} />
            <span>Visit Site</span>
          </a>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default ProjectModal;
