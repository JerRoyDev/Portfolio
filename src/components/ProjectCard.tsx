import Skill from './Skill';
import { ProjectCardProps } from '@/types/projectTypes';
import ProjectModal from '@/components/ProjectModal';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const ProjectCard = ({ data, even }: ProjectCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className={`group flex flex-col md:flex-row ${
            even ? 'md:flex-row-reverse' : ''
          } overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl border-border/50 bg-card text-card-foreground md:h-72`}
        >
          <div className='w-full md:w-2/5 shrink-0 relative overflow-hidden'>
            <div className='md:hidden'>
              <AspectRatio ratio={16 / 9}>
                <img
                  src={data.src}
                  alt={data.alt}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                  loading='lazy'
                />
              </AspectRatio>
            </div>
            <img
              src={data.src}
              alt={data.alt}
              className='hidden md:block h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
              loading='lazy'
            />
          </div>

          <div className='flex flex-col w-full'>
            <CardHeader className='pb-2'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-xs font-medium text-muted uppercase tracking-wider'>
                  {data.role}
                </span>
                <span className='text-xs text-muted capitalize'>
                  {data.category}
                </span>
              </div>
              <CardTitle className='text-xl md:text-2xl mt-4 font-bold text-text'>
                {data.title}
              </CardTitle>
            </CardHeader>

            <CardContent className='flex-grow flex flex-col justify-between py-2'>
              <CardDescription className='line-clamp-3 text-sm md:text-base mb-4'>
                {data.description}
              </CardDescription>

              <div className='flex flex-wrap gap-2'>
                {data.tools.slice(0, 5).map((tool, index) => (
                  <Badge
                    key={index}
                    variant='secondary'
                    className='text-xs px-2 py-0.5'
                  >
                    {tool}
                  </Badge>
                ))}
                {data.tools.length > 5 && (
                  <Badge variant='secondary' className='text-xs px-2 py-0.5'>
                    +{data.tools.length - 5}
                  </Badge>
                )}
              </div>
            </CardContent>
          </div>
        </Card>
      </DialogTrigger>
      <ProjectModal data={data} />
    </Dialog>
  );
};

export default ProjectCard;
