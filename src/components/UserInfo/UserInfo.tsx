import { Box, Stack, Text, createStyles } from '@mantine/core';
import { FC } from 'react';

import UserAvatar from '@/components/UserInfo/UserAvatar';

const useStyles = createStyles((theme) => ({
  root: {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    marginBottom: 40,

    [theme.fn.largerThan('xs')]: {
      flexDirection: 'row',
      marginBottom: 36,
      gap: 29,
    },
  },
  fullName: {
    fontSize: 24,
    lineHeight: '29px',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#143757',
    [theme.fn.largerThan('xs')]: {
      color: '#fff',
    },
  },
  upper: {
    position: 'absolute',
    top: 0,
    right: -24,
    fontSize: 14,
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#4175FA',
  },
  displayName: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#6F819C',
  },
}));

type UserInfoProps = {};

const UserInfo: FC<UserInfoProps> = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <UserAvatar />
      <Stack spacing={8}>
        <Box pos="relative">
          <Text className={classes.fullName}>gud boi</Text>
          <Text className={classes.upper}>24</Text>
        </Box>
        <Text className={classes.displayName}>@gudboi45</Text>
      </Stack>
    </Box>
  );
};
export default UserInfo;
