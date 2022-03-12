import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer';
import Divider from '@mui/material/Divider';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Blog', url: '/blog' },
  { title: 'Project', url: '/project' },
  { title: 'Culture', url: '/profiles/gildong' },
  { title: 'Business', url: '/profiles/void' },
  { title: 'Politics', url: '/articles' },
  { title: 'FileUpload', url: '/fileUpload' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
];

const theme = createTheme();

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="WindRider" sections={sections} />
      </Container>
      <Footer
        title=""
        description="All pictures can be copied without permission. "
        copyrighter="playnote.pe.kr"
        linkUrl="http://www.playnote.pe.kr/"
      />
    </ThemeProvider>
  );
}
