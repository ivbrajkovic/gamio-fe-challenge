import { Paper, Text, createStyles } from '@mantine/core';
import { Image } from '@mantine/core';
import { FC, useState } from 'react';

import { InventoryItem } from '@/api/gamioApi';
import Badge from '@/components/Card/components/Badge';
import Button from '@/components/Card/components/CodeButton';
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

type CardProps = InventoryItem;

const getCardType = (item: InventoryItem): CardType =>
  item.shipped
    ? CardType.Shipped
    : item.used
    ? CardType.Used
    : item.claimed
    ? CardType.Claimed
    : CardType.Owned;

const Card: FC<CardProps> = (props) => {
  const { cx, classes } = useStyles();
  const cardType = useState(() => getCardType(props))[0];
  return (
    <Paper className={cx(classes.root, classes[cardType])}>
      <Image
        withPlaceholder
        mb={24}
        width={220}
        height={220}
        alt="inventory-image"
        src={props.image_url}
      />
      <Badge cardType={cardType} />
      <Text className={classes.title}>{props.title}</Text>
      <Button type={props.type} code={props.code} />
    </Paper>
  );
};
export default Card;
