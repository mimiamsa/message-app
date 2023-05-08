module.exports = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    serverRoute: "http://localhost:3005/",
  },
};
