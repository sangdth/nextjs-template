'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import { type ReactNode, useMemo } from 'react';
import {
  BarChartIcon,
  DashboardIcon,
  EditIcon,
  GlobeIcon,
  ImageIcon,
  SitemapIcon,
} from '@/icons';
import { IS_PRODUCTION } from '@/utils/constants';
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorModeValue,
} from '@/components/chakra';

import { NextLink } from '../NextLink';
import { Logo } from '../Logo';

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const segments = useSelectedLayoutSegments();

  const tabs = useMemo(() => {
    if (segments[0] === 'dashboard') {
      return [
        {
          name: 'Overview',
          href: '/dashboard',
          icon: <DashboardIcon boxSize={4} />,
          isActive: !segments[1],
        },
        {
          name: 'Pages',
          href: '/dashboard/pages',
          icon: <SitemapIcon boxSize={4} />,
          isActive: segments.includes('pages'),
        },
        {
          name: 'Posts',
          href: '/dashboard/posts',
          icon: <EditIcon boxSize={4} />,
          isActive: segments.includes('posts'),
        },
        {
          name: 'Files',
          href: '/dashboard/files',
          icon: <ImageIcon boxSize={4} />,
          isActive: segments.includes('files'),
        },
      ];
    }

    return [
      {
        name: 'Overview',
        href: '/',
        isActive: segments.length === 0,
        icon: <BarChartIcon boxSize={4} />,
      },
      {
        name: 'Sites',
        href: '/sites',
        isActive: segments[0] === 'sites',
        icon: <GlobeIcon boxSize={4} />,
      },
    ];
  }, [segments]);

  const backgroundColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <Flex
      direction="column"
      width={{ sm: '240px', lg: '420px' }}
      height="100vh"
      justify="space-between"
      background={backgroundColor}
      padding={4}
    >
      <Box>
        <Logo />

        <Stack marginTop={6} spacing={1}>
          {tabs.map(({ name, href, icon, isActive }) => (
            <Button
              key={name}
              colorScheme={isActive ? 'green' : 'gray'}
              variant={isActive ? 'solid' : 'ghost'}
              justifyContent="start"
              leftIcon={icon}
              width="100%"
              as={NextLink}
              href={href}
              size="sm"
            >
              {name}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box>{children}</Box>
    </Flex>
  );
};
