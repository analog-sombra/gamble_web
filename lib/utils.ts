import { clsx, type ClassValue } from "clsx";
import { FieldErrors, FieldValues } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTransactionId(text: string) {
  const patterns = [
    // Define multiple patterns to capture various transaction ID formats
    /UTR:(\w+)/,
    /UTR: (\w+)/,
    /UTR[\r\n]+(\w+)/,
    /UPI transaction ID[\r\n]+(\w+)/,
    /UPI transaction ID: (\w+)/,
    /Transaction ID[\r\n]+(\w+)/,
    /Transaction Reference \| (\w+)/,
    /Transaction Reference Number \| (\w+)/,
    /IMPS Ref No: (\w+)/,
    /IMPS-(\w+)/,
  ];

  for (const pattern of patterns) {
    const match = pattern.exec(text);
    if (match) {
      const id = match[1].trim();
      if (id.length == 12) {
        return match[1]; // Return the captured transaction ID
      }
    }
  }

  return null;
}
/**
 * Converts an error object or string to a string format.
 * If the input is a string, it converts it to uppercase.
 * If the input is an Error object, it returns the error message.
 * @param {unknown} e - The error object or string to convert.
 * @returns {string} The error message in string format.
 */
const errorToString = (e: unknown): string => {
  let err: string = "";
  if (typeof e === "string") {
    err = e.toUpperCase();
  } else if (e instanceof Error) {
    err = e.message;
  }
  return err;
};

export { errorToString };

/**
 * Check if the given string contains any space character.
 * @param {string} value - The string to check for spaces.
 * @returns {boolean} True if the string contains a space, false otherwise.
 */
const isContainSpace = (value: string): boolean => {
  return !value.includes(" ");
};

export { isContainSpace };

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

const onlyNumbersRegex = /^[0-9]*$/;

/**
 * Handles the change event for a number input field in a React component.
 * If the input value does not match the regex pattern for numbers, it clears the input field.
 * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The change event object
 * @returns None
 */
const handleNumberChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { value } = event.target;
  if (!onlyNumbersRegex.test(value)) {
    event.target.value = event.target.value.slice(0, -1);
  }
};

export { handleNumberChange };

const onlyDecimalRegex = /^[0-9.]*$/;

/**
 * Handles the change event for an input element to allow only decimal values.
 * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The change event object.
 * @returns None
 */
const handleDecimalChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { value } = event.target;
  if (!onlyDecimalRegex.test(value)) {
    event.target.value = event.target.value.slice(0, -1);
  }
};

export { handleDecimalChange };

/**
 * Truncates a given text to a specified length and appends "..." if the text exceeds the length.
 * @param {string} text - The text to truncate.
 * @param {number} long - The maximum length of the truncated text.
 * @returns The truncated text with "..." appended if it exceeds the specified length.
 */
const longtext = (text: string, long: number): string => {
  if (text.length <= long) {
    return text;
  } else {
    return text.substring(0, long) + " ...";
  }
};
export { longtext };

const formateDateTime = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const meridiem = date.getHours() < 12 ? "AM" : "PM";

  const formattedTime =
    (hours % 12 || 12) +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    " " +
    meridiem;

  //  if month and day is less than 10, add 0 before month
  if (month < 10 && day < 10) {
    return `0${day}-0${month}-${year} ${formattedTime}`;
  } else if (month < 10) {
    return `${day}-0${month}-${year} ${formattedTime}`;
  } else if (day < 10) {
    return `0${day}-${month}-${year} ${formattedTime}`;
  } else {
    return `${day}-${month}-${year} ${formattedTime}`;
  }
};

export { formateDateTime };

const formateDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month < 10 && day < 10) {
    return `0${day}-0${month}-${year}`;
  } else if (month < 10) {
    return `${day}-0${month}-${year}`;
  } else if (day < 10) {
    return `0${day}-${month}-${year}`;
  } else {
    return `${day}-${month}-${year}`;
  }
};

export { formateDate };

const removeDuplicates = (arr: any[]): any[] => {
  return Array.from(new Set(arr));
};

export { removeDuplicates };

const numberWithIndianFormat = (x: number) => {
  const parts = x
    .toLocaleString("en-IN", { maximumFractionDigits: 2 })
    .split(".");
  return parts.join(".");
};
export default numberWithIndianFormat;

const getEnumData = <T extends object>(
  enumObject: T
): { value: T[keyof T]; label: string }[] => {
  return Object.keys(enumObject).map((key) => ({
    value: enumObject[key as keyof T],
    label: key,
  }));
};

export { getEnumData };

const onFormError = <T extends FieldValues>(error: FieldErrors<T>) => {
  const firstErrorMessage = Object.values(error)[0]?.message;

  setTimeout(() => {
    if (firstErrorMessage) {
      const errorElement = Array.from(document.querySelectorAll("p")).find(
        (el) => el.textContent == firstErrorMessage
      );
      if (errorElement) {
        // Scroll to the error message element
        errorElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        });
      }
    }
  }, 1000);
};

export { onFormError };
