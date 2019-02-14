function importAll(r) {
  return r.keys().map(r);
}

const imageFiles = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

export default imageFiles;
