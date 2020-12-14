import Header from './Header';

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
