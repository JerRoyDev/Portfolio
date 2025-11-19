import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-card text-text'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='text-xl font-bold'>
              My Portfolio
            </Link>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link to='/' className='hover:bg-secondary px-3 py-2 rounded-md'>
                Home
              </Link>
              <Link
                to='/projects'
                className='hover:bg-secondary px-3 py-2 rounded-md'
              >
                Projects
              </Link>
              <Link
                to='/about'
                className='hover:bg-secondary px-3 py-2 rounded-md'
              >
                About Me
              </Link>
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/'
              className='block hover:bg-secondary px-3 py-2 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to='/projects'
              className='block hover:bg-secondary px-3 py-2 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to='/about'
              className='block hover:bg-secondary px-3 py-2 rounded-md'
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
