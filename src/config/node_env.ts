let baseUrl: string = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api';
} else if (process.env.VUE_APP_FLAG === 'buildtest') {
  baseUrl = 'http://107.6.141.242:29828';
} else if (process.env.VUE_APP_FLAG === 'prod') {
  baseUrl = 'http://107.0.145.62.29824';
}

export { baseUrl };
