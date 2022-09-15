exports.homeRoute = (req, res) => {
    res.render('index', {users: "New Data"});
};

exports.addUserRoute = (req, res) => {
    res.render('include/add_user');
};

exports.updateUserRoute = (req, res) => {
    res.render('update_user');
};
