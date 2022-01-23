let getList = document.querySelector(".getList");
let list = document.querySelector(".list");
let menu = document.querySelector(".aside");
let getMenu = document.querySelector(".smallMenu");

function stopProp(el) {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

stopProp(getList);
stopProp(getMenu);
stopProp(menu);

document.addEventListener("click", function (e) {
  if (e.target != getList || e.target != list) {
    list.classList.remove("show");
  }
  if (e.target != getMenu || e.target != menu) {
    menu.classList.remove("open");
  }
});

getList.addEventListener("click", function (e) {
  list.classList.toggle("show");
});

getMenu.addEventListener("click", function () {
  menu.classList.toggle("open");
});
