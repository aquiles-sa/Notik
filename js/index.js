const change_theme_btn = document.querySelector("#change-theme");

const changeTheme = () => {
  document.body.classList.toggle("dark-theme");
};

change_theme_btn.addEventListener("click", () => {
  changeTheme();
});
