---
layout: post
title: How to deploy a Wordpress Site using Github Actions
date: 2020-08-05
includesMath: false
includesMusic: false
intro: ""
tags: post
---

I started using [Netlify](https://www.netlify.com/) a few weeks ago, and I've already gotten very used to the workflow it enables you to have:

1. You work on a local copy of your website
2. You push changes to Github
3. Netlify notices you made a change
3. It makes a fresh clone of the repository
3. It runs whatever build process you set up
3. It takes the result of that build process and deploys to the web

This workflow feels so good to me that I want to have it on every one of my projects – including the few Wordpress websites I work on. You can't just throw a Wordpress site onto Netlify (unless you go the headless CMS route, but that's a different story), but you can still have the nice workflow by leveraging Github's own build system: [Github Actions](https://github.com/features/actions).

## Github Actions

While Netlify's build process feels very much designed to *build and deploy the website when you push to the repository*, Github actions can pretty much *do anything you want on any event that can happen in a git repository*. That's powerful, but also means that they need a little more configuration.

You set up an Action (or *Workflow* – the terminology is a little confusing there) by creating a YAML file in a special folder called ```.github/workflows``` at the root of your project repository.

Mine looks like this[1]:

```yaml
name: CI
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install dependencies
      run: yarn install
    - name: Run build command
      run: yarn build
    - name: Deploy via FTP
      run: yarn deploy
      env:
        NODE_ENV: production
        FTP_HOST: {{"${{ secrets.FTP_HOST "}}}}
        FTP_USER: {{"${{ secrets.FTP_USER "}}}}
        FTP_PASSWORD: {{"${{ secrets.FTP_PASSWORD "}}}}
```

The ```on``` key at the top of the file tells Github when to run the workflow. In this case, that's whenever I ```push``` to the ```main``` branch.

Then you describe what work you want the workflow to do. Per [Github's documentation](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow):

> Workflows must have at least one job, and jobs contain a set of steps that perform individual tasks. Steps can run commands or use an action. You can create your own actions or use actions shared by the GitHub community and customize them as needed.

My workflow here has one job called ```deploy``` with four steps: 

1. ```actions/checkout@v2``` is an action [written by Github itself](https://github.com/marketplace/actions/checkout) that downloads a fresh copy of your repository.
1. ```Install dependencies``` runs ```yarn install``` which pulls down the dependencies I've listed in my ```package.json``` file.
1. ```Run build command``` triggers ```yarn run build```, which in turn is pointed at a gulp task that does the actual work of compiling my Sass, packaging my Javascript and whatever else I need to do.[2]
1. ```Deploy via FTP``` runs ```yarn run deploy```, which is pointed at [another gulp task](https://www.npmjs.com/package/vinyl-ftp) that uploads the contents of the repository (including the files we just built) to the server my Wordpress site lives on.

## Secrets

The last step is interesting: How does the gulp task know how to FTP into my server? I certainly don't want to put my login credentials into my repository, but how else could I tell my build process about them? Turns out Github has a mechanism called [secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) that's designed just for this purpose.


Instead of storing the secrets inside your repository (which, again, *terrible idea*), you go into your repository's settings on Github and enter them there, where they're stored safely and well-encrypted. The interface looks like this:

![Screenshot showing github secrets interface](/assets/gh-secrets.png)

Then, you can acess those secrets during your workflows by adding them as environment variables to individual *steps*  – that's what the ```env``` property in my YAML file does:

```yaml
env:
    NODE_ENV: production
    FTP_HOST: {{"${{ secrets.FTP_HOST "}}}}
    FTP_USER: {{"${{ secrets.FTP_USER "}}}}
    FTP_PASSWORD: {{"${{ secrets.FTP_PASSWORD "}}}}
```

Those environment variables make it all the way down into my gulpfile, where I access them using ```process.env```:

```js
function deploy() {
  const ftpConnection = ftp.create({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
  });
  // (rest of deployment code omitted)
}
```

This totally works! Whenever I push to the repository, the action is triggered and I can follow its progress through this nice UI Github gives you:

![Screenshot of github actions interface](/assets/gh-action.png)

My process for working on Wordpress sites now looks like this:

1. I work on a local copy of the site[3]
2. When I've made a change, I push it to Github
3. The workflow we just defined checks out the repository
4. It installs my dependencies and runs my build process
5. It FTPs into my server and uploads the freshly-built files

Just what I set out to do.


## Notes
{% footnotes %}
1. I'm only dealing with the Wordpress theme here (i.e a single folder), but if you had a more complicated setup (maybe involving custom functions) you could extend this configuration to accomodate for that, too.
2. I like using ```yarn run build``` instead of the actual gulp command here because it means that when I change my build process, I only have to update my ```package.json``` file and the Action will still work. It's also nice not to have to remember a whole bunch of different build commands as you switch between projects – it's always ```yarn build```.
3. I use [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) to run Wordpress locally.
{% endfootnotes %}