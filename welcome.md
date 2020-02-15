# Welcome to Angular Boot Camp

## Agenda

The agenda varies over time; your instructor will adjust it to match
the needs of the class and the ongoing changes in the Angular
ecosystem. Here is a rough idea of the overall agenda:

* Basics of Angular - core vocabulary to build components
* Structuring an Angular application
* Development / build tooling (Angular CLI)
* Advanced and varied features (that are okay to learn later)
* Examples, details, surrounding ecosystem
* Moving from AngularJS 1.x / Unlearning AngularJS 1.x

## Workshops

The instructor may have changes to the workshops, as our curriculum is
under continuous improvement and is adjusted for the needs of each
class.

## Online development with StackBlitz

StackBlitz is a browser-based IDE, suitable for developing Angular
code entirely online. This tool makes it very easy to get started with
an application, create components, services, etc. It is especially
amenable to getting up and running quickly to work on small example
projects like those used to teach Angular Boot Camp.

If we use StackBlitz in your class, you'll need to create an account
on GitHub, then use it to log in to StackBlitz.

## Local Development

### Install Node (which includes NPM)

Node can be found here:

```
https://nodejs.org/en/
```

Angular CLI requires Node.js 10.13 or later. We recommend
**Node.js version 12.13.0 or higher "LTS"**.

Installers are available for Windows and Mac; on Linux you can likely
obtain it using your package manager easily. We also strongly
recommend using NVM on Linux, to simplify keeping up-to-date on Node
even if your distribution is not the very latest.

### Download and unzip the course materials

Download the following:

```
https://angularbootcamp.com/abc.zip
```

Then unzip it. Put the files anywhere convenient on your computer.

### IDE Type Support and Web Servers

NPM install will bring in all the typings you need, along with a web
server and demo-API server to use in class. CD to the abc
directory (the result of unzipping the file you downloaded) and type
this command:

```
npm install
```

If you are unable to perform this install on your machine, ask the
instructor for assistance.

### Serve the files

**Important**: This command, executed in the "abc" directory, will
serve the "abc" directory as your "web root." You will not need to
restart the server as we move from one step to the next, and each
example will be able to see the shared library files and data files.

Navigate to the "abc" directory, then run the server(s):

```
cd abc
npm start
```

#### Port in use?

If you already have something running on port 8080, modify the
`live` command in the `scripts` section of `package.json` to specify
a different port with `--port=9000` (or some other available port
number).

## Introduction to "abc" - the first part of the class

This is a standalone, ready-to-use set of files, sufficient for
starting the class. The only tools necessary for this portion are a
text editor, the web server, and the demo-API server.

Live-server conveniently includes "live reload" in the box. It will
automatically inject pages it serves with a bit of JavaScript to
access a web socket to automatically reload the page when the source
files change. This means you will not have to click refresh in the
browser.

Json-server provides a fake, demo API to use with learning steps that
show API use.
