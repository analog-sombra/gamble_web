import { clsx, type ClassValue } from "clsx";
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

// length == 12

// condition
// new line without column
// new line with column
// space without semicolumn
// space with semicolumn

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

const isContainSpace = (value: string): boolean => {
  return !value.includes(" ");
};

export { isContainSpace };

const capitalcase = (value: string): string => {
  const words = value.split(" ");

  const capitalWords = words.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  return capitalWords.join(" ");
};

export { capitalcase };

const onlyNumbersRegex = /^[0-9]*$/;

const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = event.target;
  if (!onlyNumbersRegex.test(value)) {
    event.target.value = event.target.value.slice(0, -1);
  }
};

export { handleNumberChange };
