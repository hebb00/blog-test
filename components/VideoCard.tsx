import Link from 'next/link'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid } from '@mui/material';
import { Video } from './loom';

export default function Post({ post }: any) {

  const date = new Date(post.frontmatter?.date)


  return (
    <Grid
      md={12}
      sm={12}
      xs={12}
      item
    >
      <Card sx={{ bgcolor: '#f8f9fa', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.frontmatter.title}
          </Typography>
          <Typography sx={{ mb: 3 }} variant="body2" color="text.secondary">
            {post.frontmatter.summary}
          </Typography>
          <Video link={post.frontmatter.video} />
          <Typography sx={{ color: 'text.secondary', fontSize: 12, mt: 3 }} >
            {`${date}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

  );

}
