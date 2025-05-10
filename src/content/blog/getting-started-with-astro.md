---
title: 'Getting Started with Astro: The Modern Web Framework'
description: 'A beginner-friendly introduction to Astro, explaining why its gaining popularity and how to create your first Astro project.'
pubDate: '2024-05-20'
heroImage: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
category: 'Frameworks'
tags: ['Web Development', 'Astro', 'JavaScript', 'Frontend', 'Performance']
---

# Getting Started with Astro: The Modern Web Framework

Astro is a modern web framework that's quickly gaining popularity for its unique approach to building websites. In this guide, we'll introduce Astro's core concepts and show you how to get started with your first Astro project.

## What is Astro?

Astro is a web framework focused on content-driven websites like blogs, marketing sites, documentation, and portfolios. Its key features include:

- **Island Architecture**: Load only the JavaScript you need
- **Server-first**: Generate HTML on the server for better performance
- **Zero JavaScript by default**: Deliver lightweight pages
- **Edge-ready**: Deploy anywhere, including edge networks
- **Customizable**: Bring your favorite UI components and libraries

## Why Choose Astro?

Here are some compelling reasons to consider Astro for your next project:

1. **Performance First**: Astro prioritizes speed and efficiency, delivering only the necessary JavaScript.
2. **Framework Agnostic**: Use React, Vue, Svelte, Solid, or other UI frameworks together in the same project.
3. **Content Focus**: Built-in support for Markdown, MDX, and other content formats.
4. **Full-Featured**: Includes routing, asset handling, build optimization, and more.
5. **Flexible**: Works well for both static sites and server-rendered applications.

## Setting Up Your First Astro Project

Let's walk through creating a simple Astro project.

### Step 1: Create a New Project

The easiest way to start is using the Astro CLI:

```bash
# Create a new project with npm
npm create astro@latest my-astro-project

# Or with pnpm
pnpm create astro@latest my-astro-project

# Or with Yarn
yarn create astro my-astro-project
```

The CLI will guide you through the setup process, offering templates and configuration options.

### Step 2: Understand the Project Structure

After creating your project, you'll see a structure like this:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Let's understand what each folder is for:

- **public/**: Static assets that don't need processing
- **src/components/**: Reusable UI components
- **src/layouts/**: Page layouts and templates
- **src/pages/**: File-based routing (each file becomes a route)
- **astro.config.mjs**: Configuration file for your Astro project

### Step 3: Create Your First Astro Component

Astro components have a .astro extension and use a template syntax similar to HTML with JavaScript expressions. Let's create a simple component:

```astro
---
// src/components/Greeting.astro
// This is the component script section
const { name = "friend" } = Astro.props;
---

<!-- This is the component template section -->
<div class="greeting">
  <h2>Hello, {name}!</h2>
  <p>Welcome to Astro!</p>
</div>

<style>
  /* This is scoped to the component */
  .greeting {
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: #3b82f6;
    margin-top: 0;
  }
</style>
```

### Step 4: Use the Component in a Page

Now let's use this component in a page:

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Greeting from '../components/Greeting.astro';

const pageTitle = "Welcome to My Astro Site";
---

<Layout title={pageTitle}>
  <main>
    <h1>{pageTitle}</h1>
    <Greeting name="Astro Developer" />
    <p>
      This is my first Astro site. I'm learning how to build
      fast, content-focused websites with this amazing framework.
    </p>
  </main>
</Layout>
```

### Step 5: Add Dynamic Content with Markdown

One of Astro's strengths is its built-in support for content. Let's create a simple blog post with Markdown:

1. First, install the required dependencies:

```bash
npm install @astrojs/mdx
```

2. Update your `astro.config.mjs` to include the MDX integration:

```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()]
});
```

3. Create a blog post in `src/pages/blog/hello-world.md`:

```markdown
---
title: "Hello, World!"
pubDate: 2024-05-01
description: "This is my first blog post using Astro."
author: "Astro Learner"
image:
    url: "https://astro.build/assets/blog/astro-1-release-update/cover.jpeg"
    alt: "The Astro logo on a starry background."
tags: ["astro", "blogging", "learning in public"]
---

# Hello, World!

This is my first blog post using Astro. I'm excited to share my journey as I learn this new framework.

## What I've learned so far

1. How to set up a new Astro project
2. Creating layouts and components
3. Working with Markdown for content

Stay tuned for more updates as I continue to explore Astro!
```

## Deploying Your Astro Site

Astro sites can be easily deployed to various platforms:

1. **Static Deployment**: Netlify, Vercel, GitHub Pages, etc.
2. **Server Deployment**: Deno Deploy, Netlify Functions, Vercel Edge Functions, etc.

The build command is typically:

```bash
npm run build
```

This generates your optimized site in the `dist/` directory, ready for deployment.

## Advanced Features

As you get more comfortable with Astro, you might want to explore:

1. **Integrations**: Add support for React, Vue, Tailwind CSS, and more
2. **Content Collections**: Organize and validate your content
3. **API Routes**: Create serverless endpoints within your Astro app
4. **Image Optimization**: Automatically optimize images for the web
5. **View Transitions**: Create smooth page transitions

## Conclusion

Astro offers a modern approach to building websites that prioritizes performance and developer experience. Its island architecture delivers the best of both static and dynamic worlds, making it an excellent choice for content-focused websites.

By starting with the basics outlined in this guide, you'll be well on your way to building fast, content-rich websites with Astro. As you progress, Astro's flexibility allows you to incorporate more advanced features and integrations as needed.

Whether you're building a personal blog, documentation site, or marketing page, Astro provides the tools and performance to create exceptional web experiences.