import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);


   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>John Ulysses N. Paruginog | BSCS-3A |<a href={'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnpqWvgCPcJNgdsRtFXHkRGMHVMsFcHwkVGlkfknLVBLTkWVSXqHZmhsMrlHkpvsqfjSnF'}> 202011029@gordoncollege.edu.ph</a></p>
                  <p>&copy; All Rights Reserved</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

