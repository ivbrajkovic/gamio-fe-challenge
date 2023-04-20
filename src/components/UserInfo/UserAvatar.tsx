import { Box, Flex, createStyles, rem } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import { FC } from 'react';

import rectBlue from '@/assets/img/rect-blue.svg';

const useStyles = createStyles((theme) => ({
  rect: {
    display: 'none',
    position: 'absolute',
    zIndex: 0,
    top: -30,
    left: 0,
    [theme.fn.largerThan('xs')]: {
      display: 'block',
    },
  },
  avatarContainer: {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    width: 102,
    height: 102,
    borderRadius: '50%',
    color: theme.fn.primaryColor(),
    backgroundColor: theme.colors.gray[0],

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.fn.largerThan('xs')]: {
      marginLeft: rem(64),
      width: 160,
      height: 160,
    },

    [theme.fn.largerThan('sm')]: {
      marginLeft: rem(90),
    },
  },
}));

type UserAvatarProps = {
  avatarUrl: string | undefined;
};

const UserAvatar: FC<UserAvatarProps> = ({ avatarUrl }) => {
  const { classes } = useStyles();
  return (
    <Flex pos="relative">
      <Image src={rectBlue} alt="" className={classes.rect} />
      <Box className={classes.avatarContainer}>
        {avatarUrl ? (
          <Image fill src={avatarUrl} alt="" />
        ) : (
          <IconUser width="80%" height="80%" />
        )}
      </Box>
    </Flex>
  );
};
export default UserAvatar;
