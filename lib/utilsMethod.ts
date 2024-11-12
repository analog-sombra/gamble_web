export function dateTimeFormater(timeStamp: string | Date | number) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(timeStamp));

  return formattedDate;
}

/**
 * Converts a given string to capital case by capitalizing the first letter of each word.
 * @param {string} value - The input string to convert to capital case.
 * @returns {string} The input string converted to capital case.
 */
const capitalcase = (value: string): string => {
  const words = value.split(" ");

  const capitalWords = words.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });

  return capitalWords.join(" ");
};

export { capitalcase };
