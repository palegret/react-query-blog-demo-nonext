import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wrapper, Main } from './components/styled';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Wrapper>
        <Sidebar />
        <Main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Welcome!</h1>
                </>
              }
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/:postId" element={<AdminPost />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </Main>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
