---
title: 'Why Should You Learn Next.js?'
publishedAt: '2019-11-07'
summary: "Understand the growth behind JavaScript's hottest web framework and learn why Next.js can help you build web applications faster."
image: '/static/images/learn-nextjs/nextjs-trend.png'
---

You've heard great things about this new web framework called [Next.js](https://nextjs.org/),
but you're still not sure _why_ people are using it.

One way to understand why you should learn Next.js is to understand what problems it solves. This directly translates to why it's become so popular.

## Why Use A Framework?

Let's say you're a new startup trying to launch a website. You might have some requirements like:

- Splash page with information about the product
- About page describing the team
- Frequently asked questions
- Capture leads through a contact form
- Subscribe to a newsletter

There's nothing in these requirements which dictate the need for a framework.
You could absolutely deliver on these requirements using vanilla HTML, CSS, and JavaScript.

However, if we have some foresight, we might know that future requirements call for a user authentication flow and the beginnings of a SaaS product.

**The real value in using a framework** is developer productivity, shared knowledge, code reuse, and creating a platform for the future.
If we start with React/Next.js, we can satisfy the initial requirements with ease _and_ pave the way for the next iteration of the product.

## React

[React](https://reactjs.org/) has become the industry standard for building modern web applications.
Of 90,000 developers [surveyed by Stack Overflow](https://insights.stackoverflow.com/survey/2019), React was the most loved and most wanted web framework.

Why? With React, you can build anything from simple marketing splash pages to full-fledged web applications on the scale of Facebook.
It's flexible and composable. Developers love this.

<Image
  alt={`React.js Trend`}
  src={`/static/images/learn-nextjs/react-trend.png`}
  width={1116}
  height={742}
/>

This trend means that more developers than ever are learning React, and thus JavaScript as well.
It's become one of the hottest skills recruiters are looking for. JavaScript is the [#1 language used](https://octoverse.github.com/) according to GitHub.

<a aria-label="GitHub Octoberse" href="https://octoverse.github.com/">
  <Image
    alt={`GitHub Octoberse`}
    src={`/static/images/learn-nextjs/github.png`}
    width={1388}
    height={962}
  />
</a>

For companies, this means you're more likely to find employees who already know React.
For developers, this makes a very advantageous skill to add to your skillset.

According to [NPM trends](https://www.npmtrends.com/), it's outpacing other web frameworks like Angular and Vue by **~5 million installs/day**.

<Image
  alt={`NPM Install Trend`}
  src={`/static/images/learn-nextjs/npm-trend.png`}
  width={1500}
  height={621}
/>

This doesn't mean React is perfect. Since you're loading content client-side, you have to
wait for the JavaScript bundle to load before you can determine what to show on the page. This can be problematic for users
with slower connections.

Plus, search engines still struggle with indexing client-side JavaScript applications.
If you're concerned about Search Engine Optimization (SEO) and want your content indexed faster, it's better to send the markup from the server.
Enter Next.js.

## Next.js

[Next.js](https://nextjs.org/) solves both of those problems using server-side rendering. Next's framework allows you to build scalable, performant React code without the configuration hassle.
That's why so many companies depend on Next for shipping production applications.

<Image
  alt={`Companies using Next.js`}
  src={`/static/images/learn-nextjs/companies.png`}
  width={2344}
  height={380}
/>

### Zero-Config Approach

To properly ship a performant React application, there are a lot of things you must do right.
You'll want to correctly configure [Babel](https://babeljs.io/) so you can use modern JavaScript features, but still support legacy browsers.
You'll also want to bundle up all of your assets (e.g. multiple JavaScript files) to be included in your HTML file (using something like [Webpack](https://webpack.js.org/)). The list goes on.

Wouldn't it be nice to not have to worry about this?

This "JavaScript fatigue" prompted the creation of [Create React App](https://github.com/facebook/create-react-app) (CRA), which dramatically improved the developer experience of spinning up a new React app. But can we do better?

- Next.js supports IE11 and all modern browsers out of the box. Babel is configured for you, with an escape hatch to override if you need to.
- CRA combines all the JavaScript files into a single bundle, whereas Next.js has support for code splitting. When I visit `/route`, we're **only loading the JavaScript used on that page**. Better performance!
- Want to handle routing with CRA? That will require [react-router](https://reacttraining.com/react-router/) (or a similar library). Next.js has file-system based routing out of the box. No extra installation!

### Static Sites

Did I mention Next.js can handle static sites, too?

Running `next build` will [pre-render](https://nextjs.org/docs/basic-features/pages#pre-rendering) routes without data fetching to static HTML.
You can also use `getStaticProps` and `getStaticPaths` to generate a static site with dynamic data.

Plus, you can deploy in a few clicks to [Vercel](https://vercel.com/new).

### Conclusion

Next has [so many features](https://nextjs.org) it's hard to capture the breadth in a single article.
I would highly recommend checking out their website, trying out an example, and seeing if Next.js can help you build web applications faster.

```bash
npx create-next-app
```