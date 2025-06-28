import { MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { ConvexClient } from 'convex/browser';
import { Suspense } from 'solid-js';

import { ConvexContext } from './convex.ts';

import Nav from './components/Nav.tsx';
import './app.css';

export default function App() {
  const convex = new ConvexClient(import.meta.env.VITE_CONVEX_URL);

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <ConvexContext.Provider value={convex}>
            <Title>Solid Convex Base</Title>
            <Nav />
            <Suspense>{props.children}</Suspense>
          </ConvexContext.Provider>
        </MetaProvider>
      )}>
      <FileRoutes />
    </Router>
  );
}
