import { createStyles, Divider } from '@mantine/core';

import Background from '@/components/Header/Background';
import { Navbar } from '@/components/Navbar';
import { UserInfo } from '@/components/UserInfo';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'relative',
    marginBottom: 36,
    paddingTop: 83,
    minHeight: 200,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',

    [theme.fn.largerThan('xs')]: {
      alignItems: 'flex-start',
      minHeight: 500,
      marginBottom: 152,
    },
  },
}));

const Header = () => {
  const { classes } = useStyles();
  return (
    <header className={classes.header}>
      <Divider pos="absolute" bottom={0} w="100%" />
      <Background />
      <UserInfo />
      <Navbar />
    </header>
  );
};
export default Header;
