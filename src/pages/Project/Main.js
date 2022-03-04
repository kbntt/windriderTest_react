import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Sidebar from './../../components/Sidebar';
import TopMain from '../../components/Markdowns';

const theme = createTheme();

export default function Main() {
  const [fileNames, setFileNames] = useState([
    {
      id: 1,
      fileName: 'File/Project/Md/blog-post.1.md',
    },
    {
      id: 2,
      fileName: 'File/Project/Md/blog-post.2.md',
    },
    {
      id: 3,
      fileName: 'File/Project/Md/blog-post.3.md',
    },
  ]);

  const [fileName, setFileName] = useState('File/Project/Md/blog-post.1.md');

  const onClickMenu = (id) => {
    setFileName('');
    for (let i = 0; i < fileNames.length; i++) {
      if (id === fileNames[i].id) {
        setFileName(fileNames[i].fileName);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Sidebar title="Project" onClickMenu={onClickMenu} />
            <TopMain title="From the firehose" fileName={fileName} />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
