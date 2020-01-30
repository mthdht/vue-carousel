<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better please fork the repo and create a pull request or simple open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
<br />
<p align="center"><h3 align="center">Vue-carousel</h3>

  <p align="center">
    A simple carousel using VueJs
    <br />
    ·
    <a href="https://github.com/mthdht/vue-carousel/issues">Report Bug</a>
    ·
    <a href="https://github.com/mthdht/vue-carousel/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

![Capture d'ecran](capture.png)

### Built With
* [Vue js](https://vuejs.org/)



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Install NPM packages
```sh
npm install @mthdht/vue-carousel
```



<!-- USAGE EXAMPLES -->
## Usage

First, you have to import the newly installed package
``` javascript
// other import
import { Carousel, Slide } from '@mthdht/vue-carousel'

export default {
    // code

    components: {
        // other components registration
        Carousel,
        Slide
    }
}
```

Then, you can use the components anywhere in your template:
```javascript
<template>
    <Carousel>
        <Slide>
            //the content of the slide
        </Slide>
        <Slide>
            //some other content
        </Slide>
    </Carousel>
</template>
```

### Color

By default, this carousel has black color theme but you can change it by passing a color prop.

The colors available are: **gray** - **red** - **orange** - **yellow** - **green** - **teal** - **blue** - **indigo** - **purple** - **pink**


```javascript
<Carousel color="blue"></Carousel>
```

### Icons

By default, this carousel has simple arrows for control, but you can change it by passing an icon prop.

The colors available are: **arrow** - **arrow-circle** - **arrow-alt-circle** - **chevron** - **chevron-circle** - **caret** - **caret-square** which is the arrow icon from [Font-awesome](https://fontawesome.com/icons?d=gallery&q=arrow)

```javascript
<Carousel icon="caret"></Carousel>
```

### Controls

By default, this carousel shows the arrows to control the carousel, but you can change it by passing an arrows prop to `false` or `true`.

> Don't forget to bind this prop since the value is actual javascript. see [VueJs - passing a boolean as prop](https://vuejs.org/v2/guide/components-props.html#Passing-a-Boolean)


```javascript
<Carousel :arrows="false"></Carousel>
```

You also can use the bullets to control your carousel.
By default, those bullets doesn't show, but you can change it by passsing a bullets prop to `false`or `true`

```javascript
<Carousel :bullets="true"></Carousel>
```

### Autoplay and duration

By default, this carousel does not autoplay itself, but you can change it by passing an autoplay prop to `true`or `false`.


> Again, don't forget to bind this prop since the value is actual javascript. see [VueJs - passing a boolean as prop](https://vuejs.org/v2/guide/components-props.html#Passing-a-Boolean)

```javascript
<Carousel :autoplay="true"></Carousel>
```

The default duration for the carousel to change slides is 3.5 secondes. Of course you can change it by passing a duration prop.

> The value of duration prop must be in millisecondes, exemple: for 3 secondes, the value should be 3000

```javascript
<Carousel :duration="1000"></Carousel>
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. 

<!-- CONTACT -->
## Contact

Mthdht - [@mthdht](https://twitter.com/mthdht) - mthdht@gmail.com

Project Link: [https://github.com/mthdht/vue-carousel](https://github.com/mthdht/vue-carousel)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Font-awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs)