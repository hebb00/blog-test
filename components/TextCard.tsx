import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Box, Link, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';

export default function TextCard({ post }: any) {
  return (
    <Grid item container direction={'row'} md={12} sm={12} xs={12}>

      <Grid item container direction={'column'} xs >
        <Card sx={{ bgcolor: '#f8f9fa', height: 350 }}>
          <Grid item md={12} sm={12} xs={12}>
            <Box>
              <Typography gutterBottom m={3} color="text.primary" variant="h4"  >
            {post.frontmatter.title}
          </Typography>
            </Box>
          </Grid>

          <CardContent >
            <Grid item md={12} sm={12} xs={12}>
              <Typography sx={{ fontSize: 19 }} color='text.secondary' >
                {post.frontmatter.description}
              </Typography>
              <List  >
                <ListItem disablePadding >
                  <ListItemIcon >
                    <CropSquareOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText  >
                    {post.frontmatter.first}

                  </ListItemText>
                </ListItem>

                <ListItem disablePadding >
                  <ListItemIcon >
                    <CropSquareOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText  >
                    {post.frontmatter.seconed}

                  </ListItemText>
                </ListItem>
              </List>

            </Grid>
            {/* <Grid item md={12} sm={12} xs={12}>
              <Typography sx={{ mb: 3, fontSize: 19 }} align='center' variant="body2" color="text.secondary">
                {post.frontmatter.summary + ' '} <Link href={post.frontmatter.url}> {post.frontmatter.link}</Link>
              </Typography>
            </Grid> */}

          </CardContent>
        </Card>
      </Grid>

      <Grid item md={4} sm={6} xs={12} >

        <CardMedia sx={{ height: 350 }} component={'img'}
          src='/images/c.svg'
        />
      </Grid>
    </Grid>
  )
}

