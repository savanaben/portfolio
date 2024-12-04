import React from 'react';
import { Group, Burger, Drawer, Stack, CloseButton } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

interface NavLink {
  link: string;
  label: string;
}

const links: NavLink[] = [
  { link: 'about', label: 'About' },
  { link: 'projects', label: 'Projects' },
  { link: 'experience', label: 'Experience' },
  { link: 'contact', label: 'Contact' },
];

const HEADER_HEIGHT = 80; // Adjust this value to match your header's height


// Create a reusable social icons component
const SocialIcons = () => (
  <div className="flex gap-2">
    <a
      href="https://www.linkedin.com/in/benjamin-gross-762b761b5/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-500"
      aria-label="LinkedIn Profile"
    >
      <FontAwesomeIcon icon={faLinkedin} size="lg" />
    </a>
    <a
      href="https://github.com/savanaben"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-500"
      aria-label="GitHub Profile"
    >
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </a>
  </div>
);

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


  const handleNameClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('about');
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate('/', { state: { scrollTo: 'about' } });
    }
  };

  return (
    <header className={`${classes.header} w-full`}>
      <div className="container mx-auto lg:pl-10 lg:pr-7 md:pl-10 md:pr-7 px-4 max-w-7xl">
        <div className={`${classes.inner} flex justify-between items-center`}>
          <Link to="/" onClick={handleNameClick} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className="text-2xl font-bold" style={{ color: '#00719c' }}>Ben Gross</h1>
          </Link>
          <Group gap="sm" visibleFrom="sm" className={classes.group} wrap="nowrap">
            {items}
            <div className="ml-2">
              <SocialIcons />
            </div>
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
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
          <div className="flex justify-center mt-2">
            <SocialIcons />
          </div>
        </Stack>
      </Drawer>
    </header>
  );
}