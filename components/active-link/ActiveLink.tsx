'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

type Props = {
  href: string;
  children?: React.ReactNode;
};

const ActiveLink = (route: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={route.href}
      key={route.href}
      className={`${style.link} ${
        pathname === route.href ? style['active-link'] : ''
      }`}
    >
      {route.children}
    </Link>
  );
};

export default ActiveLink;
