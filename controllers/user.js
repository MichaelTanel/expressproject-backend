import models from '../models';

class UserController {
    getAllUsers(req, res) {
        models.User.findAll().then(users => {
            return res.status(200).send({
                success: 'true',
                message: 'Retrieved all users',
                users
            });
        });
    }

    deleteAllUsers(req, res) {
        models.User.destroy({
            truncate: true
        }).then(result => {
            res.status(200).send({
                success: 'true',
                message: 'Successfully deleted all users'
            })
        });
    }
}

const userController = new UserController();
export default userController;