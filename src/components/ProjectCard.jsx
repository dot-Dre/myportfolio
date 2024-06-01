import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import React from "react";

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#000000",
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid #afb7bd`,
}));

const ProjectCards = ({ visit, blurb, name, img, tags }) => {
  return (
    <div className="bg-slate-100 border border-gray-300 p-6 rounded-lg shadow-lg">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <div className="h-full w-full overflow-hidden rounded-md">
            <img className="w-full h-full object-cover" src={img} alt="here" />
          </div>
        </Grid>
        <Grid item md={12}>
          <div className="h-full w-full overflow-hidden text-2xl font-bold rounded-md text-slate-700">
            {name}
          </div>
        </Grid>
        <Grid item md={12}>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="text-gray-700">{blurb}</p>
          </div>
        </Grid>
        <Grid item md={12}>
          <Stack direction="row" spacing={1} className="mt-4">
            {tags.map((tag, index) => (
              <StyledChip key={index} label={tag} />
            ))}
          </Stack>
        </Grid>
        <Grid item md={12}>
          {visit ? <>link</> : <></>}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCards;
