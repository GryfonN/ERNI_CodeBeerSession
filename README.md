# ERNI_CodeBeerSession

Repository with presentation and example project for Code Beer Session in ERNI that I was leading.
The main task is to present the environment tools and processes for JavaScript development, as example we have changed
the [Agency Bootstrapious Template](http://bootstrapious.com/p/agency-portfolio-theme).

![Preview image](/readme_preview.png?raw=true "Preview image")

## Prezentacia:
[link](http://slides.com/gryfonn/erni_codebeersession/fullscreen)


## Poziadavky:
- NodeJS v0.12.0+ [(download)](https://nodejs.org/download/)
- TeamViewer [(download)](https://www.teamviewer.com/de/download/linux.aspx)


## Program:

#### 1. INTRO

* nemam testy, s kazdym budem osobne riesit problemy ale nahlas aby sa problemy neopakovali - TEAM VIEWER
* poviem info o tom o com bude prez a akou formou, ulohy pomedzi
* obsah co bude odprezentujem
* **Uloha:** checkout projekt s tagom 1

  * ```
  git clone https://github.com/GryfonN/ERNI_CodeBeerSession.git  
  ```  

  * ```
  git checkout v1
  ```

#### 2. AKTUALNA SITUACIA + INIT
* bordel/vela chyb uz len v zaciatocnej verzii , napr na download extLib no nepouzivaju ale CND WTF tagy
* NPM init - ale len ako ze projekt spravime a install bower dame ze ulozime do dependencies
* **Uloha:** npm init skusit npm install -g jshint , http-proxy
* BOWER - preco ako funguje, aky rozdiel medzi dependency bower vs npm, preoc je dolezite mat pohromade zavislosti
* [Preco nie CND](http://www.sitepoint.com/7-reasons-not-to-use-a-cdn/)
* **Uloha:** bower hratky prerobit dependency kt sa daju cez bower

#### 3. GRUNT =?= GULP
* co to je a vlastne na co automaticky
* roszdiel gulp vs grunt dva screeny cfg vs js
* vyhody nevyhody gulp preco ho lubim


#### 4. Gulp API
* ako sa hladaju pluginy  
* je to len o pluginoch
* **Uloha:** hello gulp, ako install gulp global/lokal viete Gulp
* **Uloha:** JSHint , ako


#### 5. GULP-Inject + Bower
* wiredeep gulp plugin
* **Uloha:** normal inject veci  wired bower js + css
* ukazka mojho projektu angular sort / IE 9 custom tag
* **Uloha:** uloha sled taskov vyvetlit


#### 6. Browser sync
* Co to je
* **Uloha:** obycajny serve
* **Uloha:** serve ale plus watch task


#### 7. Yeoman + ukazka portfolia mozna
* co je a ako sa s nim robi
* **Uloha:** generator-gulp-angular projekt prezriet
