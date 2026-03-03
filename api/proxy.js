const { createProxyMiddleware } = require('http-proxy-middleware');
const { NextApiHandler } = require('next');

const targetHost = 'https://pornhub.com'; // Replace with your desired website URL

const proxy = createProxyMiddleware({
  target: targetHost,
  changeOrigin: true,
});

const handler = (req, res) => {
  proxy(req, res);
};

export default handler;
