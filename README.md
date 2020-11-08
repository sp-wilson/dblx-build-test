# DBLX build test

Hello Folks at DBLX,

Thank you for taking the time to look my technical challenge. 

This is built on a Docker setup i use for personal projects. So you'll be able to clone the repo and set it up (assuming you guys work with docker). I've set this up so that it spits out the three main folders Uploads, Theme and plugins. This will show you whats been added to build the design.

The theme it's self is completely bespoke. Parts i have used are from Propeller's bespoke theme. Mostly, as this speed up development. Propeller's bespoke theme is one i've worked with and contributed to. It uses a component methodology, to build regions (or components) that build up pages that can be used across the site. Leveraging ACF (Advanced Custom Fields) to build there region and create the UI in the wp-admin. This gives us a foundation of regions to efficiently transfer a design into a website.

This theme is no different albeit tweaked to my personal preference and reduced number of regions specific for this test. But it will give you the jist into how i work and lay things out.

Technologies wise, i've used SCSS with the BEMIT naming convention for styling, ES6 classes with TypeScript for JS. To compile those, i've a webpack config i've create for my personal work using yarn. 

Images wise, the SVG are handled as a sprit sheet injected in through an Iframe. Standard images are lazy loaded in with Lazysizes.

Thanks for reading,  
Steve


## Getting Started

### Installing Modules

`yarn install`

### Start Developing

This will install Wordpress and Database Containers, Start Docker Compose and yarn. This will then open new tab on `localhost:3000`

`yarn dev`

### Show site no yarn

`docker-compose up`
