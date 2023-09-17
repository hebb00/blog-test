import React from 'react'
import { Typography, Grid, Card, CardContent, Box, CardMedia, Link } from '@mui/material';

export default function MissionCard({ post }: any) {
  return (
    <Grid item container direction={'row'} sm={12}
      xs={12} md={12}>
      <Grid item xs sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <CardMedia sx={{ width: 450, height: 300 }} component={'img'}
          src='/images/ethh.svg'
        />
      </Grid>
      <Grid item md={4} sm={6} xs={12}  >
        <Card sx={{
          bgcolor: '#f8f9fa', display: 'flex',
          justifyContent: 'center', alignContent: 'center', height: 300, width: '100%'
        }}>
          <CardContent >
            <Typography variant="h5" sx={{ m: 3 }}>
              {post.frontmatter.title}
            </Typography>
            <Typography sx={{ m: 3 }}>

            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

  )
}
