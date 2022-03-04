import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from '../Markdown';

function Markdowns(props) {
  const { fileName } = props;

  console.log(' fileName ==>' + fileName);
  return (
    <Grid
      item
      xs={12}
      md={10}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Markdown className="markdown" fileName={fileName}></Markdown>
    </Grid>
  );
}

export default Markdowns;
