import React from 'react';
import { Container, Group, Burger } from '@mantine/core';
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
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (link: string) => {
    if (location.pathname === '/') {
      // If already on the homepage, scroll to the section with offset
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
      // If on another page, navigate to homepage with state
      navigate('/', { state: { scrollTo: link } });
    }
  };

  const items = links.map((link) => (
    <button
      key={link.label}
      className={classes.link}
      onClick={() => handleNavClick(link.link)}
    >
      {link.label}
    </button>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Ben Gross</h1>
        </Link>
        <Group gap={5} visibleFrom="xs" className={classes.group}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}