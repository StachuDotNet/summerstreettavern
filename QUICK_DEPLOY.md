# Quick Deploy to GitHub Pages

## One-Time Setup (Do This First!)

1. **Create GitHub repository**:
   - Go to https://github.com/new
   - Repository name: `summerstreettavern`
   - Make it **Public**
   - Click "Create repository"

2. **Connect your local repo to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/summerstreettavern.git
   git branch -M main
   git push -u origin main
   ```

## Deploy the Site (One Simple Command!)

```bash
npm run deploy
```

That's it! The command will:
- Build the production site
- Push it to a `gh-pages` branch
- GitHub will automatically host it

## View Your Site

After ~1 minute, your site will be live at:
**https://YOUR_USERNAME.github.io/summerstreettavern/**

## Updating the Site

Whenever you make changes:
1. Edit your files
2. Run: `npm run deploy`
3. Wait ~1 minute for changes to go live

## Important Notes

- Make sure your GitHub repo is **public** (free GitHub Pages only works with public repos)
- The first deploy might take 2-3 minutes to go live
- Subsequent deploys are faster (~1 minute)

## Custom Domain (Optional)

If you buy a domain (like summerst.bar):

1. Create a file `public/CNAME` with your domain:
   ```
   summerst.bar
   ```

2. Configure your domain's DNS to point to GitHub Pages

3. In your GitHub repo: Settings → Pages → Custom domain → Enter your domain

## Troubleshooting

**Site not loading?**
- Wait a few minutes after first deploy
- Check GitHub repo → Settings → Pages to see if it's enabled
- Make sure the repo is public

**404 errors when navigating?**
- This is normal for GitHub Pages with React Router
- The homepage will work fine
- Direct links to /events or /pool-tournament won't work without a server
- Users can navigate via the menu once on the site

**Need help?**
- Check the build worked: Run `npm run build` - should complete without errors
- Check git connection: Run `git remote -v` - should show your GitHub repo
