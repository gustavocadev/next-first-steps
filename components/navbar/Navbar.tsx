import { HomeIcon } from '@primer/octicons-react';
import ActiveLink from '../active-link/ActiveLink';
import Link from 'next/link';

const Navbar = () => {
  const routes = [
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    {
      name: 'Pricing',
      path: '/pricing',
    },
  ];

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex-1 flex items-center gap-1" href="/">
        <HomeIcon />
        Home
      </Link>

      <div className="flex gap-4">
        {routes.map((route) => {
          return (
            <ActiveLink href={route.path} key={route.path}>
              {route.name}
            </ActiveLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
