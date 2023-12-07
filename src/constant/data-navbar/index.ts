import {
  LuHome, LuUser2, LuNewspaper, LuLayout, LuMailbox, LuPuzzle, LuLayoutDashboard,
} from 'react-icons/lu';

const dataNavbar = [
  {
    title: 'Home',
    pathname: '/',
    Icon: LuHome,
  },
  {
    title: 'About',
    pathname: '/about',
    Icon: LuUser2,
  },
  {
    title: 'Projects',
    pathname: '/projects',
    Icon: LuLayout,
  },
  {
    title: 'Blog',
    pathname: '/blog',
    Icon: LuNewspaper,
  },
  {
    title: 'Contact',
    pathname: '/contact',
    Icon: LuMailbox,
  },
  {
    title: 'Entertaiment',
    pathname: '/entertaiment',
    Icon: LuPuzzle,
  },
  {
    title: 'Dashboard',
    pathname: '/dashboard',
    Icon: LuLayoutDashboard,
  },
];

export default dataNavbar;
