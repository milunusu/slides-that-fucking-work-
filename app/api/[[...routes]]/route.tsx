/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/first', (c) => {
  const { buttonValue, inputText, status } = c
  
  return c.res({
    action: '/second',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvetsonparker.com.au%2Fkids-corner%2Ffun-rabbit-facts%2F&psig=AOvVaw3pIu6Nn5uqYt_OjNBf8Whb&ust=1712362066526000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDGzPfjqYUDFQAAAAAdAAAAABAE',
    intents: [
      <Button>ok but so mediocre</Button>,
    ],
  })
})
app.frame('/second', (c) => {
  const { buttonValue, inputText, status } = c
  
  return c.res({
    action: '/first',
    image: 'https://indigo-advisory-gorilla-502.mypinata.cloud/ipfs/QmQGN79J7rwX2NmZdEnyX6ViGWAiSJ6irMCyxFQmC4H2VL/1.jpg',
    intents: [
      <Button>alright, rude ass rabbit</Button>,
    ],
  })
})

export const GET = handle(app)
export const POST = handle(app)
