export const getSelectedCity = () => {
  const saved = localStorage.getItem("user_selected_city");
  return saved
    ? JSON.parse(saved)
    : { id: "moscow_and_region", text: "Москва и область", href: "#" };
};
