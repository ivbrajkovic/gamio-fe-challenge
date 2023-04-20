import {
  Paper,
  Box,
  Text,
  Flex,
  UnstyledButton,
  createStyles,
} from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import { CardType } from '@/components/Card/type';

const useStyles = createStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    textAlign: 'center',
  },
}));

type ContentProps = {
  cardType: CardType;
  title: string;
};

const Content: FC<ContentProps> = ({ cardType, title }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Text mb={8} px={8} p={4.5} fw={600} fz="sm" lh="15px" bg="green.2">
        {cardType}
      </Text>
      <Text mb={26} fw={900} fz={18} lh="20px" transform="uppercase">
        {title}
      </Text>
    </Box>
  );
};
export default Content;
