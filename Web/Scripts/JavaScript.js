document.addEventListener("DOMContentLoaded", function () {

    // ================= SEARCH =================

    var searchInput = document.getElementById("searchInput");
    var searchBtn = document.getElementById("searchBtn");

    if (searchBtn && searchInput) {

        searchBtn.addEventListener("click", function () {

            var keyword = searchInput.value.trim();

            if (keyword === "") {
                alert("Bro hãy nhập sản phẩm cần tìm 😎");
                return;
            }

            alert("Bạn đang tìm kiếm: " + keyword);
        });


        searchInput.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                searchBtn.click();
            }

        });

    }


    // ================= SORT =================

    var sortSelect = document.getElementById("sortSelect");

    if (sortSelect) {

        sortSelect.addEventListener("change", function () {

            var value = sortSelect.value;

            if (value === "Giá thấp đến cao") {
                alert("Đang sắp xếp giá thấp đến cao");
            }

            else if (value === "Giá cao đến thấp") {
                alert("Đang sắp xếp giá cao đến thấp");
            }

        });

    }


    // ================= PRODUCT CLICK =================

    var products = document.querySelectorAll(".product");

    products.forEach(function (product) {

        product.addEventListener("click", function () {

            var title = product.querySelector("h3");

            if (title) {
                alert("Bạn chọn: " + title.innerText);
            }

        });

    });


    // ================= FILTER =================

    var filterButtons = document.querySelectorAll(
        ".filter button"
    );

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.toggle("selected");

        });

    });

});