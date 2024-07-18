import { cloneElement, ReactElement, ReactNode } from 'react';

export const formatVND = (price: number) => {
  return Intl.NumberFormat('vi-VN').format(price);
};

export function replaceStringWithElement(
  string: string,
  search: string,
  element: ReactNode | ((search: string, index: number) => ReactNode)
) {
  let result = []; // Array to store the resulting React elements and text
  let splitIndices = []; // Array to store the indices where the search text is found
  let i = 0;

  if (!string || !search) return [string];

  // Find all occurrences of the search text in the string
  while (i < string.length) {
    // Compare the substring to the search text while ignoring case
    if (
      string.substr(i, search.length).toLowerCase() === search.toLowerCase()
    ) {
      splitIndices.push(i); // Store the index where the search text is found
      i += search.length; // Increment i by the search text length to skip it
    } else {
      i++; // Increment i by 1 if the search text is not found at the current position
    }
  }

  let start = 0;
  // Loop through the splitIndices to split the string and insert the React elements
  for (let j = 0; j < splitIndices.length; j++) {
    // Push the text before the search text occurrence
    result.push(string.substring(start, splitIndices[j]));

    const searchValue = string.substring(
      splitIndices[j],
      splitIndices[j] + search.length
    );

    // Push the React element to the result array
    result.push(
      typeof element === 'function'
        ? element(searchValue, j)
        : cloneElement(element as ReactElement, { key: j, text: searchValue })
    );

    start = splitIndices[j] + search.length;
  }

  // Push the remaining text after the last search text occurrence
  result.push(string.substring(start));
  return result; // Return the array of React elements and text
}
