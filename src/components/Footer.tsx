import { ReactElement } from 'react';
import { Toolbar, Container, Typography, Box, Avatar, Link, Divider } from '@mui/material';

function Footer(): ReactElement {
  return (
    <Box bgcolor={'backround.default'}>
      <Divider />
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', columnGap: '5px' }}>
            <Link href="https://github.com/Jik789">
              <Avatar alt="JiK" src="https://avatars.githubusercontent.com/u/38877564?v=4" />
            </Link>
            <Link href="https://github.com/okitel">
              <Avatar alt="okitel" src="https://avatars.githubusercontent.com/u/79774026?v=4" />
            </Link>
            <Link href="https://github.com/Syderi">
              <Avatar alt="Syderi" src="https://avatars.githubusercontent.com/u/107023048?v=4" />
            </Link>
          </Box>
          <Typography sx={{ fontWeight: '600' }}>2023</Typography>
          <Link href="https://rs.school/index.html">
            <Avatar
              sx={{ objectFit: 'contain', width: '100%', height: '50px' }}
              alt="JiK"
              src="https://rs.school/images/partners/logo-rs.svg"
            />
          </Link>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Footer;
