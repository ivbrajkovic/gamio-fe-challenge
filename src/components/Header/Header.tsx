import { createStyles, Box, Divider } from '@mantine/core';

import { Navbar } from '@/components/Navbar';
import { UserInfo } from '@/components/UserInfo';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    paddingTop: 83,
    minHeight: 200,

    marginBottom: 151,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',

    [theme.fn.largerThan('xs')]: {
      alignItems: 'flex-start',
      minHeight: 500,
    },
  },
}));

const Hero = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <Divider pos="absolute" bottom={0} w="100%" />
      <Box
        sx={(theme) => ({
          ...theme.fn.cover(),
          height: 136,
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80)',
          backgroundSize: 'cover',
          [theme.fn.largerThan('xs')]: {
            minHeight: 500,
          },
        })}
      />
      <UserInfo />
      <Navbar />
    </div>
  );
};
export default Hero;
