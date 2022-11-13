export const orderBy = (data) => {
  data.sort((a, b) => {
    if (a.title < b.title) return -1
    return true
  });
  return data;
}
