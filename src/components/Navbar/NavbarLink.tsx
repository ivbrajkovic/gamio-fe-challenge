import { Anchor, Text, createStyles } from '@mantine/core';
import { motion } from 'framer-motion';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

const useStyles = createStyles((theme) => ({
  link: {
    paddingBottom: 16,
    position: 'relative',
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
  text: {
    lineHeight: '17px',
    fontSize: 14,
    fontWeight: 600,
    color: '#6F819C',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease',

    '&[data-active="true"]': {
      color: '#143757',
    },

    [theme.fn.largerThan('xs')]: {
      color: '#C9D3E1',

      '&[data-active="true"]': {
        color: '#FFFFFF',
      },
    },
  },
  underline: {
    position: 'absolute',
    left: -8,
    right: -8,
    bottom: 0,
    height: 5,
    backgroundColor: '#FC6947',
  },
}));

type NavbarLinkProps = {
  href: string;
  name: string;
  as?: Url;
};
const NavbarLink: FC<NavbarLinkProps> = ({ href, name, as }) => {
  const [active, setActive] = useState(false);
  const linkRef = useRef<HTMLDivElement>(null);
  const { asPath, isReady } = useRouter();
  const { classes } = useStyles();

  useEffect(() => {
    if (!linkRef.current || !isReady) return;
    const activePathname = new URL(asPath, location.href).pathname;
    const url = (as || href) as string;
    const linkPathname = new URL(url, location.href).pathname;
    const isActive = linkPathname === activePathname;
    linkRef.current.dataset.active = `${isActive}`;
    setActive(isActive);
  }, [asPath, isReady, as, href]);

  return (
    <Anchor component={Link} as={as} href={href} className={classes.link}>
      <Text ref={linkRef} className={classes.text}>
        {name}
      </Text>
      {active ? (
        <motion.div layoutId="underline" className={classes.underline} />
      ) : null}
    </Anchor>
  );
};

export default NavbarLink;
