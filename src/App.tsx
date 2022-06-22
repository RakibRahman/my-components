
import './App.css';
import { Composition } from './composition/Composition';
import { Posts } from './Posts';
import { Input } from './forward-ref/Input'
import { Post } from './Post/Post'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { useRef } from 'react'
function App() {
  const ref = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  }
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">
        <Post />
        {/* <Composition />
        <Input label="Name" ref={ref} placeholder="First Name" />
        <button onClick={focusInput}>Focus</button> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
