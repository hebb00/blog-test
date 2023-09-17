import React from 'react'
import { TwitterEmbed } from 'react-social-media-embed';
import * as loom from '@loomhq/loom-embed';


export function Video({ link }: any) {
  return < div style={{ position: 'relative', paddingBottom: '56.25%', height: 400, width: 800 }}> <iframe src={link} frameBorder="0" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe></div >;


}
