import { Text, createStyles } from '@mantine/core';
import { FC } from 'react';

import { CardType } from '@/components/Card/type';

const useStyles = createStyles((theme) => ({
  root: {
    marginBottom: 8,
    paddingInline: 8,
    paddingBlock: 4.5,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    borderRadius: 4,
  },
  Claimed: {
    borderRadius: 4,
    color: '#85EE00',
    backgroundColor: 'rgba(133, 238, 0, 0.1)',
  },
  Owned: {
    borderRadius: 4,
    color: '#FFFFFF',
    backgroundColor: theme.fn.primaryColor(),
  },
  Used: {
    borderRadius: 4,
    color: '#6F819C',
    backgroundColor: '#E5E5E5',
  },
  Shipped: {
    color: '#143757',
  },
}));

type BadgeProps = {
  label?: string;
  cardType: CardType;
};

const Badge: FC<BadgeProps> = ({ label, cardType }) => {
  const { cx, classes } = useStyles();
  return (
    <Text className={cx(classes.root, classes[cardType])}>
      {CardType[cardType]}
      {label}
    </Text>
  );
};
export default Badge;
