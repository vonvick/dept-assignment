import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: any;
}

const footerMenuItems = [
  {
    name: 'work',
    path: '/'
  },
  {
    name: 'service',
    path: '/'
  },
  {
    name: 'stories',
    path: '/'
  },
  {
    name: 'about',
    path: '/'
  },
  {
    name: 'careers',
    path: '/'
  },
  {
    name: 'contact',
    path: '/'
  },
];

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <Header/>
      {children}
      <Footer items={footerMenuItems}/>
    </div>
  );
};

export default Layout;
