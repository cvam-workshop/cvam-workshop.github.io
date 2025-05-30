# CVAM 2025 Workshop at ICCV 2025

Page website template is based on 2021.djangocon.us.

[![Contributors](https://img.shields.io/github/contributors/djangocon/2021.djangocon.us.svg)](https://github.com/djangocon/2021.djangocon.us/graphs/contributors)

The 2021 DjangoCon.us website is a static site compiled with [Jekyll](https://jekyllrb.com/docs/home/). The frontend relies heavily on the [Foundation](http://foundation.zurb.com/sites/docs/) framework. Frontend dependencies are installed and updated with [npm](https://www.npmjs.com/).

## Code of Conduct

As a contributor, you can help us keep the Django community open and inclusive.
Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

Get started contributing by reading our [Contributing](CONTRIBUTING.md) guidelines.

### Contributing via Browser

1. Navigate to the [DjangoCon U.S. website repo](https://github.com/djangocon/2021.djangocon.us) on GitHub. In the upper right hand corner of the repo, click the "Fork" button. Alternatively, click on an individual file and click the pencil icon. GitHub will automatically fork the repo for you.

2. Head over to your GitHub account, where you will find the forked repo. This is a copy of the official code. Your changes to this forked code will not affect the official code, unless you submit a pull request and an admin merges your pull request.

3. For changes that do not need to be tested locally, the change can be made and submitted in the browser.

4. Within your forked repo, make sure the "Branch" tab is set to the `main` branch.

5. Once you are on the correct branch, navigate to the file you intend to change and click the pencil icon to open it. Make the change and click the "Commit changes" button.

6. Staying within your forked repo, navigate back to the main page of the branch (note: your pull request should be submitted via your forked repo, not the main repo). Click "New pull request." Click the "Commit changes" button. At the "Comparing changes" page, double check that you are happy with your proposed change. If so, click "Create pull request." Add a descriptive title and comment if applicable, then click "Create pull request" at the bottom to submit. An admin will review your proposed change, merge it, or give you feedback. If you are not ready for your pull request to be immediately merged, you can let those reviewing pull requests know by using the acronym WIP (Work in Progress) or a similar message in your pull request title.

#### Example: Updating Organizer Info

Follow the above instructions to step 5.

Click on the `_organizer` folder, then your own `MY_NAME.md` file. Click on the pencil icon to open the file. Make your changes, making sure that your information is placed within quotation marks.

**To add a photo:** navigate to the `static/img/organizers` folder. Click "Upload files". Drag or choose your photo file into the window. Click "Commit changes". Your photo should now be in the folder. Ideally, the photo should be 400 x 400px. In your `MY_NAME.md` file, make sure the path to your photo has the proper name and file ending (`.jpg`, `.png`, etc.).

If you need assistance, please ask! Complete step 6.

### Contributing via Local Development

For changes that require cloning/running the code locally, follow the above instructions to step 5. Instead of navigating to the file through the browser, open up your computer terminal (you will need to have Git installed locally and a code editor of your choice).

Clone your forked repo locally via the terminal, replacing the username in the URL with your own (note: not all operating systems will use a `$` as a terminal prompt).

```bash
$ git clone https://github.com/<your-username>/2021.djangocon.us
```

Change directory into the folder

```bash
$ cd 2021.djangocon.us
```

Verify that you are on the `main` branch

```bash
$ git branch
```

Follow the instructions below to run the website on a local server. GitHub recommends using [Bundler](http://bundler.io/) to install and run Jekyll. [Ruby](https://www.ruby-lang.org) is a pre-requisite. One of the project dependencies (nokogiri) requires a Ruby version >= 2.1.0. See the [Jekyll Quick-start Guide](https://jekyllrb.com/docs/quickstart/) for more info.

#### Install Jekyll

You might need to use ```$ sudo gem install jekyll bundler foreman```

```bash
$ gem install jekyll bundler
$ bundle install
```

#### Install Node Dependencies

You will need Node v10.0 or greater to compile frontend assets. We're using [Webpack](https://webpack.js.org/) to compile Scss and JavaScript.

You'll need to install all the JS dependencies.

```bash
$ npm install .
# installs dependencies listed in package.json
```

#### Compile CSS & JS

```bash
$ npm run build
# Builds production-ready assets
```

#### Run Jekyll

```bash
$ bundle exec jekyll serve
# => Now browse to http://localhost:4000
```

#### Run html-proofer to find broken links and accessibility issues

```bash
$ bundle exec rake test
```

#### Pushing to GitHub and Submitting a Pull Request

After you have made your changes, you will need to push the local files with the changes back to GitHub in order to submit a pull request. Assuming you are still on the `main` branch, you will be pushing your changes from the local `main` branch to the `main` branch of the forked repo at your GitHub account.

```bash
$ git add .
$ git commit -m "Your note"
$ git push origin main
```

You will then resume the process at step 6 to submit a pull request.

If you plan to continue working locally and submitting pull requests, you may want to add an upstream remote locally that points to the DjangoCon US repo, in order to fetch changes. You may also want to consider creating a feature branch (also known as a "topic" branch), making your changes there (instead of in the `main` branch), pushing to GitHub and submitting the update via pull request. You can then keep your `main` branch up-to-date while working on multiple features.

### Adding Contributors

If you have gone through the previous installation steps, the `all-contributors-cli` package should already be installed locally by npm. The developer dependency and scripts can be found in `package.json` and the init config and JSON entries in the `.all-contributorsrc` file.

To add a contributor by GitHub username (this will add a JSON entry to `.all-contributorsrc` and add the contributor to the `README` list), run the following command, hitting enter twice to avoid choosing any contribution type

```bash
$ npm run add -- <username>
hit enter twice
```

To generate a README list from the `.all-contributorsrc` file

```bash
$ npm run generate
```

## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| <a href='http://mtrythall.com'><img src='https://avatars2.githubusercontent.com/u/84750?v=3' width='72px;'/></a> | <a href='http://jefftriplett.com/'><img src='https://avatars2.githubusercontent.com/u/50527?v=3' width='72px;'/></a> | <a href='http://KellyCreativeTech.com'><img src='https://avatars3.githubusercontent.com/u/202590?v=3' width='72px;'/></a> | <a href='http://laceyhenschel.com'><img src='https://avatars2.githubusercontent.com/u/2286304?v=3' width='72px;'/></a> | <a href='http://katherinemichel.github.io'><img src='https://avatars3.githubusercontent.com/u/4193054?v=3' width='72px;'/></a> | <a href='http://www.PeregrineSalon.com'><img src='https://avatars3.githubusercontent.com/u/68164?v=3' width='72px;'/></a> | <a href='https://github.com/rebkin05'><img src='https://avatars1.githubusercontent.com/u/13985355?v=3' width='72px;'/></a> | <a href='https://github.com/deatonjm'><img src='https://avatars0.githubusercontent.com/u/3345131?v=3' width='72px;'/></a> |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| <a href='http://twitter.com/webmedic'><img src='https://avatars1.githubusercontent.com/u/744669?v=3' width='72px;'/></a> | <a href='https://github.com/Nandutu'><img src='https://avatars1.githubusercontent.com/u/7518308?v=3' width='72px;'/></a> | <a href='http:/anna-oz.tumblr.com'><img src='https://avatars2.githubusercontent.com/u/8700795?v=3' width='72px;'/></a> | <a href='http://about.me/craigbruce'><img src='https://avatars2.githubusercontent.com/u/1503648?v=3' width='72px;'/></a> | <a href='https://github.com/daheats'><img src='https://avatars2.githubusercontent.com/u/20408533?v=3' width='72px;'/></a> | <a href='https://github.com/jessiofhall'><img src='https://avatars0.githubusercontent.com/u/12751372?v=3' width='72px;'/></a> | <a href='https://github.com/SaraDGore'><img src='https://avatars3.githubusercontent.com/u/2285473?v=3' width='72px;'/></a> | <a href='http://kojoidrissa.com/'><img src='https://avatars3.githubusercontent.com/u/5251109?v=3' width='72px;'/></a> |
| <a href='https://github.com/moniquemurphy'><img src='https://avatars0.githubusercontent.com/u/13872721?v=3' width='72px;'/></a> | <a href='https://github.com/amfitz'><img src='https://avatars0.githubusercontent.com/u/15040326?v=3' width='72px;'/></a> | <a href='https://github.com/cholmes5'><img src='https://avatars2.githubusercontent.com/u/27741978?v=3' width='72px;'/></a> | <a href='http://www.databasesoup.com'><img src='https://avatars3.githubusercontent.com/u/115146?v=3' width='72px;'/></a> | <a href='http://glasnt.com'><img src='https://avatars0.githubusercontent.com/u/813732?v=3' width='72px;'/></a> | <a href='https://github.com/lgh2'><img src='https://avatars0.githubusercontent.com/u/17437250?v=4' width='72px;'/></a> | <a href='http://phildini.net'><img src='https://avatars3.githubusercontent.com/u/710999?v=4' width='72px;'/></a> | <a href='https://github.com/h34th3r329'><img src='https://avatars1.githubusercontent.com/u/15834992?v=4' width='72px;'/></a> |
| <a href='http://twitter.com/jackmccloy'><img src='https://avatars2.githubusercontent.com/u/7756138?v=4' width='72px;'/></a> | <a href='https://github.com/ariannedee'><img src='https://avatars2.githubusercontent.com/u/2425730?v=4' width='72px;'/></a> | <a href='http://ana-balica.github.io/'><img src='https://avatars3.githubusercontent.com/u/2039122?v=4' width='72px;'/></a> | <a href='http://jonibologna.com/'><img src='https://avatars0.githubusercontent.com/u/5723303?v=4' width='72px;'/></a> | <a href='http://lmdragun.github.io'><img src='https://avatars0.githubusercontent.com/u/11346889?v=4' width='72px;'/></a> | <a href='https://www.davidfischer.name/'><img src='https://avatars3.githubusercontent.com/u/185043?v=4' width='72px;'/></a> | <a href='https://github.com/fcurella'><img src='https://avatars3.githubusercontent.com/u/89607?v=4' width='72px;'/></a> | <a href='http://thekennethlove.com'><img src='https://avatars1.githubusercontent.com/u/11908?v=4' width='72px;'/></a> |
| <a href='https://github.com/katialira'><img src='https://avatars3.githubusercontent.com/u/8711200?v=4' width='72px;'/></a> | <a href='https://emullaney.github.io'><img src='https://avatars0.githubusercontent.com/u/11393311?v=4' width='72px;'/></a> | <a href='http://www.adamfast.com'><img src='https://avatars0.githubusercontent.com/u/135851?v=4' width='72px;'/></a> | <a href='http://robertroskam.com'><img src='https://avatars3.githubusercontent.com/u/806571?v=4' width='72px;'/></a> | <a href='http://www.rmcomplexity.com'><img src='https://avatars0.githubusercontent.com/u/4007280?v=4' width='72px;'/></a> | <a href='https://github.com/drewbrew'><img src='https://avatars1.githubusercontent.com/u/7773256?v=4' width='72px;'/></a> | <a href='https://github.com/oreo1029'><img src='https://avatars1.githubusercontent.com/u/24420647?v=4' width='72px;'/></a> | <a href='https://noumenal.es/'><img src='https://avatars1.githubusercontent.com/u/64686?v=4' width='72px;'/></a> |
| <a href='https://github.com/rlconley'><img src='https://avatars1.githubusercontent.com/u/6653029?v=4' width='72px;'/></a> | <a href='https://flinkman.com'><img src='https://avatars1.githubusercontent.com/u/29408?v=4' width='72px;'/></a> | <a href='https://github.com/oboechick'><img src='https://avatars1.githubusercontent.com/u/15068476?v=4' width='72px;'/></a> | <a href='http://humrich.us'><img src='https://avatars1.githubusercontent.com/u/4661889?v=4' width='72px;'/></a> | <a href='http://nicolezuckerman.com'><img src='https://avatars0.githubusercontent.com/u/2499004?v=4' width='72px;'/></a> | <a href='https://github.com/troy2914'><img src='https://avatars0.githubusercontent.com/u/8680944?v=4' width='72px;'/></a> | <a href='https://github.com/bdeangelis'><img src='https://avatars0.githubusercontent.com/u/1050007?v=4' width='72px;'/></a> | <a href='https://github.com/jlgimeno'><img src='https://avatars0.githubusercontent.com/u/17421585?v=4' width='72px;'/></a> |
| <a href='https://github.com/cedarfall'><img src='https://avatars2.githubusercontent.com/u/50991099?v=4' width='72px;'/></a> | <a href='https://github.com/VishvajitP'><img src='https://avatars3.githubusercontent.com/u/5609697?v=4' width='72px;'/></a> | <a href='http://nicoledominguez.com'><img src='https://avatars0.githubusercontent.com/u/915966?v=4' width='72px;'/></a> | <a href='https://github.com/darkcloud1801'><img src='https://avatars3.githubusercontent.com/u/5150596?v=4' width='72px;'/></a> | <a href='http://www.TheGeekyWay.com'><img src='https://avatars3.githubusercontent.com/u/8039608?v=4' width='72px;'/></a> | <a href='https://chriswilcox.dev'><img src='https://avatars2.githubusercontent.com/u/638797?v=4' width='72px;'/></a> | <a href='http://micahlyle.com'><img src='https://avatars1.githubusercontent.com/u/10660805?v=4' width='72px;'/></a> | <a href='https://github.com/apps/dependabot'><img src='https://avatars0.githubusercontent.com/in/29110?v=4' width='72px;'/></a> |
| <a href='http://snowgiraffe.com'><img src='https://avatars3.githubusercontent.com/u/59829?v=4' width='72px;'/></a> | <a href='https://dane.engineering'><img src='https://avatars3.githubusercontent.com/u/1808306?v=4' width='72px;'/></a> | <a href='http://www.DawnWages.info/apps'><img src='https://avatars1.githubusercontent.com/u/20374042?v=4' width='72px;'/></a> | <a href='https://github.com/felipe-lee'><img src='https://avatars0.githubusercontent.com/u/35938642?v=4' width='72px;'/></a> | <a href='http://frances.codes'><img src='https://avatars2.githubusercontent.com/u/15336794?v=4' width='72px;'/></a> | <a href='https://github.com/mwhansen'><img src='https://avatars3.githubusercontent.com/u/374299?v=4' width='72px;'/></a> | <a href='https://coderanger.net/'><img src='https://avatars1.githubusercontent.com/u/128243?v=4' width='72px;'/></a> | <a href='http://treyhunner.com'><img src='https://avatars0.githubusercontent.com/u/285352?v=4' width='72px;'/></a> |
| <a href='https://wsvincent.com'><img src='https://avatars0.githubusercontent.com/u/766418?v=4' width='72px;'/></a> |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project uses the [`all-contributors-cli`](https://www.npmjs.com/package/all-contributors-cli). Contributions of any kind welcome!

## License

[MIT License](LICENSE)
