import { createStyles } from '@mantine/core';
import { FC, useEffect, useRef } from 'react';

const useStyles = createStyles({
  image: {
    opacity: 0,
    transition: 'opacity 150ms ease-in-out',
    "&[data-fade-in='true']": {
      opacity: '1 !important',
    },
  },
});

type FadeInImageProps = {
  src: string;
  children: React.ReactNode;
};

const FadeInImage: FC<FadeInImageProps> = ({ src, children }) => {
  const { classes } = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      if (!ref.current) return;
      ref.current.dataset.fadeIn = 'true';
    };
  }, [src]);
  return (
    <div ref={ref} className={classes.image}>
      {children}
    </div>
  );
};
export default FadeInImage;
