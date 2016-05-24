Package.describe({
    summary: "Gives a universe translation helper in blaze",
    name: "universe:i18n-blaze",
    version: '1.5.1',
    git: 'https://github.com/vazco/universe-i18n-blaze/edit/master/package.js'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');
    api.use(['universe:i18n@1.5.1','ecmascript', 'blaze-html-templates']);

    api.export('__');
    api.addFiles('__.js', ['server', 'client']);
    api.addFiles('i18n_blaze.js', ['client']);
});
