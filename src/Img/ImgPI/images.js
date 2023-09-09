const images = require.context('./', false, /\.(png|jpe?g|svg)$/);

export default images.keys().map(images);
