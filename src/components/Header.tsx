import React from 'react';
import { Group, Burger, Drawer, Stack, CloseButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

interface NavLink {
  link: string;
  label: string;
}

const links: NavLink[] = [
  { link: 'projects', label: 'Projects' },
  { link: 'experience', label: 'Experience' },
  { link: 'about', label: 'About' },
];

const HEADER_HEIGHT = 80; // Adjust this value to match your header's height

export function HeaderResponsive(): JSX.Element {
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(link);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/', { state: { scrollTo: link } });
    }
    close();
  };

 const items = links.map((link) => (
    <button
      key={link.label}
      className={`${classes.link} w-full text-left`}
      onClick={() => handleNavClick(link.link)}
    >
      {link.label}
    </button>
  ));

  return (
    <header className={`${classes.header} w-full`}>
      <div className="container mx-auto px-4">
        <div className={`${classes.inner} flex justify-between items-center`}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Ben Gross</h1>
          </Link>
          <Group gap="sm" visibleFrom="xs" className={classes.group} wrap="nowrap">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </div>
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        size="auto"
        position="right"
        padding="0"
        hiddenFrom="xs"
        zIndex={1000000}
        withCloseButton={false}
        styles={{
          body: {
            padding: 0,
          },
          content: {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <div className="flex justify-end items-center h-12 px-4">
          <CloseButton onClick={close} size="lg" />
        </div>
        <Stack gap="lg" p="md">
          {items}
        </Stack>
      </Drawer>
    </header>
  );
}