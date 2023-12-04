export const extractInitials = (name: string) => {
  // Split the full name into an array of words
  const words = name.split(" ");

  // Check if there's at least one word (a first name)
  if (words.length >= 1) {
    const numberOfFirstNameChar = words.length === 1 ? 2 : 1;
    const firstName = words[0]
      .substring(0, numberOfFirstNameChar)
      .toUpperCase();

    // Check if there's a last name
    if (words.length >= 2) {
      const lastName = words[words.length - 1].substring(0, 1).toUpperCase();
      return `${firstName}${lastName}`;
    } else {
      return firstName;
    }
  } else {
    return ""; // No name provided
  }
};
