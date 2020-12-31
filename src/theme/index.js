import { writable } from 'svelte/store';

export const isDarkTheme = writable(true);

export const nextSizes = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl',
};

export function changeThemeVariables() {
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);

  const lightH = computedStyle.getPropertyValue("--light-h");
  const lightS = computedStyle.getPropertyValue("--light-s");
  const lightL = computedStyle.getPropertyValue("--light-l");
  const darkH = computedStyle.getPropertyValue("--dark-h");
  const darkS = computedStyle.getPropertyValue("--dark-s");
  const darkL = computedStyle.getPropertyValue("--dark-l");

  root.style.setProperty("--light-h", darkH);
  root.style.setProperty("--light-s", darkS);
  root.style.setProperty("--light-l", darkL);
  root.style.setProperty("--dark-h", lightH);
  root.style.setProperty("--dark-s", lightS);
  root.style.setProperty("--dark-l", lightL);
}