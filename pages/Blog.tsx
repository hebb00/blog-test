import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import Layout from '../components/Layout'
import Image from '../components/Image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/VideoCard'

import { Typography, Grid, Card, CardContent, Box, CardMedia, Link } from '@mui/material';
import SideCard from '../components/SideCard'
import TextCard from '../components/TextCard'


export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {

    props: {

      posts,

    },
  }
  // Get all our posts
}
const Blog: React.FC = ({ posts }: any) => {

  return (
    <Layout>
      <Grid spacing={2} container justifyContent={'center'} alignContent={'center'}>
        <Grid item md={12} sm={12} xs={12}>
          <Card sx={{ bgcolor: '#f8f9fa', height: 99 }}>
            <CardContent >
              <Typography sx={{ mt: 3 }} variant="h5">
                Open Data Community
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          md={11}
          sm={12}
          xs={12}
          item
          container
          spacing={2}
          direction={'row'}
        >
          <Post post={posts[4]} />
        </Grid>

      </Grid>
    </Layout>
  )
}

export default Blog

