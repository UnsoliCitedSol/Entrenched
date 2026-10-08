# Entrenched · Worlds Apart

A complete, single-player, browser mining roguelite. The site is static: no install, backend, account, database, build step or external runtime resources are needed.

## Publish on GitHub Pages

1. On GitHub, create a **public** repository named `entrenched` (or choose another name). Public repositories support Pages on GitHub Free.
2. Extract this ZIP on your computer. Upload the **files inside it** to the repository root, especially `index.html`. **Do not upload the ZIP itself or an extra enclosing folder.** In the repository, use **Add file → Upload files**, then commit to `main`.
3. Open the repository's **Settings → Pages**. Under **Build and deployment**, set **Source → Deploy from a branch**, then select **main** and **/(root)**, and click **Save**. If your default branch has a different name, use that name.
4. Wait for the Pages deployment to finish. The **Pages** settings screen will provide your published site link. You can also check the repository's **Actions** tab for a failed or pending deployment.

For a repository named `entrenched`, the usual project-site address is:

`https://YOUR-USERNAME.github.io/entrenched/`

This is a placeholder: replace `YOUR-USERNAME` with your actual account name. Use the URL shown in Pages settings as the final authority. For an organization, use its account name instead.

GitHub's official setup guide:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The `.nojekyll` marker skips unnecessary Jekyll processing. Some file managers hide it; the self-contained `index.html` also works without it. No custom GitHub Actions workflow is required.

## Play and saves

The website opens straight into the game. Use arrows/WASD or swipe to move and mine. Blast, Scan, Tools and Return are visible in the game. Waiting is safe: enemies respond only to chosen actions, never elapsed time.

Progress is stored in each visitor's browser, not in GitHub or a cloud account. **Settings → Export save / Import save** transfers progress between devices or from the downloaded version. A new website origin has separate browser storage, so export the old save before switching. Clearing browser/site data clears the local save. Private browsing may not preserve it.

No multiplayer, real-time deadlines, analytics or server-side code.

## Updating the website

Replace the root `index.html` with a newer bundled game, keeping its filename unchanged, and commit to the publishing branch. GitHub Pages will redeploy. Existing version-1 and version-2 saves are supported by this game.

Keep credentials, personal save exports and other private files out of the public repository. This package contains none.

## Credits

An independent fan reconstruction and expansion of **Entrenched**, originally made by **james1236** for Fancade. This is not an official Fancade release or the original executable.

Original credits include Bobaloney (tiles), Loopiloop (autotiler), Sounak9434 (noise), Origedit (explosion particles), sawdust (battery art), and the original playtesters. Original block patterns were reconstructed from public reference screenshots; the expansion and executable code are independent additions.

- Original game: https://james1236.itch.io/entrenched
- Reference: https://www.fancade.com/wiki/Entrenched

**Nunito**: the Nunito Project Authors, SIL Open Font License 1.1. The font is embedded in the HTML, with its license both embedded and included as `NUNITO-LICENSE.txt`.
