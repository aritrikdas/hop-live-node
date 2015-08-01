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
    },
    create_user: function (req, res) {
        var data = {};
            data.fname = req.param('fname');
            data.lname = req.param('lname');
            data.email = req.param('email');
            data.profilepic = req.param('profilepic');
            data.mobNo = req.param('mobNo');

        if (data.email == undefined || data.email == '') {
            var e = { message: 'Email is required' };
            return res.json({ error: e, status: 0 });
        }
        else {
            User.findOneByEmail(data.email).exec(function(err, us){
                if (us) {
                    var e = { message: 'Email address is already taken!' };
                    return res.json({ error: e, status: 0 });
                }
                else {
                    if (data.mobNo != '' && data.mobNo !== undefined) {
                        User.findOne({ mobNo: data.mobNo }).exec(function(er, user){
                            if (er) {
                                console.log(er);
                            }
                            if (!user) {
                                User.create(data, function(err, usr){
                                    if (err) {
                                        console.log(err.Errors);
                                        return res.json({ error: err.Errors, status: 0 });
                                    }
                                    else {
                                        res.json({ status: 1, user: usr.email });
                                    }
                                });
                            }
                            else {
                                var e = { message: 'Mobile Number is already taken!' };
                                return res.json({ error: e, status: 0 });
                            }
                        });
                    } else {
                        var e = { message: 'Please enter valid Mobile Number!' };
                        return res.json({ error: e, status: 0 });
                    }
                }
            });
        }
    },
    user_profile: function (req, res) {
        User.find({mobNo: req.body.mobNo},function (err, user) {
            if (user.length) {
                var userData = {};
                userData = user[0];
                userData.UID = user[0].id
                return res.json({ status: 1, profileData: userData });
            }
            else {
                res.json({ error: 'User not found', status: 0 }, 200);
            }
        });
    }
};