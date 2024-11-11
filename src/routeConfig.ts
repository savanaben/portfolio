import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import MainPage from './MainPage';  // Import MainPage from MainPage.tsx
import Project1 from './projects/Project1';
import TestletDesignSystem from './projects/TestletDesignSystem';
import AffordableHousing from './projects/AffordableHousing';
import MathMania from './projects/MathMania';
import TestDesign from './projects/TestDesign';
import DigitalWork from './projects/DigitalWork';
import ScienceFictionDataViz from './projects/ScienceFictionDataViz';
import DrawProbability from './projects/DrawProbability';
import MuseumMania from './projects/MuseumMania';
import Maps from './projects/Maps';


interface RouteConfig {
  path: string;
  element: React.ComponentType;
  backgroundColor: string;
  fullWidth?: boolean;
}

const routeConfig: RouteConfig[] = [
  { path: '/', element: MainPage, backgroundColor: '#f3f4f6' },
  { path: '/project1', element: Project1, backgroundColor: '#f3f4f6' },
  { path: '/design-system', element: TestletDesignSystem, backgroundColor: '#ffffff' },
  { path: '/affordable-housing-viz', element: AffordableHousing, backgroundColor: '#fff9ef', fullWidth: true },
  { path: '/MathMania', element: MathMania, backgroundColor: '#ffffff', fullWidth: true },
  { path: '/TestDesign', element: TestDesign, backgroundColor: '#fff9ef', fullWidth: true },
  { path: '/DigitalWork', element: DigitalWork, backgroundColor: '#f3f4f6', fullWidth: true },
  { path: '/DrawProbability', element: DrawProbability, backgroundColor: '#fff9ef', fullWidth: true },
  { path: '/ScienceFictionDataViz', element: ScienceFictionDataViz, backgroundColor: '#fff9ef', fullWidth: true },
  { path: '/MuseumMania', element: MuseumMania, backgroundColor: '#FCF0F0', fullWidth: true },
  { path: '/Maps', element: Maps, backgroundColor: '#f3f4f6', fullWidth: true },



];

export default routeConfig;