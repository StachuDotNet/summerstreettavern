# Deployment Instructions for GitHub Pages

## Quick Setup

1. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Name it `summerstreettavern` (or whatever you prefer)
   - Make it public
   - Don't initialize with README, .gitignore, or license

2. **Push this code to GitHub**:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/summerstreettavern.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy the dist folder to GitHub Pages**:
   ```bash
   cd dist
   git init
   git add -A
   git commit -m 'deploy'
   git push -f git@github.com:YOUR_USERNAME/summerstreettavern.git HEAD:gh-pages
   cd ..
   ```

4. **Enable GitHub Pages**:
   - Go to your repo on GitHub
   - Click Settings → Pages
   - Under "Source", select branch `gh-pages` and folder `/ (root)`
   - Click Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/summerstreettavern/`

## Automated Deployment (Optional)

The project includes a `deploy.sh` script for easier deployments:

```bash
./deploy.sh
```

Then manually push the dist folder:
```bash
cd dist
git push -f git@github.com:YOUR_USERNAME/summerstreettavern.git HEAD:gh-pages
cd ..
```

## Updating the Site

1. Make your changes to the source files
2. Build: `npm run build`
3. Deploy using the steps above

## Using Your Own Domain

If you want to use a custom domain (like summerst.bar):

1. Add a file called `CNAME` in the dist folder with your domain:
   ```
   summerst.bar
   ```

2. Configure your domain's DNS:
   - Add an A record pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub repo settings → Pages, enter your custom domain

## Alternative: Use GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

With this setup, the site automatically rebuilds and deploys whenever you push to main!
