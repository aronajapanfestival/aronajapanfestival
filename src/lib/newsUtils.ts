// Helper function to create slug from title
export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Helper function to parse date DD/MM/YYYY to Date object
export const parseDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

// Helper function to get preview from text
export const getPreview = (text: string, maxLength: number = 150): string => {
  const plainText = text.replace(/[*_[\]()]/g, "");
  return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText;
};
