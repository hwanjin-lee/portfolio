import { useEffect, useState, useRef } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { handleSeeMore } from '../components/tools/seeMore';

function MyApp({ Component, pageProps }) {
  //===========================================================================================
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [minimizedState, setMinimizedState] = useState(false);
  const [fullPicture, setFullPicture] = useState(false);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of darkmode to dark
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        // Set value of darkmode to light
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === 'dark');
  }, []);


  //===========================================================================================
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const navHeader = [
    {
      headerTitle: "Home",
      headerRef: section1Ref,
      headerID: "home",
    },
    {
      headerTitle: "About",
      headerRef: section2Ref,
      headerID: "about",
    },
    {
      headerTitle: "Work",
      headerRef: section3Ref,
      headerID: "work",
    },
    {
      headerTitle: "Blog",
      headerRef: section4Ref,
      headerID: "blog",
    },
  ];
  //===========================================================================================

  return (
    <Layout 
      onToggle={handleToggle} 
      darkTheme={darkTheme} 
      navHeader={navHeader} 
      minimizedState={minimizedState} 
      setMinimizedState={setMinimizedState}
      fullPicture={fullPicture}
      setFullPicture={setFullPicture}
      >
      <Component 
        {...pageProps} 
        section1Ref={section1Ref} 
        section2Ref={section2Ref} 
        section3Ref={section3Ref} 
        section4Ref={section4Ref}
        onComment={() => handleSeeMore(minimizedState, setMinimizedState)}
      />
    </Layout>
  )
}

export default MyApp
