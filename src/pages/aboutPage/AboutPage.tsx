import {
  User,
  Code,
  GraduationCap,
  Mail,
  Code2,
  Linkedin,
  CheckCircle,
  Circle,
  CircleDot,
} from 'lucide-react';

import { allSkills } from '@/components/AllSkills';
import { Course } from '@/types/Course';
import courses from '@/data/courses.json';
import Skill from '@/components/Skill';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const updateCourseStatus = (courses: Course[]) => {
  const today = new Date();
  return courses.map((course) => {
    const startDate = new Date(course.startDate);
    const endDate = new Date(course.endDate);

    if (today < startDate) {
      return { ...course, status: 'upcoming' };
    } else if (today > endDate) {
      return { ...course, status: 'complete' };
    } else {
      return { ...course, status: 'ongoing' };
    }
  });
};

const updatedCourses = updateCourseStatus(courses);

const courseStatusIcon = (status: string) => {
  switch (status) {
    case 'complete':
      return <CheckCircle className='w-6 h-6 mr-2 text-green-500 shrink-0' />;
    case 'ongoing':
      return (
        <CircleDot className='w-6 h-6 mr-2 text-accent shrink-0 animate-pulse' />
      );
    case 'upcoming':
      return <Circle className='w-6 h-6 mr-2 text-gray-500 shrink-0' />;
    default:
      break;
  }
};

const totalPoints = updatedCourses.reduce(
  (sum, course) => sum + course.points,
  0
);
const completedPoints = updatedCourses
  .filter((course) => course.status === 'complete')
  .reduce((sum, course) => sum + course.points, 0);

const AboutPage = () => {
  return (
    <div className='max-w-4xl p-6 mx-auto bg-background text-foreground'>
      <header className='mb-8 text-center'>
        <h1 className='mb-2 text-3xl font-bold text-accent'>Jerry Olsson</h1>
        <p className='text-xl text-muted-foreground'>Software Developer</p>
      </header>

      <main className='space-y-6'>
        {/* ABOUT ME */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center text-2xl font-semibold text-accent'>
              <User className='mr-2 text-accent' /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-muted-foreground leading-relaxed'>
              I'm a creative and problem-solving software developer student from
              Piteå, Sweden, living with my wife and our two children. With a
              background in construction and industry, as well as a few years
              volunteering in Tanzania, I've also always had a deep interest in
              technology and IT. Now, I've taken the step to pursue what I'm
              truly passionate about, developing my skills in the tech world.{' '}
              <br />
              <br /> I consider myself a positive, curious individual who loves
              learning new things and grows with challenges. I'm excited about
              growing further and contributing wherever I can.
            </p>

            <div className='flex justify-end mt-4'>
              <a
                className='italic text-accent hover:underline animate-pulse md:hover:scale-105 md:hover:animate-none transition-all'
                href='/jerry_olsson_cv.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                Check out my CV
              </a>
            </div>
          </CardContent>
        </Card>

        {/* SKILLS */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center text-2xl font-semibold text-accent'>
              <Code className='mr-2 text-accent' /> Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
              {allSkills.map((skill, index) => (
                <div
                  key={index}
                  className='flex items-center p-3 text-sm rounded-md bg-secondary/10 border border-border'
                >
                  <div className='flex justify-center w-6 mx-2 shrink-0 text-accent'>
                    <Skill skill={skill} />
                  </div>
                  <span className='font-medium'>{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* EDUCATION */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center text-2xl font-semibold text-accent'>
              <GraduationCap className='mr-2 text-accent' /> Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              <div>
                <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-4'>
                  <div>
                    <h3 className='text-lg font-semibold'>
                      Fullstack Developer Program
                    </h3>
                    <p className='text-muted-foreground'>
                      Chas Academy, Ongoing
                    </p>
                  </div>
                  <Badge variant='outline' className='mt-2 sm:mt-0 w-fit'>
                    Completed: {completedPoints}/{totalPoints} p
                  </Badge>
                </div>
                <div className='space-y-3'>
                  {updatedCourses.map((course, index) => (
                    <div
                      key={index}
                      className='flex items-center p-2 rounded-md hover:bg-secondary/10 transition-colors group'
                    >
                      {/* Status Icon */}
                      <div className='mr-3'>
                        {courseStatusIcon(course.status)}
                      </div>
                      {/* Course details */}
                      <div className='flex-1'>
                        <span className='font-medium block'>
                          {course.title}
                        </span>
                        <p className='text-xs text-muted-foreground'>
                          {course.startDate} - {course.endDate}
                        </p>
                      </div>
                      <span className='text-sm font-semibold text-muted-foreground group-hover:text-accent transition-colors'>
                        {course.points} p
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className='mt-12 text-center'>
        <h2 className='mb-6 text-2xl font-semibold text-accent'>
          Get in Touch
        </h2>
        <div className='flex justify-center gap-6'>
          {/* Email */}
          <a
            href='mailto:jerryroyolsson@gmail.com'
            className='p-3 rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-md'
          >
            <Mail size={24} />
          </a>

          {/* GitHub */}
          <a
            href='https://github.com/JerRoyDev/'
            className='p-3 rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-md'
          >
            <Code2 size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/jerry-olsson-0b1a4228b/'
            className='p-3 rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-md'
          >
            <Linkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
