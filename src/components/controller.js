export const switchColor = (type) => {
  switch (type) {
    case "agua":
      return "bg-tahiti";
    case "planta":
      return "bg-bermuda";
    case "fuego":
      return "bg-bubble-gum";
    default:
      return "bg-black";
  }
};
