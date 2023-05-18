---
slug: gh-pages-deploy-error
title: "GitHub Pages deployment error: Permission denied to github-actions[bot]"
date: 2023-05-18
authors: [mauro]
tags: [github, deployment, docusaurus, github actions, automations]
---

While following the instructions for [Triggering deployment with GitHub Actions](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) for this Docusaurus website, I ran into this error:

```
/usr/bin/git push origin gh-pages
remote: Permission to maurom88/tech-doc-samples.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/maurom88/tech-doc-samples.git/': The requested URL returned error: 403
Error: Action failed with "The process '/usr/bin/git' failed with exit code 128"
```

Fortunately, a little googling brought me to [this solution](https://github.com/actions/checkout/issues/417#issuecomment-1383515952), which pointed me in the right direction:

`Settings > Actions > General > Workflow permissions > Read and write permissions`

After updating this setting, I was able to push a new commit and have the changes deployed automatically. Neat!
