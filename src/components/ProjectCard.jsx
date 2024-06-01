import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import React from "react";

const ProjectCards = ({ img, tags }) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item md={12}>
          <Item>xs=6 md=4</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCards;
