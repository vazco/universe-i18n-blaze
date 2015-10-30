Package.describe({
  summary: "Gives a universe translation helper in blaze",
  name: "universe:i18n-blaze",
  version: '1.2.0'
});

Package.on_use(function (api) {
  api.use('universe:i18n@1.2.0');
  api.use(['blaze-html-templates@1.0.1'], 'client');

  api.export('__');
  api.addFiles('__.js', ['server', 'client']);
  api.addFiles('i18n_blaze.js', ['client']);
});
