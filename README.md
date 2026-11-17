# Uniko Beauties

Homepage (French) inspired by premium organic beauty storefronts. Includes a **Shopify Online Store 2.0** theme so the same design can run on Shopify when this repo is connected.

## Local preview

Open `index.html` in a browser, or:

```bash
python -m http.server 5500
```

Then visit `http://127.0.0.1:5500/`.

## Edit the site

1. Change **`index.html`** (main source for local development).
2. Regenerate Shopify files:

```bash
python build-shopify-theme.py
```

This updates `assets/uniko.css`, `sections/uniko-homepage.liquid`, and copies images into `assets/images/`.

## Connect to Shopify (GitHub)

1. In **Shopify Admin** → **Online Store** → **Themes**.
2. **Add theme** → **Connect from GitHub** (or Theme library → GitHub).
3. Authorize GitHub and select **`Roshanalikhan2002/unikobeauties`** branch **`main`**.
4. After import, click **Publish** to make it the live storefront (or preview first).

The homepage template uses section **Page d'accueil Uniko** (`sections/uniko-homepage.liquid`).

### Shopify CLI (optional)

```bash
shopify theme dev --store your-store.myshopify.com
```

## Repository

https://github.com/Roshanalikhan2002/unikobeauties