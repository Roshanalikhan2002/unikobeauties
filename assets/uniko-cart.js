(function () {
  const searchOverlay = document.getElementById("uniko-search-overlay");
  const cartDrawer = document.getElementById("uniko-cart-drawer");
  const searchInput = document.getElementById("uniko-search-input");
  const moneyFormat = cartDrawer?.getAttribute("data-money-format") || "{{amount}}";

  const formatMoney = (cents) => {
    const value = (Number(cents) / 100).toFixed(2);
    return moneyFormat
      .replace(/\{\{\s*amount\s*\}\}/g, value)
      .replace(/\{\{\s*amount_no_decimals\s*\}\}/g, String(Math.round(Number(cents) / 100)))
      .replace(/\{\{\s*amount_with_comma_separator\s*\}\}/g, value.replace(".", ","));
  };

  const setOpen = (el, open, bodyClass) => {
    if (!el) return;
    el.hidden = !open;
    document.body.classList.toggle(bodyClass, open);
    if (open) el.removeAttribute("hidden");
  };

  const openSearch = () => {
    setOpen(searchOverlay, true, "uniko-search-open");
    setTimeout(() => searchInput?.focus(), 40);
  };
  const closeSearch = () => setOpen(searchOverlay, false, "uniko-search-open");
  const openCart = () => setOpen(cartDrawer, true, "uniko-cart-open");
  const closeCart = () => setOpen(cartDrawer, false, "uniko-cart-open");

  const updateCounts = (count) => {
    document.querySelectorAll("[data-cart-count], .cart-count").forEach((el) => {
      el.textContent = String(count);
      el.toggleAttribute("hidden", Number(count) === 0);
    });
    document.querySelectorAll("[data-uniko-open-cart]").forEach((el) => {
      el.setAttribute("aria-label", `Cart, ${count} items`);
    });
  };

  const renderCart = (cart) => {
    const wrap = document.querySelector("[data-cart-items]");
    const foot = document.querySelector("[data-cart-foot]");
    const subtotal = document.querySelector("[data-cart-subtotal]");
    if (!wrap) return;
    updateCounts(cart.item_count || 0);
    if (!cart.items || cart.items.length === 0) {
      wrap.innerHTML = '<p class="uniko-cart-empty" data-i18n="cart_empty">Your cart is empty.</p>';
      if (foot) foot.hidden = true;
      return;
    }
    if (foot) foot.hidden = false;
    if (subtotal) subtotal.textContent = formatMoney(cart.total_price);
    wrap.innerHTML = cart.items
      .map((item) => {
        const img = item.image
          ? `<img src="${item.image}" alt="${(item.product_title || item.title || "").replace(/"/g, "&quot;")}" width="80" height="80" loading="lazy">`
          : "";
        return `<article class="uniko-cart-line" data-key="${item.key}">
          <a class="uniko-cart-thumb" href="${item.url || "#"}">${img}</a>
          <div class="uniko-cart-line-info">
            <a class="uniko-cart-line-title" href="${item.url || "#"}">${item.product_title || item.title}</a>
            <p class="uniko-cart-line-price">${formatMoney(item.final_line_price)}</p>
            <div class="uniko-cart-line-qty">
              <button type="button" data-cart-qty="-1" data-key="${item.key}" aria-label="Decrease quantity">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-qty="1" data-key="${item.key}" aria-label="Increase quantity">+</button>
              <button type="button" class="uniko-cart-remove" data-cart-remove data-key="${item.key}">Remove</button>
            </div>
          </div>
        </article>`;
      })
      .join("");
  };

  const fetchCart = () =>
    fetch("/cart.js", { credentials: "same-origin" })
      .then((r) => r.json())
      .then(renderCart)
      .catch(() => {});

  const changeItem = (key, quantity) =>
    fetch("/cart/change.js", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ id: key, quantity }),
    })
      .then((r) => r.json())
      .then(renderCart);

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-uniko-open-search], .mobile-search, .desktop-search")) {
      e.preventDefault();
      closeCart();
      openSearch();
      return;
    }
    if (e.target.closest("[data-uniko-close-search]")) {
      closeSearch();
      return;
    }
    if (e.target.closest("[data-uniko-open-cart]")) {
      e.preventDefault();
      closeSearch();
      fetchCart().then(openCart);
      return;
    }
    if (e.target.closest("[data-uniko-close-cart]")) {
      closeCart();
      return;
    }
    const qtyBtn = e.target.closest("[data-cart-qty]");
    if (qtyBtn) {
      const line = qtyBtn.closest("[data-key]");
      const key = qtyBtn.getAttribute("data-key") || line?.getAttribute("data-key");
      const delta = parseInt(qtyBtn.getAttribute("data-cart-qty"), 10) || 0;
      const current = parseInt(line?.querySelector(".uniko-cart-line-qty span")?.textContent || "1", 10);
      changeItem(key, Math.max(0, current + delta));
      return;
    }
    const removeBtn = e.target.closest("[data-cart-remove]");
    if (removeBtn) {
      changeItem(removeBtn.getAttribute("data-key"), 0);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeSearch();
    closeCart();
  });

  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;
    const isProduct =
      form.matches("#uniko-pdp-form, .uniko-pdp-form") ||
      (form.getAttribute("action") || "").indexOf("/cart/add") !== -1;
    if (!isProduct) return;
    e.preventDefault();
    const submitBtn = form.querySelector('[type="submit"], .uniko-pdp-atc');
    if (submitBtn) submitBtn.setAttribute("disabled", "disabled");
    const data = new FormData(form);
    fetch("/cart/add.js", {
      method: "POST",
      credentials: "same-origin",
      headers: { Accept: "application/json" },
      body: data,
    })
      .then((r) => {
        if (!r.ok) throw new Error("add failed");
        return r.json();
      })
      .then(() => fetchCart())
      .then(() => {
        closeSearch();
        openCart();
      })
      .catch(() => {
        form.submit();
      })
      .finally(() => {
        if (submitBtn) submitBtn.removeAttribute("disabled");
      });
  });

  fetchCart();
})();
