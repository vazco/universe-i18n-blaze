# Universe I18n Blaze

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