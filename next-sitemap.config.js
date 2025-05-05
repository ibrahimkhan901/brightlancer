module.exports = {
  siteUrl: 'https://brightlancer.vercel.app', // Replace with your actual domain (Vercel domain)
  generateRobotsTxt: true,  // Optional: Generate robots.txt automatically
  sitemapSize: 5000,  // Max URLs per sitemap file (if you have a large site with thousands of pages)
  changefreq: 'daily',  // The frequency of page updates (change this based on your website's update frequency)
  priority: 0.7,  // Default priority for pages (can be customized later)
  // You can also include additional pages here
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/services'),
    await config.transform(config, '/courses'),
    await config.transform(config, '/location'),
    await config.transform(config, '/contact'),
  ],
};
