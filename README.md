# This package is for developers who seek a good scalable project structure for their vanilla JS/TS projects (it is inspired by react-app)

make your page logo a favicon.ico, convert it using __https://www.icoconverter.com__
make it 16, 32 and 64 px
use it only as page icon, not actual logo.


## about running this project creation
just when you download this package, do __npm start__, and it will automatically create all needed files for you.


## about public folder
it contains all html files, all media including images, videos, audio etc. 
add in it the [favicon.ico] which is your own or organization logo.

the index.html is the mastermind of all pages, it is __[home]__

add into that, if you have xml, sql or json files, put them in [data] folder for clean view.


## about build folder
have you heard about package bundlers? minifiers? well, I did, and they offer good benefits to bundle and build our project in an optimized way for production. I don't know how to setup one [yet], but I will update this package once I do.

[advice]: if your images and videos are huge in size, consider using online compressors to reduce their sizes while preserving their quality.




## about styling with scss
if you are using [scss/sass], this package has built-in mixins and functions that gives you a little head-start, use the vendor mixins instead of normal props.
example: @include transition(200ms); instead of transition: 200ms;

for [components], make them partials, and import them where needed. Don't let them compile more than needed.

for [responsive] files, make 1 for each page or component to preserve clean code, and then import it to its respective file.
example: at end of _Header.scss:
  @import "../responsive/Header";


## about styling with other methods
_delete_ the sass folder if it has no use to you, and use the method of styling you prefer, but put them inside styles folder!!! don't break the structure to preserve scalable project.
make a folder for each style language.


## about server side rendering (SSR) issue
not an issue, but some developers are confused how to use php/python/ruby/java/etc. with JS rendering in frontend. 
I have a solution for you.
instead of using js files alone:
  -> You can either put all js code in server-script and render what's needed
  -> Or make use of file system to inject code accordingly from reading a different file.

for _performance_ issues, I don't have a big idea about how to solve them. I am still junior in Nodejs as backend language so 
--\__^.^__/--


## about tools
it depends on your preferred language. if you use many languages, it is preferrable to make a folder for each one, 
examples: 
  for Java/Spring name it [java]
  for JavaScript name it [js]
  for TypeScript name it [ts]
  for Python/Django name it [py]
  for C++ name it [cpp]
  for C#/.NETASP name it [cs]
  and so on


## about components
this one is for frontend development. Can contain website static components as [language] (put them in functions though) 
example: 
  in js, you have a Header.js, NavBar.js, etc.
  in React, you use it as well.

if you happen to use [TypeScript], the __tsconfig.json__ should be in root folder, set the settings you need, but the defaults are my preferences combined with [Fireship] youtube channel ones.


"# sukojay-setup" 
