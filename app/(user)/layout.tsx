import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        {/* Add your header content here */}
        herrrr
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-100 p-4">
        {/* Add your footer content here */}
        herrrr
      </footer>
    </div>
  );
};

export default Layout;