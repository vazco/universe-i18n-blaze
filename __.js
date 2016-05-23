__ = _i18n.createReactiveTranslator();
__.getLocale = () => {
    if (!_i18n._deps) {
        _i18n._deps = new Tracker.Dependency();
    }
    _i18n._deps.depend();
    return _i18n.getLocale();
};