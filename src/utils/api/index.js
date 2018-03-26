import movieAPI from './movieAPI';
// import loginAPI from './loginAPI';
const movieInstance = new movieAPI('e0711488acf5671646c03d8a9d50976e');

export {
  movieInstance as movieAPI
}
