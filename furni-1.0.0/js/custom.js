(function () {
  "use strict";

  var PRODUCTS = [
    {
      id: "chair-pink",
      name: "كرسي مخملي وردي",
      price: 2800,
      image: "images/chair_white.png",
      category: "كراسي",
      description:
        "كرسي مخملي أنيق بلمسة دافئة ومريحة، مناسب للغرف الحديثة أو الاستقبال.",
      badge: "الأكثر طلباً",
    },
    {
      id: "chair-nordic",
      name: "كرسي نورديك",
      price: 50,
      image: "images/chair_curved_beige.png",
      category: "كراسي",
      description: "تصميم نورديك بسيط ومريح، مناسب للمكاتب والمنازل الصغيرة.",
      badge: "مميز",
    },
    {
      id: "chair-ero",
      name: "كرسي كروزو إيرو",
      price: 78,
      image: "images/chair_folding_blue.png",
      category: "كراسي",
      description: "كرسي عملي بظهر مناسب ودعم جيد، مثالي للاستخدام اليومي.",
      badge: "جديد",
    },
    {
      id: "chair-comfort",
      name: "كرسي مريح",
      price: 43,
      image: "images/chair_woven.png",
      category: "كراسي",
      description: "مريح ومناسب للقراءة والجلوس الطويل دون إرهاق.",
      badge: "تقليدي",
    },
    {
      id: "chair-black",
      name: "كرسي جلد أسود",
      price: 65,
      image: "images/chair_velvet_pink.png",
      category: "كراسي",
      description: "مظهر فاخر وملمس فاخر يعطي الجو احترافية في أي غرفة.",
      badge: "فاخر",
    },
    {
      id: "chair-red",
      name: "كرسي أحمر مخملي",
      price: 55,
      image: "images/product-1.png",
      category: "كراسي",
      description: "تباين ألوان جذاب ويضيف لمسة حيوية داخل المنزل.",
      badge: "مميز",
    },
    {
      id: "chair-wood",
      name: "كرسي خشبي كلاسيكي",
      price: 35,
      image: "images/product-2.png",
      category: "كراسي",
      description: "خامة طبيعية وتصميم كلاسيكي يناسب المساحات الدافئة.",
      badge: "كلاسيكي",
    },
    {
      id: "chair-silver",
      name: "كرسي فضي لامع",
      price: 72,
      image: "images/product-3.png",
      category: "كراسي",
      description: "إطلالة عصرية مع لمسة فخمة مناسبة للجلسات الرسمية.",
      badge: "حديث",
    },
    {
      id: "chair-gray",
      name: "كرسي رمادي عصري",
      price: 48,
      image: "images/chair_curved_beige.png",
      category: "كراسي",
      description: "رغم بساطته، يحمل تصميم عصري مناسب لكل أجواء المنزل.",
      badge: "عصري",
    },
    {
      id: "chair-beige",
      name: "كرسي بيج فاخر",
      price: 62,
      image: "images/chair_folding_blue.png",
      category: "كراسي",
      description:
        "لون بيج دافئ يضيف راحة بصريّة ويجمع بين الكلاسيكية والحداثة.",
      badge: "فاخر",
    },
    {
      id: "chair-white",
      name: "كرسي أبيض منصت",
      price: 38,
      image: "images/chair_woven.png",
      category: "كراسي",
      description: "تصميم بسيط ومُنظّم يضيف مساحة نورانية في الغرفة.",
      badge: "مريح",
    },
    {
      id: "chair-orange",
      name: "كرسي برتقالي ديكور",
      price: 58,
      image: "images/chair_velvet_pink.png",
      category: "كراسي",
      description: "خيار رائع لمن يبحث عن تفاصيل جمالية بجانب الراحة.",
      badge: "ديكور",
    },
  ];

  function readLocalStorage(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCart() {
    return readLocalStorage("asas_cart", []);
  }

  function saveCart(cart) {
    writeLocalStorage("asas_cart", cart);
    updateCartBadge();
  }

  function getCartCount() {
    var cart = getCart();
    return cart.reduce(function (total, item) {
      return total + Number(item.qty || 0);
    }, 0);
  }

  function updateCartBadge() {
    var count = getCartCount();
    var badges = document.querySelectorAll("#cart-badge, .cart-badge");
    if (!badges.length) {
      document.querySelectorAll('a[href="cart.html"]').forEach(function (link) {
        link.style.position = "relative";
        var badge = document.createElement("span");
        badge.className = "cart-badge";
        link.appendChild(badge);
      });
      badges = document.querySelectorAll(".cart-badge");
    }
    badges.forEach(function (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? "inline-flex" : "none";
    });
    try {
      localStorage.setItem("cartCount", String(count));
    } catch (error) {}
  }

  function showNotification(productName) {
    var cartNotification = document.getElementById("cartNotification");
    var notificationText = document.getElementById("notificationText");

    if (!cartNotification) {
      cartNotification = document.createElement("div");
      cartNotification.id = "cartNotification";
      cartNotification.className = "cart-notification";
      cartNotification.setAttribute("role", "status");
      cartNotification.innerHTML = '<div class="notification-content"><i class="fas fa-check-circle"></i><span id="notificationText"></span><a href="cart.html">عرض السلة</a></div>';
      document.body.appendChild(cartNotification);
      notificationText = document.getElementById("notificationText");
    }

    if (notificationText) {
      notificationText.textContent = "تمت إضافة " + productName + " إلى السلة";
    }

    if (cartNotification) {
      cartNotification.classList.remove("hide");
      cartNotification.classList.remove("show");
      void cartNotification.offsetWidth;
      cartNotification.classList.add("show");

      clearTimeout(cartNotification._hideTimer);
      cartNotification._hideTimer = setTimeout(function () {
        cartNotification.classList.remove("show");
        cartNotification.classList.add("hide");
      }, 3000);
    }
  }

  function addProductToCart(productId) {
    var product = PRODUCTS.find(function (item) {
      return item.id === productId;
    });

    if (!product) return;

    var cart = getCart();
    var cartItem = cart.find(function (item) {
      return item.id === productId;
    });

    if (cartItem) {
      cartItem.qty += 1;
    } else {
      cart.push({ id: productId, qty: 1 });
    }

    saveCart(cart);
    showNotification(product.name);
  }

  function bindAddToCartButtons() {
    var addButtons = document.querySelectorAll(".icon-cross");
    addButtons.forEach(function (button) {
      button.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        var productId = button.getAttribute("data-product-id");
        if (productId) {
          addProductToCart(productId);
        }
      };
    });
  }

  function renderProductCard(product) {
    return (
      '<div class="col-12 col-md-4 col-lg-3 mb-5">' +
      '<a class="product-item" href="product.html?id=' +
      product.id +
      '" data-product-id="' +
      product.id +
      '">' +
      '<img src="' +
      product.image +
      '" class="img-fluid product-thumbnail" style="height:250px; object-fit:contain;" alt="' +
      product.name +
      '">' +
      '<div class="product-badge">' +
      product.badge +
      "</div>" +
      '<h3 class="product-title">' +
      product.name +
      "</h3>" +
      '<strong class="product-price">ج.م ' +
      Number(product.price).toFixed(2) +
      "</strong>" +
      '<span class="icon-cross" data-product-id="' +
      product.id +
      '" aria-label="أضف إلى السلة">' +
      '<img src="images/cross.svg" class="img-fluid" alt="إضافة">' +
      "</span>" +
      "</a>" +
      "</div>"
    );
  }

  function filterProducts(searchText, category, priceRange, sortMode) {
    var normalized = (searchText || "").trim().toLowerCase();

    var filtered = PRODUCTS.filter(function (product) {
      var matchesSearch =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized);
      var matchesCategory = category === "all" || product.category === category;
      var matchesPrice =
        priceRange === "all" ||
        (priceRange === "under-50" && product.price < 50) ||
        (priceRange === "50-70" && product.price >= 50 && product.price <= 70) ||
        (priceRange === "over-70" && product.price > 70);
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortMode === "price-low") {
      filtered.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (sortMode === "price-high") {
      filtered.sort(function (a, b) {
        return b.price - a.price;
      });
    } else if (sortMode === "name") {
      filtered.sort(function (a, b) {
        return a.name.localeCompare(b.name, "ar");
      });
    }

    return filtered;
  }

  function initShopPage() {
    var productGrid = document.getElementById("shopProducts");
    if (!productGrid) return;

    var searchInput = document.getElementById("shopSearch");
    var categorySelect = document.getElementById("shopCategory");
    var priceSelect = document.getElementById("shopPrice");
    var sortSelect = document.getElementById("shopSort");
    var resultsCount = document.getElementById("shopResultsCount");
    var clearButton = document.getElementById("clearFilters");

    function render() {
      var searchText = searchInput ? searchInput.value : "";
      var category = categorySelect ? categorySelect.value : "all";
      var priceRange = priceSelect ? priceSelect.value : "all";
      var sortMode = sortSelect ? sortSelect.value : "default";
      var results = filterProducts(searchText, category, priceRange, sortMode);

      productGrid.innerHTML = results.length
        ? results.map(renderProductCard).join("")
        : '<div class="col-12"><div class="shop-empty"><i class="fas fa-search"></i><h3>لم نجد منتجات مطابقة</h3><p>جرّب تعديل كلمات البحث أو الفلاتر.</p></div></div>';
      if (resultsCount) resultsCount.textContent = "عرض " + results.length + " من " + PRODUCTS.length + " منتج";
      bindAddToCartButtons();
    }

    if (searchInput) {
      searchInput.addEventListener("input", render);
    }
    if (categorySelect) {
      categorySelect.addEventListener("change", render);
    }
    if (priceSelect) {
      priceSelect.addEventListener("change", render);
    }
    if (sortSelect) {
      sortSelect.addEventListener("change", render);
    }
    if (clearButton) {
      clearButton.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        if (categorySelect) categorySelect.value = "all";
        if (priceSelect) priceSelect.value = "all";
        if (sortSelect) sortSelect.value = "default";
        document.querySelectorAll(".filter-chip").forEach(function (chip) { chip.classList.toggle("active", chip.dataset.quickFilter === "all"); });
        render();
      });
    }
    document.querySelectorAll(".filter-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        if (priceSelect) priceSelect.value = chip.dataset.quickFilter;
        document.querySelectorAll(".filter-chip").forEach(function (item) { item.classList.toggle("active", item === chip); });
        render();
      });
    });

    render();
  }

  function renderProductDetails() {
    var container = document.getElementById("productDetail");
    if (!container) return;

    var params = new URLSearchParams(window.location.search);
    var productId = params.get("id");
    var product =
      PRODUCTS.find(function (item) {
        return item.id === productId;
      }) || PRODUCTS[0];

    container.innerHTML =
      '<div class="container product-detail-card">' +
      '<div class="row align-items-center g-5">' +
      '<div class="col-lg-6">' +
      '<div class="detail-image-wrap">' +
      '<img src="' +
      product.image +
      '" alt="' +
      product.name +
      '" class="img-fluid">' +
      "</div>" +
      "</div>" +
      '<div class="col-lg-6">' +
      '<div class="detail-content">' +
      '<span class="detail-badge">' +
      product.badge +
      "</span>" +
      "<h1>" +
      product.name +
      "</h1>" +
      '<div class="detail-price">ج.م ' +
      Number(product.price).toFixed(2) +
      "</div>" +
      "<p>" +
      product.description +
      "</p>" +
      '<ul class="detail-features">' +
      "<li>مادة عالية الجودة</li>" +
      "<li>توصيل سريع داخل المدينة</li>" +
      "<li>ضمان استبدال خلال 7 أيام</li>" +
      "</ul>" +
      '<div class="detail-actions">' +
      '<button class="btn btn-primary add-detail-btn" data-product-id="' +
      product.id +
      '">أضف إلى السلة</button>' +
      '<a class="btn btn-outline-dark" href="shop.html">العودة إلى المتجر</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    var button = container.querySelector(".add-detail-btn");
    if (button) {
      button.addEventListener("click", function () {
        addProductToCart(product.id);
      });
    }
  }

  function renderCartPage() {
    var tbody = document.getElementById("cartTableBody");
    var summary = document.getElementById("cartSummary");
    if (!tbody) return;

    var cart = getCart();
    if (!cart.length) {
      tbody.innerHTML =
        '<tr><td colspan="6"><div class="cart-empty">السلة فارغة حاليًا</div></td></tr>';
      if (summary) {
        summary.innerHTML =
          '<div class="row justify-content-end"><div class="col-md-7"><a class="btn btn-black btn-lg py-3 btn-block" href="shop.html">تصفح المنتجات</a></div></div>';
      }
      return;
    }

    var subtotal = 0;
    var rows = cart
      .map(function (item) {
        var product = PRODUCTS.find(function (productItem) {
          return productItem.id === item.id;
        });
        if (!product) return "";
        var lineTotal = product.price * item.qty;
        subtotal += lineTotal;
        return (
          "<tr>" +
          '<td class="product-thumbnail"><img src="' +
          product.image +
          '" alt="' +
          product.name +
          '" class="img-fluid" style="max-width:90px; height:90px; object-fit:contain;"></td>' +
          '<td class="product-name"><h2 class="h5 text-black">' +
          product.name +
          "</h2></td>" +
          "<td>ج.م " +
          Number(product.price).toFixed(2) +
          "</td>" +
          '<td><div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">' +
          '<div class="input-group-prepend"><button class="btn btn-outline-black decrease" data-product-id="' +
          product.id +
          '" type="button">&minus;</button></div>' +
          '<input type="text" class="form-control text-center quantity-amount" value="' +
          item.qty +
          '" readonly>' +
          '<div class="input-group-append"><button class="btn btn-outline-black increase" data-product-id="' +
          product.id +
          '" type="button">&plus;</button></div>' +
          "</div></td>" +
          "<td>ج.م " +
          Number(lineTotal).toFixed(2) +
          "</td>" +
          '<td><button type="button" class="btn btn-black btn-sm remove-item" data-product-id="' +
          product.id +
          '">X</button></td>' +
          "</tr>"
        );
      })
      .join("");

    tbody.innerHTML = rows;

    if (summary) {
      summary.innerHTML =
        '<div class="row justify-content-end"><div class="col-md-7"><div class="row"><div class="col-md-12 text-right border-bottom mb-5"><h3 class="text-black h4 text-uppercase">إجمالي السلة</h3></div></div>' +
        '<div class="row mb-3"><div class="col-md-6"><span class="text-black">المجموع الفرعي</span></div><div class="col-md-6 text-right"><strong class="text-black">ج.م ' +
        Number(subtotal).toFixed(2) +
        "</strong></div></div>" +
        '<div class="row mb-5"><div class="col-md-6"><span class="text-black">الإجمالي</span></div><div class="col-md-6 text-right"><strong class="text-black">ج.م ' +
        Number(subtotal).toFixed(2) +
        "</strong></div></div>" +
        '<div class="row"><div class="col-md-12"><button class="btn btn-black btn-lg py-3 btn-block" onclick="window.location=\'checkout.html\'">المتابعة للدفع</button></div></div></div></div>';
    }

    document.querySelectorAll(".increase").forEach(function (button) {
      button.addEventListener("click", function () {
        var productId = button.getAttribute("data-product-id");
        var cartItems = getCart();
        var item = cartItems.find(function (entry) {
          return entry.id === productId;
        });
        if (item) {
          item.qty += 1;
          saveCart(cartItems);
          renderCartPage();
        }
      });
    });

    document.querySelectorAll(".decrease").forEach(function (button) {
      button.addEventListener("click", function () {
        var productId = button.getAttribute("data-product-id");
        var cartItems = getCart();
        var item = cartItems.find(function (entry) {
          return entry.id === productId;
        });
        if (!item) return;
        item.qty -= 1;
        if (item.qty <= 0) {
          cartItems = cartItems.filter(function (entry) {
            return entry.id !== productId;
          });
        }
        saveCart(cartItems);
        renderCartPage();
      });
    });

    document.querySelectorAll(".remove-item").forEach(function (button) {
      button.addEventListener("click", function () {
        var productId = button.getAttribute("data-product-id");
        var cartItems = getCart().filter(function (entry) {
          return entry.id !== productId;
        });
        saveCart(cartItems);
        renderCartPage();
      });
    });
  }

  var tinyslider = function () {
    var el = document.querySelectorAll(".testimonial-slider");
    if (el.length > 0 && window.tns) {
      tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: false,
        speed: 700,
        nav: true,
        controls: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
      });
    }
  };

  var sitePlusMinus = function () {
    var quantity = document.getElementsByClassName("quantity-container");
    for (var i = 0; i < quantity.length; i++) {
      var quantityContainer = quantity[i];
      var quantityAmount =
        quantityContainer.getElementsByClassName("quantity-amount")[0];
      var increase = quantityContainer.getElementsByClassName("increase")[0];
      var decrease = quantityContainer.getElementsByClassName("decrease")[0];
      if (increase) {
        increase.addEventListener("click", function () {
          var amountInput = this.closest(".quantity-container").querySelector(
            ".quantity-amount",
          );
          var currentValue = parseInt(amountInput.value, 10) || 0;
          amountInput.value = currentValue + 1;
        });
      }
      if (decrease) {
        decrease.addEventListener("click", function () {
          var amountInput = this.closest(".quantity-container").querySelector(
            ".quantity-amount",
          );
          var currentValue = parseInt(amountInput.value, 10) || 0;
          amountInput.value = currentValue > 0 ? currentValue - 1 : 0;
        });
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    updateCartBadge();
    tinyslider();
    sitePlusMinus();
    bindAddToCartButtons();

    if (document.body && document.body.getAttribute("data-page") === "shop") {
      initShopPage();
    }

    if (
      document.body &&
      document.body.getAttribute("data-page") === "product"
    ) {
      renderProductDetails();
    }

    if (document.body && document.body.getAttribute("data-page") === "cart") {
      renderCartPage();
    }
  });
})();
