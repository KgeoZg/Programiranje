# just-the-docs-template

Nastavni materijal uz vježbe namijenjen studentima kolegija **Programiranje na Geodetskom fakulteta Sveučilišta u Zagrebu**.

# Programiranje

<p align="justify">Programiranje je temeljni način na koji suvremeni svijet oblikuje, automatizira i razumije složene sustave. U ovom dokumentu programiranje se razmatra kroz objektno orijentirani pristup, pri čemu se naglasak stavlja na modeliranje problema pomoću klasa, objekata i njihovih međusobnih odnosa. Takav pristup omogućuje jasnije razmišljanje o strukturi programa, njegovoj održivosti i mogućnosti daljnjeg razvoja.

<p align="justify">Java je jedan od Objektno orijentiranih programskih jezika koji na jasan i eksplicitan način podržava objektno orijentirano programiranje, uz istodobnu primjenu u stvarnim, industrijskim okruženjima. Kao jezik koji se temelji na Java virtualnom stroju (JVM), Java omogućuje prenosivost, stabilnost i dugoročnu održivost programskih rješenja, što je čini prikladnom i za učenje temeljnih koncepata i za razvoj aplikacija.

<p align="justify">Cilj ovog materijala nije samo upoznavanje sa sintaksom jezika Java, već razumijevanje načina razmišljanja programera. Programiranje se ovdje promatra kao proces analize problema, apstrakcije, dizajniranja rješenja i kritičkog vrednovanja vlastitog koda.

<p align="justify">Dokument je strukturiran tako da postupno uvodi koncepte, a oblikovan da potakne aktivan pristup učenju: čitanje, isprobavanje koda i promišljanje ponuđenih rješenja.

<p><ul>Preporučena literatura za bolje razumijevanje sadržaja vježbi:
<li>1. Kljajić, I., Programiranje, ppt-predavanja</li>
<li>2. Schildt, H., [Java The Complete Reference](https://www.sietk.org/downloads/javabook.pdf), 9th edition, Oracle, 2014</li>
<li>3. Materijali objavljeni na e-kolegiju</li>
<li>4. Web izvori: npr. https://www.w3schools.com/java/default.asp</li></ul></p>

The Just the Docs theme automatically includes the [`jekyll-seo-tag`] plugin.

To add an extra plugin, you need to add it in the `Gemfile` *and* in `_config.yml`. For example, to add [`jekyll-default-layout`]:

- Add the following to your site's `Gemfile`:

  ```ruby
  gem "jekyll-default-layout"
  ```

- And add the following to your site's `_config.yml`:

  ```yaml
  plugins:
    - jekyll-default-layout
  ```

Note: If you are using a Jekyll version less than 3.5.0, use the `gems` key instead of `plugins`.

## Publishing your site on GitHub Pages

1.  If your created site is `YOUR-USERNAME/YOUR-SITE-NAME`, update `_config.yml` to:

    ```yaml
    title: YOUR TITLE
    description: YOUR DESCRIPTION
    theme: just-the-docs

    url: https://YOUR-USERNAME.github.io/YOUR-SITE-NAME

    aux_links: # remove if you don't want this link to appear on your pages
      Template Repository: https://github.com/YOUR-USERNAME/YOUR-SITE-NAME
    ```

2.  Push your updated `_config.yml` to your site on GitHub.

3.  In your newly created repo on GitHub:
    - go to the `Settings` tab -> `Pages` -> `Build and deployment`, then select `Source`: `GitHub Actions`.
    - if there were any failed Actions, go to the `Actions` tab and click on `Re-run jobs`.

## Building and previewing your site locally

Assuming [Jekyll] and [Bundler] are installed on your computer:

1.  Change your working directory to the root directory of your site.

2.  Run `bundle install`.

3.  Run `bundle exec jekyll serve` to build your site and preview it at `localhost:4000`.

    The built site is stored in the directory `_site`.

## Publishing your built site on a different platform

Just upload all the files in the directory `_site`.

## Customization

You're free to customize sites that you create with this template, however you like!

[Browse our documentation][Just the Docs] to learn more about how to use this theme.

## Hosting your docs from an existing project repo

You might want to maintain your docs in an existing project repo. Instead of creating a new repo using the [just-the-docs template](https://github.com/just-the-docs/just-the-docs-template), you can copy the template files into your existing repo and configure the template's Github Actions workflow to build from a `docs` directory. You can clone the template to your local machine or download the `.zip` file to access the files.

### Copy the template files

1.  Create a `.github/workflows` directory at your project root if your repo doesn't already have one. Copy the `pages.yml` file into this directory. GitHub Actions searches this directory for workflow files.

2.  Create a `docs` directory at your project root and copy all remaining template files into this directory.

### Modify the GitHub Actions workflow

The GitHub Actions workflow that builds and deploys your site to Github Pages is defined by the `pages.yml` file. You'll need to edit this file to that so that your build and deploy steps look to your `docs` directory, rather than the project root.

1.  Set the default `working-directory` param for the build job.

    ```yaml
    build:
      runs-on: ubuntu-latest
      defaults:
        run:
          working-directory: docs
    ```

2.  Set the `working-directory` param for the Setup Ruby step.

    ```yaml
    - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.3'
          bundler-cache: true
          cache-version: 0
          working-directory: '${{ github.workspace }}/docs'
    ```

3.  Set the path param for the Upload artifact step:

    ```yaml
    - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/_site/
    ```

4.  Modify the trigger so that only changes within the `docs` directory start the workflow. Otherwise, every change to your project (even those that don't affect the docs) would trigger a new site build and deploy.

    ```yaml
    on:
      push:
        branches:
          - "main"
        paths:
          - "docs/**"
    ```

## Licensing and Attribution

This repository is licensed under the [MIT License]. You are generally free to reuse or extend upon this code as you see fit; just include the original copy of the license (which is preserved when you "make a template"). While it's not necessary, we'd love to hear from you if you do use this template, and how we can improve it for future use!

The deployment GitHub Actions workflow is heavily based on GitHub's mixed-party [starter workflows]. A copy of their MIT License is available in [actions/starter-workflows].

----

[^1]: [It can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site).

[Jekyll]: https://jekyllrb.com
[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[GitHub Pages]: https://docs.github.com/en/pages
[GitHub Pages / Actions workflow]: https://github.blog/changelog/2022-07-27-github-pages-custom-github-actions-workflows-beta/
[Bundler]: https://bundler.io
[use this template]: https://github.com/just-the-docs/just-the-docs-template/generate
[`jekyll-default-layout`]: https://github.com/benbalter/jekyll-default-layout
[`jekyll-seo-tag`]: https://jekyll.github.io/jekyll-seo-tag
[MIT License]: https://en.wikipedia.org/wiki/MIT_License
[starter workflows]: https://github.com/actions/starter-workflows/blob/main/pages/jekyll.yml
[actions/starter-workflows]: https://github.com/actions/starter-workflows/blob/main/LICENSE
