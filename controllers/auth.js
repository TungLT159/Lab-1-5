exports.getLogin = (req, res, next) => {
    console.log(req.isLoggedIn)
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.isLoggedIn
    });
};
exports.postLogin = (req, res, next) => {
    req.isLoggedIn = true;
    res.redirect('/');
};