import {
  CopyButton,
  ActionIcon,
  Tooltip,
  Box,
  Text,
  Button as MantineButton,
  createStyles,
} from '@mantine/core';
import Image from 'next/image';
import { FC } from 'react';

import { InventoryItem } from '@/api/gamioApi';
import barcodeIcon from '@/assets/icons/barcode.svg';
import copyIcon from '@/assets/icons/copy.svg';

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
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr auto',
    paddingLeft: '6px',
    paddingRight: '3px',
    alignSelf: 'stretch',
    background: '#EEF3FF',
    borderRadius: '0px 3px 3px 0px',
    color: '#6F819C',
  },
});

type ButtonProps = {
  type: InventoryItem['type'];
  code: InventoryItem['code'];
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ type, code, onClick }) => {
  const { classes } = useStyles();

  if (type === 'hardware')
    return (
      <MantineButton fullWidth size="md" onClick={onClick}>
        <Text fz={12} fw={600} lh={1.25}>
          ORDER SHIPPING
        </Text>
      </MantineButton>
    );

  if (type === 'code')
    return (
      <Box className={classes.root}>
        <Image src={barcodeIcon} alt="" />
        <Text>Code</Text>
        <Box className={classes.inner}>
          <Text truncate>{code}</Text>
          <CopyButton value={code} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                withArrow
                position="right"
                label={copied ? 'Copied' : 'Copy'}
              >
                <ActionIcon variant="transparent" onClick={copy}>
                  <Image alt="" src={copyIcon} />
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Box>
      </Box>
    );

  return null;
};
export default Button;
