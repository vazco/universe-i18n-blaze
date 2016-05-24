Template.registerHelper('__', function (...args) {
    const kw = args.pop();
    if (typeof args[args.length-1] === 'string') {
        args.push(kw.hash);
    }
    const t = args[0] || '';
    if (t[0] === '.') {
        args.shift();
        return __(getNamespace() + t, ...args);
    }
    return __(...args);
});

Blaze.Template.prototype.bindI18nNamespace = function (namespace) {
    this.onCreated(function() {
        this.view._i18nNamespace = namespace;
    });
};

function getNamespace () {
    const tmpl = Template.instance();
    var view = tmpl.view;
    while (view && !view._i18nNamespace) {
        view = view.parentView;
    }

    if (tmpl.view) {
        tmpl.view._i18nNamespace = view && view._i18nNamespace;
    }
    return view._i18nNamespace || '';
}