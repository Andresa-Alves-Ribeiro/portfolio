
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1280,
};


export const CAROUSEL_CONFIG = {
  MOBILE: {
    visibleCards: 3,
    inactiveWidth: 80,
    activeWidth: 280,
    height: 400,
  },
  TABLET_SMALL: {
    visibleCards: 5,
    inactiveWidth: 100,
    activeWidth: 350,
    height: 500,
  },
  TABLET: {
    visibleCards: 7,
    inactiveWidth: 120,
    activeWidth: 400,
    height: 550,
  },
  DESKTOP: {
    visibleCards: 10,
    inactiveWidth: 180,
    activeWidth: 500,
    height: 600,
  },
};


export const FONT_SIZES = {
  MOBILE: {
    active: '1.5rem',
    inactive: '0.875rem',
  },
  TABLET_SMALL: {
    active: '2rem',
    inactive: '1rem',
  },
  TABLET: {
    active: '3rem',
    inactive: '1.5rem',
  },
  DESKTOP: {
    active: '4rem',
    inactive: '1.5rem',
  },
};


export const getBreakpoint = (width) => {
  if (width < BREAKPOINTS.MOBILE) return 'MOBILE';
  if (width < BREAKPOINTS.TABLET) return 'TABLET_SMALL';
  if (width < BREAKPOINTS.DESKTOP) return 'TABLET';
  return 'DESKTOP';
};


export const getCarouselConfig = (width) => {
  const breakpoint = getBreakpoint(width);
  return CAROUSEL_CONFIG[breakpoint] || CAROUSEL_CONFIG.DESKTOP;
};


export const getFontSize = (width, isActive) => {
  const breakpoint = getBreakpoint(width);
  const sizes = FONT_SIZES[breakpoint] || FONT_SIZES.DESKTOP;
  return isActive ? sizes.active : sizes.inactive;
};
