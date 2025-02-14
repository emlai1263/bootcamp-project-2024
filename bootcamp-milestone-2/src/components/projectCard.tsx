import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface ActionAreaCardProps {
  link: string;
  image: string;
  alt: string;
  heading: string;
  text: string;
}

export default function ActionAreaCard({ link, image, alt, heading, text }: ActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="90%"
            image={image}
            alt={alt}
          />
          <CardContent>
            <h2>
              {heading}
            </h2>
            <p>
              {text}
            </p>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}