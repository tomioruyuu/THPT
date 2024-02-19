let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// thay đổi active khi tác động trên navbar
{
  let navBtn = $$(".navigation li a");
  let subMainBlock = $$(".sub-main");
  let subTintucs = $$(".sub-tintuc");

  navBtn.forEach((btnItem, index) => {
    btnItem.onclick = function () {
      subMainBlock.forEach((subItem) => {
        subItem.classList.remove("active");
      });

      subTintucs.forEach((subTinTuc) => {
        if (subTinTuc.classList.contains("active")) {
          subTinTuc.classList.remove("active");
        }
      });

      subMainBlock[index].classList.add("active");
    };
  });
}

// thay đổi active để hiện các trang con bằng aside và tin tức
{
  // lấy các thẻ cần thiết
  let rightItems = $$(".r-item");
  let tintucItems = $$(".tintuc-item");
  let subTintucs = $$(".sub-tintuc");
  let subMainBlock = $$(".sub-main");

  // click phần aside right item
  rightItems.forEach((rightItem, index) => {
    rightItem.onclick = function () {
      subMainBlock.forEach((subItem) => {
        if (subItem.classList.contains("active")) {
          subItem.classList.remove("active");
        }
      });

      // xóa active ở các sub-tintuc
      subTintucs.forEach((subTinTuc) => {
        if (subTinTuc.classList.contains("active")) {
          subTinTuc.classList.remove("active");
        }
        subTintucs[index].classList.add("active");
      });
    };
  });

  // click phần tintuc-item
  tintucItems.forEach((tintucItem, index) => {
    tintucItem.onclick = function () {
      subMainBlock.forEach((subItem) => {
        if (subItem.classList.contains("active")) {
          subItem.classList.remove("active");
        }
      });

      // xóa active ở các sub-tintuc
      subTintucs.forEach((subTinTuc) => {
        if (subTinTuc.classList.contains("active")) {
          subTinTuc.classList.remove("active");
        }
        subTintucs[index].classList.add("active");
      });
    };
  });
}
