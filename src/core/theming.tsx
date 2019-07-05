import { createTheming } from '@callstack/react-theme-provider';
import DefaultTheme from '../styles/DefaultTheme';
import { Theme } from '../types';

export const { useTheme, ThemeProvider, withTheme } = createTheming<Theme>(DefaultTheme);
