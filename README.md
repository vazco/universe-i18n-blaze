<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Universe i18n Blaze
</h1>

&nbsp;

Provides translation helper and global variable `__` that are reactive ( in Meteor way )  

## Example (full path)

```
{{__ 'tools.ok'}}
```


## Example relative path
Register namespace in template:
```js
Template.myTemplate.bindI18nNamespace('tools');

```

```html
<template name='myTemplate'>
    <span>{{__ '.ok'}}</span>
</template>
```

Namespaces are inherited from parents, so children have parents namespace (if they have not own namespace.)

### License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Universe i18n Blaze is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
