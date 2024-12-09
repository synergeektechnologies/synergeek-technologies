const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
];

// Create a readable stream from the routes
const stream = Readable.from(routes);

// Create a SitemapStream instance
const sitemap = new SitemapStream({ hostname: 'https://synergeektechnologies.in' });

// Pipe the routes to the sitemap generator
stream.pipe(sitemap);

// Convert the stream to a promise and write it to a file
streamToPromise(sitemap).then((sm) => {
  fs.writeFileSync(path.resolve(__dirname, 'sitemap.xml'), sm);
  console.log('Sitemap generated successfully!');
});
