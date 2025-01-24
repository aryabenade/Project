// Layout component in app/
'use client';

import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import './styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
   
  );
};

export default Layout;

