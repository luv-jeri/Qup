export default async function get(url, callback) {
  const data = await fetch(url);
  const data_ = await data.json();
  return data_;
}
