import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

interface LayoutProps {
  children: any;
}

const IndexLayout = styled.div`
  .contact-text {
    font-weight: 400;
    font-size: 42px;
    margin: 5px 0;
  }
  .contact-container {
    margin-bottom: 100px;
  }
`;

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
    <IndexLayout>
      <Header/>
      {children}
      <Footer items={footerMenuItems}/>
    </IndexLayout>
  );
};

export default Layout;
