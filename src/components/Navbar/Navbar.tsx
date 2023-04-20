import { Group, rem } from '@mantine/core';

import NavbarLink from '@/components/Navbar/NavbarLink';

const links = [
  { path: '/', name: 'Overview' },
  { path: '/inventory', name: 'Inventory' },
  { path: '/settings', name: 'Settings' },
];

const Navbar = () => (
  <Group
    spacing={40}
    ml={{
      base: 0,
      xs: rem(260),
      sm: rem(280),
    }}
  >
    {links.map((link) => (
      <NavbarLink key={link.path} href={link.path} name={link.name} />
    ))}
  </Group>
);
export default Navbar;
