export const formatDate = (postDate) => {
  const date = new Date(postDate);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};