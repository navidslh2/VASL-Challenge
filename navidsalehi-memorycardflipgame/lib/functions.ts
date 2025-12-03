export const gridFunction = (gameSize: Number) => {
  switch (gameSize) {
    case 4:
      return "grid-cols-4";
    case 8:
      return "grid-cols-8";
    case 16:
      return "grid-cols-16";
  }
};