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

import { allSkills } from '../../components/AllSkills';
import { Course } from '../../types/Course';
import courses from '../../data/courses.json';
import Skill from '../../components/Skill';

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
    <div className='max-w-4xl p-6 mx-auto bg-background text-text'>
      <header className='mb-8 text-center'>
        <h1 className='mb-2 text-3xl font-bold text-accent'>Jerry Olsson</h1>
        <p className='text-xl text-secondary'>Software Developer</p>
      </header>

      <main>
        {/* ABOUT ME */}
        <section className='p-6 mb-6 rounded-lg shadow-md bg-primary'>
          <h2 className='flex items-center mb-4 text-2xl font-semibold text-accent'>
            <User className='mr-2 text-accent' /> About Me
          </h2>
          <p className='text-text'>
            I'm a creative and problem-solving software developer student from
            Piteå, Sweden, living with my wife and our two children. With a
            background in construction and industry, as well as a few years
            volunteering in Tanzania, I've also always had a deep interest in
            technology and IT. Now, I've taken the step to pursue what I'm truly
            passionate about, developing my skills in the tech world. <br />
            <br /> I consider myself a positive, curious individual who loves
            learning new things and grows with challenges. I'm excited about
            growing further and contributing wherever I can.
          </p>

          <div className='flex justify-end mt-2'>
            <a
              className='italic animate-pulse md:hover:scale-105 md:hover:animate-none'
              href='/jerry_olsson_cv.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Check out my CV
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section className='p-6 mb-6 rounded-lg shadow-md bg-primary'>
          <h2 className='flex items-center mb-4 text-2xl font-semibold text-accent'>
            <Code className='mr-2 text-accent' /> Skills
          </h2>
          <ul className='grid grid-cols-2 gap-4'>
            {allSkills.map((skill, index) => (
              <li
                key={index}
                className='flex p-2 text-sm rounded bg-background text-text'
              >
                <div className='flex justify-center w-5 mx-2 shrink-0'>
                  <Skill skill={skill} />
                </div>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* EDUCATION */}
        <section className='p-6 mb-6 rounded-lg shadow-md bg-primary'>
          <h2 className='flex items-center mb-4 text-2xl font-semibold text-accent'>
            <GraduationCap className='mr-2 text-accent' /> Education
          </h2>
          <ul className='space-y-4'>
            <li>
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-semibold text-text'>
                    Fullstack Developer Program
                  </h3>
                  <p className='text-secondary'>Chas Academy, Ongoing</p>
                </div>
                <div className=''>
                  <p className='text-md text-text'>
                    Completed: {completedPoints}/{totalPoints}
                  </p>
                </div>
              </div>
              <ul className='mt-4'>
                {updatedCourses.map((course, index) => (
                  <li key={index} className='flex mb-2 group'>
                    {/* Status Icon */}
                    <div>{courseStatusIcon(course.status)}</div>
                    {/* Course details */}
                    <div className='flex-1 group-hover:brightness-150 '>
                      <span className='font-medium text-text'>
                        {course.title}
                      </span>
                      <p className='text-sm text-secondary '>
                        {course.startDate} - {course.endDate}
                      </p>
                    </div>
                    <span className='ml-auto text-secondary brightness-125 group-hover:brightness-200'>
                      {course.points} p
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
      </main>

      <footer className='mt-8 text-center'>
        <h2 className='mb-4 text-2xl font-semibold text-accent'>
          Get in Touch
        </h2>
        <div className='flex justify-center space-x-4'>
          {/* Email */}
          <a
            href='mailto:jerryroyolsson@gmail.com'
            className='transition-colors duration-200 text-text hover:text-red-500'
          >
            <Mail size={24} />
          </a>

          {/* GitHub */}
          <a
            href='https://github.com/JerRoyDev/'
            className='transition-colors duration-200 text-text hover:text-gray-700'
          >
            <Code2 size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/jerry-olsson-0b1a4228b/'
            className='transition-colors duration-200 text-text hover:text-blue-600'
          >
            <Linkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
