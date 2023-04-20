import { Box, Text, Button, createStyles } from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import barcodeIcon from '@/assets/icons/barcode.svg';
import copyIcon from '@/assets/icons/copy.svg';
import { CardType } from '@/components/Card/type';

const useStyles = createStyles({
  root: {
    alignSelf: 'stretch',
    height: 40,
    padding: '2px 2px 2px 8px',

    display: 'flex',
    alignItems: 'center',
    gap: 8,

    border: '1px solid #E5E5E5',
    borderRadius: 4,

    fontSize: 12,
    fontWeight: 600,
    lineHeight: '15px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  inner: {
    flex: 1,
    gap: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 10px',
    alignSelf: 'stretch',
    background: '#EEF3FF',
    borderRadius: '0px 3px 3px 0px',
    color: '#6F819C',
  },
  copyIcon: {
    cursor: 'pointer',
  },
});

type CodeButtonProps = {
  cardType: CardType;
  label: string;
  onClick?: () => void;
};

const CodeButton: FC<CodeButtonProps> = ({ cardType, label, onClick }) => {
  const { classes } = useStyles();

  if (cardType === CardType.Shipped) return null;
  if (cardType === CardType.Owned)
    return (
      <Button fullWidth size="md">
        <Text fz={12} fw={600} lh={1.25}>
          ORDER SHIPPING
        </Text>
      </Button>
    );
  return (
    <Box className={classes.root}>
      <Image src={barcodeIcon} alt="" />
      <Text>Code</Text>
      <Box className={classes.inner}>
        <Text>{label}</Text>
        <Image
          alt=""
          src={copyIcon}
          className={classes.copyIcon}
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};
export default CodeButton;
