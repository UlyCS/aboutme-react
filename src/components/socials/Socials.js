import React from 'react';
import SocialsBlock from "./SocialsBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Socials() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.socials.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <SocialsBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};