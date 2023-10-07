import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainPage from './components/MainPage.jsx';


const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <MainPage/>
    </QueryClientProvider>
  );


export default App;