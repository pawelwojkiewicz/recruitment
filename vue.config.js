module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/assets/styles/main.scss";
          `
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/recruitment-task/'
    : '/'
  };