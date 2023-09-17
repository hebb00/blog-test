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
import MissionCard from '../components/SideCard'

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
const Home: React.FC = ({ posts }: any) => {

  return (
    <Layout>
      <Grid container justifyContent={'center'} alignContent={'center'}>
        <Grid item md={12} >
          <Box sx={{ position: 'relative', width: '100%' }}>
            <CardMedia component={'img'}
              src='/images/p.svg'
            />
            <Typography sx={{ position: 'absolute', top: 90, left: 30, fontSize: 40, color: '#fff' }}>
              <b>  {posts[0].frontmatter.title}</b>
            </Typography>
            <Typography sx={{ position: 'absolute', top: 150, left: 30, fontSize: 30, color: '#8b9ad9' }}>
              {posts[0].frontmatter.description} <br />
              {posts[0].frontmatter.description1}

            </Typography>
          </Box>

        </Grid>



        <TextCard post={posts[3]} />

        <MissionCard post={posts[1]}></MissionCard>
        <Grid item container direction={'row'} md={12} sm={12} xs={12}>

          <Grid item container direction={'column'} xs >
            <Card sx={{ bgcolor: '#f8f9fa', height: 400 }}>
              <Grid item md={12} sm={12} xs={12}>
                <Box>
                  <Typography variant="h4" align='center' sx={{ mt: 9 }}>
                    {posts[2].frontmatter.title}
                  </Typography>
                </Box>
              </Grid>

              <CardContent >
                <Grid item md={12} sm={12} xs={12}>

                  <Typography align='center' sx={{ fontSize: 19 }}>

                    <Link sx={{ m: 1 }} href={posts[2].frontmatter.url}>
                      {posts[2].frontmatter.link}    </Link>
                  </Typography>

                </Grid>

              </CardContent>
            </Card>
          </Grid>

          <Grid item md={4} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>

            <CardMedia sx={{ height: 380, width: 500 }} component={'img'}
              src='/images/step.svg'
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
