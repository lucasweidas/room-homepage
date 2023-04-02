import { useState, useEffect } from 'react';
import Header from './components/header';
import Main from './components/main';

const isLargeSize = window.innerWidth >= 1024;

export default function App() {
  const [isLarge, setIsLarge] = useState(isLargeSize);

  useEffect(() => {
    function handleChange({ matches }) {
      setIsLarge(matches);
    }

    window.matchMedia('(min-width: 64rem)').addEventListener('change', handleChange);

    () => {
      window.matchMedia('(min-width: 64rem)').removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div>
      <Header isLarge={isLarge} />
      <Main isLarge={isLarge} />
    </div>
  );
}
