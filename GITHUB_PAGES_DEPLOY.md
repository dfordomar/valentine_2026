# Deployment instructions for GitHub Pages

1. Push your project to a GitHub repository (public or private).
2. In your repo, go to Settings > Pages.
3. Under "Source", select the branch (usually `main` or `master`) and the root (`/`) folder.
4. Save. GitHub will build and deploy your site. The URL will be:
   `https://<your-username>.github.io/<repo-name>/`

## Tips
- Your entry file must be named `index.html` and be in the root of the repo.
- For custom domains, configure in the same Pages settings.
- If you use relative paths for assets, everything will work smoothly.
- Changes pushed to the selected branch will auto-deploy.

## Optional: Add a .nojekyll file
If you use folders that start with an underscore (e.g., `_assets`), add an empty `.nojekyll` file to the root to disable Jekyll processing.
