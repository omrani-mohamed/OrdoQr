'use client';
import { Typography} from '@mui/material';
import styled from '@emotion/styled';

export default function Footer (){
    const Footer = styled('footer')({
        backgroundColor: '#ffffff',
        padding: '20px',
      });
      return(
        <Footer>
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          OrdoQr - La technologie pour faciliter la gestion de vos ordonnances.
        </Typography>
      </Footer>
      );
}