import { Container, Text } from '@mantine/core';
import { FC } from 'react';

type PageTitleProps = {
  title?: string;
};

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <Container
      mb={36}
      size="xl"
      display={{
        base: 'none',
        xs: 'block',
      }}
    >
      <Text fz={24} fw={900} lh="30px" transform="uppercase">
        {title}
      </Text>
    </Container>
  );
};
export default PageTitle;
