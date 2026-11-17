from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
home = (ROOT / "sections" / "uniko-homepage.liquid").read_text(encoding="utf-8").splitlines()
root = "{{ routes.root_url }}"


def patch_links(text: str) -> str:
    text = text.replace('href="#accueil"', f'href="{root}"')
    for frag in (
        "boutique", "soins", "maquillage", "destockage", "a-propos", "recompenses",
        "visage", "yeux", "levres", "faq", "retours", "livraison", "promotions",
        "confidentialite", "conditions", "contact", "revendeurs", "grossiste", "presse",
        "affiliation", "newsletter", "durabilite", "certifications", "avis", "ingredients",
    ):
        text = text.replace(f'href="#{frag}"', f'href="{root}#{frag}"')
    text = text.replace('href="#compte"', 'href="{{ routes.account_url }}"')
    text = text.replace('href="#panier"', 'href="{{ routes.cart_url }}"')
    return text


header = patch_links("\n".join(home[1:67]))
drawer = patch_links("\n".join(home[68:85]))
menu_js = """
<script>
(function () {
  const siteTop = document.getElementById("site-top");
  if (!siteTop) return;
  const syncTopOffset = () =>
    document.documentElement.style.setProperty("--site-top", siteTop.offsetHeight + "px");
  syncTopOffset();
  window.addEventListener("resize", syncTopOffset);
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("mobile-nav");
  const overlay = document.getElementById("mobile-overlay");
  const menuClose = document.getElementById("mobile-menu-close");
  const setMobileMenuOpen = (open) => {
    header?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    drawer?.setAttribute("aria-hidden", open ? "false" : "true");
    toggle?.setAttribute("aria-expanded", open ? "true" : "false");
    toggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (!open) requestAnimationFrame(syncTopOffset);
  };
  toggle?.addEventListener("click", () => setMobileMenuOpen(!document.body.classList.contains("menu-open")));
  overlay?.addEventListener("click", () => setMobileMenuOpen(false));
  menuClose?.addEventListener("click", () => setMobileMenuOpen(false));
  drawer?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMobileMenuOpen(false)));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) setMobileMenuOpen(false);
  });
})();
</script>
"""
(ROOT / "sections" / "uniko-site-header.liquid").write_text(
    "{% comment %}Global site header{% endcomment %}\n"
    + header
    + "\n"
    + drawer
    + menu_js
    + """
{% schema %}
{
  "name": "Uniko site header",
  "tag": "div",
  "class": "uniko-site-header",
  "settings": []
}
{% endschema %}
""",
    encoding="utf-8",
)

footer = patch_links("\n".join(home[473:601]))
(ROOT / "sections" / "uniko-site-footer.liquid").write_text(
    "{% comment %}Global site footer{% endcomment %}\n"
    + footer
    + """
{% schema %}
{
  "name": "Uniko site footer",
  "tag": "section",
  "class": "uniko-site-footer",
  "settings": []
}
{% endschema %}
""",
    encoding="utf-8",
)
print("chrome sections written")