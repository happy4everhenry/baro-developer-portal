import nextra from 'nextra'

const withNextra = nextra({
  // Content directory for MDX files
  // No contentDirBasePath needed — serve from root
})

export default withNextra({
  reactStrictMode: true,
})
