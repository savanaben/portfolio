import React, { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const links = [
  { link: '#projects', label: 'Projects' },
  { link: '#experience', label: 'Experience' },
  { link: '#about', label: 'About' },
];

export function HeaderResponsive() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        const element = document.querySelector(link.link);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {link.label}
    </a>
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