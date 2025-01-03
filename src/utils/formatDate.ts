const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const day = String(date.getDate()).padStart(2, '0'); // Day (01-31)
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month (01-12)
  const year = date.getFullYear(); // Year (e.g., 2023)

  return `${day}/${month}/${year}`;
};

export default formatDate;