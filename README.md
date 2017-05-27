# Format currency

> By default, node builds in only a reduced set of ICU data (English only) due to file size.
 to autoload full ICU data set flag 



```bash
node --icu-data-dir=node_modules/full-icu index.js
```

## Build Setup

**Requires Node.js 7+**

``` bash
# install dependencies
$ npm i

# production mode
$ npm start

# Test
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

## License

MIT
