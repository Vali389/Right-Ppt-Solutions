<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep the React 19 / TanStack Start / Tailwind v4 framework and file-based routing; the supported platform stack must remain deployable on Lovable.
- Share brand navigation, photographic heroes, section patterns and contact assistant through browser-safe components; every content page has its own route metadata.
- Contact submissions open a prefilled WhatsApp conversation rather than claiming delivery; there is no connected message-storage service.
- Keep unverified testimonial content explicitly labeled as samples until real customer quotes are supplied.

- Keep expanded homepage storytelling in HomeExtras with reusable section headings; page composition stays separate from presentation details.
- ServiceExplorer derives its selected service from the route hash so service links, direct visits and browser history show the same detail view.
