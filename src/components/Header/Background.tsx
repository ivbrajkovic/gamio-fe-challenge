import { Box } from '@mantine/core';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80';

const Background = () => (
  <Box
    sx={(theme) => ({
      ...theme.fn.cover(),
      height: 136,
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${IMAGE_URL})`,
      backgroundSize: 'cover',
      [theme.fn.largerThan('xs')]: {
        minHeight: '100%',
      },
    })}
  />
);
export default Background;
