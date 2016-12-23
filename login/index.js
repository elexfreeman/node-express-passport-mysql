/**
 * Created by elex on 22.12.2016.
 */

// ����� �� ���������, �������� ������ � ������������ � ������� �����������, ������ �� ���������� ����.
// ������, passport.authenticate() �������� ����� req.logIn �������������, ����� �� � ������ ��� ����. ��� ��������� �������� � �������. ��������, ����� �������� ���� console.log(), ����� ����������, ��� ����������...
// ��� ������� ����������� ������ ������������ ����� ��������� � req.user
module.exports.login = function(req, res, next) {
    passport.authenticate('local-login',
        function(err, user, info) {
            return err
                ? next(err)
                : user
                ? req.logIn(user, function(err) {
                return err
                    ? next(err)
                    : res.redirect('/private');
            })
                : res.redirect('/');
        }
    )(req, res, next);
};

// ����� ��� ������ =)
module.exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

// ����������� ������������. ������� ��� � ���� ������, � ��� ��, ����� ����������, �������� ����� `req.logIn`, ��������� ������������
module.exports.register = function(req, res, next) {
    var user = new User({ username: req.body.email, password: req.body.password});
    user.save(function(err) {
        return err
            ? next(err)
            : req.logIn(user, function(err) {
            return err
                ? next(err)
                : res.redirect('/private');
        });
    });
};