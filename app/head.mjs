export default function Head(state) {
  const { store, status, req, error } = state;
  const { path } = req;
  const title = `Flamingle | Find Events, Make Friends`;
  return /* html */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>${title}</title>

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        <link rel="stylesheet" href="/_static/style/base.css" />
        <link rel="stylesheet" href="/_static/style/prose.css" />
        <link rel="stylesheet" href="/_static/style/components.css" />
        <link rel="stylesheet" href="/_static/style/icons.css" />
        <link rel="stylesheet" href="/_static/style/util.css" />
        <link rel="stylesheet" href="/_static/style/animation.css" />
        <link
          rel="icon"
          sizes="32x32 16x16"
          type="image/svg+xml"
          href="/_static/logo.svg"
        />
        <link rel="apple-touch-icon" sizes="160x160" href="/_static/logo.svg" />
        <link rel="canonical" href="https://www.FlamingleSocial.com" />
        <meta
          name="description"
          content="Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
        />
        <meta property="og:image" content="/_static/logo.svg" />
        <meta property="og:image:secure_url" content="/_static/logo.svg" />
        <meta property="og:image:alt" content="Flamingle Logo" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta
          property="og:title"
          content="Flamingle Social | Find Events, Make Friends"
        />
        <meta property="og:url" content="https://www.FlamingleSocial.com" />
        <meta
          property="og:description"
          content="Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
        />
        <meta property="og:site_name" content="Flamingle Social" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Flamingle Social" />
        <meta
          property="twitter:description"
          content="Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
        />
        <meta property="og:type" content="website" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link
          rel="icon"
          sizes="32x32 16x16"
          type="image/svg+xml"
          href="/_static/logo.svg"
        />
        <link rel="apple-touch-icon" sizes="160x160" href="/_static/logo.svg" />
        <link rel="canonical" href="https://www.FlamingleSocial.com" />
        <meta
          name="description"
          content="Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
        />
        <meta property="og:image" content="/_static/logo.svg" />
        <meta property="og:image:secure_url" content="/_static/logo.svg" />
        <meta property="og:image:alt" content="Flamingle Logo" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta
          property="og:title"
          content="Flamingle Social | Find Events, Make Friends"
        />
        <meta property="og:url" content="https://www.FlamingleSocial.com" />
        <meta
          property="og:description"
          content="Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
        />
        <meta property="og:site_name" content="Flamingle Social" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Flamingle Social" />
        <meta
          property="twitter:description"
          content="Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."
        />
        <meta property="og:type" content="website" />
        <link rel="manifest" href="/_static/manifest.json" />
        <script type="module">  
          import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
          const SUPABASE_URL = "https://raoodzmoztwwwcjydatg.supabase.co"
          const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQxNTMwMCwiZXhwIjoxOTU4OTkxMzAwfQ.7FNpzHXTJ0EHz2nVfodpdu4mw05Mik1BH8aEQpE6XAU'
          // Init Supabase
          window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
          dispatchEvent(new Event("supabase:init"));
          // Init User
          supabase.auth.getUser().then(({data, error}) => {
            window.user = data.user
            dispatchEvent(new Event("user:init"));
          });
        </script>
      </head>
  `;
}
