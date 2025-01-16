import profilePic from '../../assets/profile.jpg';
import AllSkills from '../../components/AllSkills';

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col h-full place-content-evenly'>
        <div className='w-full px-4 py-8 mx-auto rounded-lg shadow-gray-900'>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <div className='mb-2 mr-1 md:mb-0 md:w-1/3'>
              <img
                src={profilePic}
                alt='Picture of me'
                className='object-cover w-64 h-64 mx-auto rounded-full'
              />
            </div>
            <div className='md:w-1/2'>
              <h1 className='inline-block font-extrabold text-[clamp(2.5rem,6vw,6rem)]'>
                Hi!
              </h1>
              <div>
                <p className='inline-block bg-clip-text bg-gradient-to-l from-purple-500 to-blue-500 font-bold text-[clamp(1.5rem,5vw,5rem)] text-transparent leading-normal'>
                  I'm Jerry,
                </p>
              </div>
              <div>
                <p className='text-[clamp(1rem,3vw,1.5rem)] whitespace-nowrap'>
                  <span className='font-bold text-[clamp(1.5rem,4vw,3rem)] text-accent'>
                    Software Developer
                  </span>
                </p>
                <p className='font-semibold text-[clamp(1rem,3vw,1.5rem)] text-gray-700 italic'>
                  Ready to learn and contribute in any way I can.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <AllSkills />
        </div>
      </div>
    </>
  );
};

export default HomePage;
