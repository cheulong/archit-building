export type MenuItem = {
  id: string;
  title: string;
  to: string;
};

export const navLink: Array<MenuItem> = [
  {
    id: 'home',
    title: 'Home',
    to: '/',
  },
  {
    id: 'about',
    title: 'About us',
    to: '/about',
  },
  {
    id: 'featured',
    title: 'Featured',
    to: '/featured',
  },
  {
    id: 'project',
    title: 'Project',
    to: '/project',
  },
  {
    id: 'contact',
    title: 'Contact',
    to: '/contact',
  },
];
