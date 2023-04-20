import { Flex, createStyles, rem } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import avatarDefault from '@/assets/img/avatar-default.png';
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
  avatar: {
    zIndex: 1,
    width: 102,
    height: 102,
    borderRadius: '50%',

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

type UserAvatarProps = {};

const UserAvatar: FC<UserAvatarProps> = () => {
  const { classes } = useStyles();
  return (
    <Flex pos="relative">
      <Image src={rectBlue} alt="" className={classes.rect} />
      <Image src={avatarDefault} alt="" className={classes.avatar} />
    </Flex>
  );
};
export default UserAvatar;
