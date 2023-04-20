import { Box, Stack, Text, createStyles } from '@mantine/core';

import { useGetUserQuery } from '@/api/gamioApi';
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
      color: theme.colors.gray[0],
    },
  },
  upper: {
    position: 'absolute',
    top: 0,
    right: -24,
    fontSize: 14,
    fontWeight: 900,
    textTransform: 'uppercase',
    color: theme.fn.primaryColor(),
  },
  displayName: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#6F819C',
  },
}));

const UserInfo = () => {
  const { classes } = useStyles();
  const { data } = useGetUserQuery('0');

  if (!data) return null;

  return (
    <Box className={classes.root}>
      <UserAvatar avatarUrl={data.AvatarUrl} />
      <Stack spacing={8}>
        <Box pos="relative">
          <Text className={classes.fullName}>{data.Name}</Text>
          <Text className={classes.upper}>{data.level}</Text>
        </Box>
        <Text className={classes.displayName}>@{data.Username}</Text>
      </Stack>
    </Box>
  );
};
export default UserInfo;
