const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://stackoverflow-clone.now.sh/';