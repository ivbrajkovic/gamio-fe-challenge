import { Container, Loader, SimpleGrid, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import { NextPage } from 'next';
import { useEffect } from 'react';

import { useGetInventoryQuery } from '@/api/gamioApi';
import { Card } from '@/components/Card';
import { Head } from '@/components/Head';
import { PageTitle } from '@/components/PageTitle';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (err: any) =>
  notifications.show({
    title: 'Something went wrong',
    message: err.data?.message || err.message,
    icon: <IconX size="1.1rem" />,
    color: 'red',
  });

const Inventory: NextPage = () => {
  // TODO: add pagination
  const { data, isLoading, error } = useGetInventoryQuery({
    limit: 25,
    offset: 0,
    shuffle: false,
  });

  useEffect(() => {
    error && handleError(error);
  }, [error]);

  return (
    <>
      <Head />
      <PageTitle title="Inventory" />

      <Container size="xl" ta="center">
        {isLoading ? (
          <Loader mt="xl" />
        ) : !data ? (
          <Text mt="xl">No data to display</Text>
        ) : (
          <SimpleGrid
            cols={4}
            spacing={36}
            breakpoints={[
              { maxWidth: 'lg', cols: 3, spacing: 'lg' },
              { maxWidth: 'md', cols: 2, spacing: 'md' },
              { maxWidth: 'xs', cols: 1, spacing: 'xs' },
            ]}
            sx={{ justifyItems: 'center' }}
          >
            {data?.list.map((item) => (
              <Card key={item.Id} {...item} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
};
export default Inventory;
