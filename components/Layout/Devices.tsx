export const breakpoints = {
    sm: 550,
    md: 992,
    lg: 1441,
    xl: 1920
  };
  
  export const mediaQueries = (key: keyof typeof breakpoints) => {
    return (style: TemplateStringsArray | String) =>
      `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
  };
  