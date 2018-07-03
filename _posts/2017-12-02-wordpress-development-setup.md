---
layout: post
title:  "A nice Wordpress development setup"
date: 2017-12-03 22:00:00
tags: ""
thumb: ""
intro: "I've been doing quite a few Wordpress sites for people lately, so I spent some time making sure I my development setup is still good to go. I'm mostly writing this for my own documentation, but maybe there's some useful bits in here for you, too."
---

This setup is all command line based, but once you get used to it's *much* nicer than the [XAMPP](https://www.apachefriends.org/index.html)-based workflow I had before.


### VVV

All my projects run on [VVV](https://varyingvagrantvagrants.org/), which (as far as I understand) is a wrapper around [Vagrant]() and [Virtualbox](). You install those two first, then pull down the VVV repo following [these instructions](https://varyingvagrantvagrants.org/docs/en-US/installation/). Once that's done, you can run

```
vagrant up
```

which spins up a virtual machine with a special Unix version that has all the stuff Wordpress needs to function - PHP, MySQL and whatever else. [Updating VVV can be a bit finicky](https://wpbeaches.com/update-varying-vagrant-vagrants-vvv/).

To start a new Wordpress project, you open the ``vvv-custom.yml`` file and add an entry like this:

```
my-site:
    repo: https://github.com/Varying-Vagrant-Vagrants/custom-site-template.git
    site_title: "My Cool Website"
    hosts:
        - my-cool-site.test
```

[The documentation goes into more detail on this](https://varyingvagrantvagrants.org/docs/en-US/adding-a-new-site/). Then you run ``vagrant up --provision``, which goes through your ``vvv-custom.yml`` file and sets up a fresh Wordpress install for each site you've configured. 

The default domain extension used to be ``.dev``, but apparently [Google has bought that](https://github.com/Varying-Vagrant-Vagrants/VVV/issues/583), which leads to all sorts of problems. I have a bunch of sites still configured to ``.dev`` domains, but it looks like [the migration is non-trivial](https://github.com/Varying-Vagrant-Vagrants/VVV/issues/583#issuecomment-332046448). So I'm going to leave my existing sites for now until something breaks.

## Browsersync

I use [Grunt Browsersync](https://browsersync.io/docs/grunt) so I don't have to refresh the page when I'm working (it also does CSS injection and other neat things). You can point it to the VVV domain in your ``gruntfile.js`` using the ``proxy`` option:

```
browserSync: {
    dev: {
        bsFiles: {
            src : 'assets/css/style.css'
        },
        options: {
            proxy: "my-cool-site.test"
        }
    }
}
```

Works like a charm.

## Updating Wordpress using WP-CLI

Another neat thing you can do is update plugins, themes and Wordpress itself right from the command line using [WP-CLI](http://wp-cli.org/). That feels much nicer to me than clicking around the Wordpress admin.

The first thing you need to do is ``ssh`` into your virtual machine:

```
vagrant ssh
```

On my Windows machine I have to do this in Git Bash because that comes with an SSH client. Then you ``cd`` into the folder that belongs to whichever site you're working on: 

```
cd /vagrant/www/my-cool-site/
```

On my Windows machine the ``/vagrant`` folder is invisible for some reason, i.e. it doesn't show up when you run ``ls``. [This seems to be a known issue](https://stackoverflow.com/questions/28999137/cannot-see-any-files-or-folders-inside-my-vagrant-root-folder-in-my-vm), but it's no big deal since you can still ``cd`` into it.

Then you can run this and walk away while your site updates itself:

```
wp core update ; wp plugin update --all; wp theme update --all
```

*How nice is that.* WP-CLI has [a lot more options](https://developer.wordpress.org/cli/commands/) to make finer-grained changes if you need to.

## Installing plugins with WP-CLI

```
wp plugin instll custom-post-type-ui --activate
wp plugin install timber-library --activate
```

## Todo

- While my themes are on Github, I haven't found a compelling way to deploy from there. Might be worth just paying for a service like [FTPloy](https://ftploy.com/) that does it for you.
- I will need to buy [WP Migrate DB Pro](https://deliciousbrains.com/wp-migrate-db-pro/) at some point to migrate data between my local Wordpress install and the live version. 