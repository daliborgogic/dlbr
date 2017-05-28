# Format currency

### Build Setup

**Requires Node.js 7+**

``` bash
# install dependencies
$ npm i

# production mode
$ npm start

# test
$ npm t
```

### Example

```bash
# USD dollar
$ formatCurrency('en-US', 99.99)
> $99.99
# RSD dinar
$ formatCurrency('sr-RS', 99.99)
> 99.99 RSD
```
