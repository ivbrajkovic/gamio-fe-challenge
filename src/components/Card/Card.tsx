import { Paper, Text, createStyles } from '@mantine/core';
import { Image } from '@mantine/core';
import { FC } from 'react';

import Badge from '@/components/Card/components/Badge';
import CodeButton from '@/components/Card/components/CodeButton';
import { CardType } from '@/components/Card/type';

const useStyles = createStyles({
  root: {
    width: 280,
    height: 420,
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1.1,
  },

  Claimed: {
    boxShadow: '0px 6px 16px rgba(177, 181, 188, 0.2);',
  },
  Owned: {
    boxShadow: '0px 6px 16px rgba(177, 181, 188, 0.2);',
  },
  Used: {
    backgroundColor: '#F7F7F7',
  },
  Shipped: {
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderStyle: 'solid',
    borderImage: 'linear-gradient(to right, #4275FA, #FC6947) 1',
    boxShadow: '0px 6px 16px rgba(177, 181, 188, 0.2);',
  },
});

type CardProps = {
  imageUrl: string;
  title: string;
  cardType: CardType;
};

const Card: FC<CardProps> = (props) => {
  const { cx, classes } = useStyles();
  return (
    <Paper className={cx(classes.root, classes[props.cardType])}>
      <Image
        withPlaceholder
        mb={24}
        width={220}
        height={220}
        alt="inventory-image"
        src={props.imageUrl}
      />
      <Badge cardType={props.cardType} />
      <Text className={classes.title}>{props.title}</Text>
      <CodeButton cardType={props.cardType} label="AP345CNfjf03..." />
    </Paper>
  );
};
export default Card;
