/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
// Load Reqired Node Modules
module.exports = {

    login: function (req, res) {
        User.find({mobNo: req.body.mobNo},function (err, user) {
            // console.log(JSON.stringify(user, null, 4));
            if (user.length) {
                return res.json({ success: 1, status: 1 });
            }
            else {
                res.json({ error: 'User not found', status: 0 }, 200);
            }
        });
    }
};