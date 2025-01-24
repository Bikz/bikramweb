# Symbols & Context

1. Project Title: 
   - "BikramBrar Web" or "My Profile" or "My Portfolio."
   - Used in page headers or metadata.

2. Pages & Routing:
   - `/` (Home) 
   - `/projects` 
   - `/blog` 
   - `/about` 
   - `/travel`
   - (We have hidden `/projects/repo-prompter` for now.)

3. Removed Components:
   - `ThemeToggle.tsx` references removed in Nav. 
   - The file itself still exists but is unused, in case we want to re-enable it in the future.

4. Hero Layout (Home Page):
   - Full screen section for “Welcome to My Profile” heading + short intro paragraphs + “Featured AI Projects” near the bottom.
   - Next sections: Work Experience, Blog.

5. Hidden/Commented-Out Project:
   - **Repo Prompter** on the home page and in the project listing, until it’s ready for prime time.

6. Images for Project Pages:
   - Mysti Health: recommended to store images under `/public/mystihealth/`
   - Dayplan App: recommended to store images under `/public/dayplan/`
   - Example usage with `Image` from `next/image`, using `fill` to scale properly.
