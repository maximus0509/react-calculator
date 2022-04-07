import React, { useState } from 'react';
import './App.scss';
import StandardLayout from './layouts/standard';
import ScientificLayout from './layouts/scientific';
import ProgrammerLayout from './layouts/programmer';
import { Mode } from './component/Mode/Mode';

function App() {
  const [layout, setLayout] = useLocalStorage<string>('layout', 'standard')
  return (
    <div className="App">
      <Mode />
      {/* <Mode layout={layout} onChangeMode={onChangeMode} /> */}
      <Layout layout={layout} />
    </div>
  );
}

function onChangeMode(e: any) {
  console.log(`App.onChangeMode()`, e)
}

interface LayoutProps {
  layout: string
}

function Layout(props: LayoutProps) {
  const { layout } = props

  if (layout == 'scientific') return <ScientificLayout />
  if (layout == 'programmer') return <ProgrammerLayout />
  return <StandardLayout />;
}

// Hook of localStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  /**
   * State to store our value
   * Pass initial state function to useState so logic is only executed once
   */
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.error(error);
      }
    }
    return initialValue;
  });

  /**
   * Return a wrapped version of useState's setter function that ...
   * ... persists the new value to localStorage
   */
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default App;
