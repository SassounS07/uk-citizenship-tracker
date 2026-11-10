# Road to British Citizenship: how to put it online and install it on your phone

You don't need to know how to code. This takes about 10 minutes and costs nothing.

## What you're uploading

These **6 files**, and only these (ignore any other files or folders):

| File | What it is |
|---|---|
| `index.html` | The app itself |
| `manifest.json` | Tells phones the app's name and icon |
| `sw.js` | Lets the app work offline |
| `icon-192.png` | App icon (small) |
| `icon-512.png` | App icon (large) |
| `apple-touch-icon.png` | App icon for iPhone |

---

## Step 1: Create a free GitHub account

1. Go to **github.com** and click **Sign up**.
2. Follow the steps (email, password, username). Your username becomes part of your app's web address, so pick something you're happy with.

## Step 2: Create a repository (a folder for your app)

1. Once signed in, click the **+** in the top-right corner, then **New repository**.
2. **Repository name:** type `uk-tracker` (or any name with no spaces).
3. Choose **Public**. (Free GitHub Pages needs a public repository. Only the app's code is public. Your personal details are **never** uploaded; they stay on your phone.)
4. Tick **Add a README file**.
5. Click **Create repository**.

## Step 3: Upload the files

1. In your new repository, click **Add file** → **Upload files**.
2. Drag the 6 files listed above into the box, or click **choose your files** and select them.
3. Wait until all 6 show in the list.
4. Scroll down and click the green **Commit changes** button.

## Step 4: Turn on GitHub Pages

1. In the repository, click **Settings** (top menu, with the gear icon).
2. In the left menu, click **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main**, then **/ (root)**, then click **Save**.

## Step 5: Find your live link

1. Wait 1–2 minutes, then refresh the **Settings → Pages** screen.
2. At the top you'll see **"Your site is live at …"** with a link like:
   `https://your-username.github.io/uk-tracker/`
3. Click **Visit site** to check it works. Send that link to your phone (email it to yourself, for example).

> If you see a "404" page, wait another minute and refresh. The first publish can be slow.

## Step 6: Install it on your phone

### iPhone (must use Safari)
1. Open the link in **Safari** (not Chrome; iPhone only lets Safari add apps).
2. Tap the **Share** button (the square with an arrow pointing up).
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add**. The burgundy "UK" icon appears on your home screen and opens full-screen like a normal app.

### Android (Chrome)
1. Open the link in **Chrome**.
2. Tap the **⋮** menu (top-right).
3. Tap **Install app** (or **Add to Home screen** on some phones), then **Install**.

---

## Using the app

- **First time:** you'll see example dates with a yellow "Example" box. Change any detail (or tap **Start with a blank form**) and it starts saving your own details.
- **After that:** just open it. It recalculates from today's date every time.
- **Timeline:** drag along the line (or hover with a mouse) to see your progress and days left on any date. Tap a milestone for its details.
- **Light / dark:** use the three buttons at the top right (sun = light, screen = match your phone, moon = dark).
- **Backups:** your details live only on that phone. Tap **Save backup file** now and then, and before changing phones or clearing your browser. On a new phone, tap **Restore from file** and pick the backup.
- An app added to the home screen keeps its own storage, separate from the Safari or Chrome tab. Enter your details in the installed app, or move them across with a backup file.

## Updating the app later

1. In your repository, click the file you want to replace (for example `index.html`), or use **Add file → Upload files** and upload the new version with the **same name**.
2. Click **Commit changes**.
3. After 1–2 minutes, close and reopen the app on your phone. It picks up the new version automatically. Your saved details are not affected.
