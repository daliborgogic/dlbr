# Format currency

> To use JavaScript Intl API, Node.js needs to run with ```--icu-data-dir=node_modules/full-icu``` option that provides us to have Intl API in our Node environment

## Build Setup

``` bash
# install dependencies
$ npm i

# development
$ npm run dev

# test
$ npm t
```

## Example

```bash
# USD dollar
$ formatCurrency('en-US', 99.99)
> $99.99
# RSD dinar
$ formatCurrency('sr-RS', 99.99)
> 99.99 RSD
```
