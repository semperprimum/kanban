import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   /* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
    margin: 0;
    padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
    list-style: none;
}

a {
    text-decoration: inherit;
    color: inherit;
}

/* Set core root defaults */
html:focus-within {
    scroll-behavior: smooth;
}

/* Set core body defaults */
body {
    font-family: "Plus Jakarta Sans Variable", sans-serif;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: var(--clr-neutral-700);
    color: var(--clr-neutral-100);
    font-size: var(--fs-300);
}

html, body, #root{
    height: 100%;
}

main {
    height: calc(100% - 4rem);
    @media only screen and (min-width: 37.5em) {
        height: calc(100% - 5.5rem);
        display: flex;
        overflow: auto;
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // IE and Edge

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari and Opera
  }
    }
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
} 
:root {
    --clr-primary-100: hsla(242, 100%, 82%, 1);
    --clr-primary-200: hsla(242, 48%, 58%, 1);

    --clr-neutral-100: hsla(0, 0%, 100%, 1);
    --clr-neutral-200: hsla(220, 69%, 97%, 1);
    --clr-neutral-300: hsla(221, 69%, 94%, 1);
    --clr-neutral-400: hsla(216, 15%, 57%, 1);
    --clr-neutral-500: hsla(235, 12%, 27%, 1);
    --clr-neutral-600: hsla(235, 12%, 19%, 1);
    --clr-neutral-700: hsla(235, 16%, 15%, 1);
    --clr-neutral-800: hsla(237, 100%, 4%, 1);

    --clr-accent-100: hsla(0, 100%, 80%, 1);
    --clr-accent-200: hsla(0, 78%, 63%, 1);

    --fw-bold: 700;
    --fw-regular: 500;

    --fs-100: .75rem;
    --fs-200: .8125rem;
    --fs-300: .9375rem;
    --fs-400: 1.125rem;
    --fs-500: 1.125rem;

    @media only screen and (min-width: 37.5em) {
        --fs-500: 1.25rem;
    }
    @media only screen and (min-width: 60em) {
        --fs-500: 1.5rem
    }
}
`;

/* Mobile 
 0.75 Column Names, task tracking
 0.9375 Task names, add new column button
 0.8125 Task description
 1.125 Headings? Board name on mobile
*/

/* Tablet 
 Same as mobile, only the Board name is 1.25 now
*/

/* Desktop
 Board name is 1.5 now
*/
