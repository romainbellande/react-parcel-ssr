import React from 'react'
import Index from './pages';
import { BrowserRouter } from 'react-router-dom'
import { hydrate, render } from 'react-dom';

const App = (
  <BrowserRouter>
  <Index />
  </BrowserRouter>
)

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(App, rootElement);
} else {
  render(App, rootElement);
}