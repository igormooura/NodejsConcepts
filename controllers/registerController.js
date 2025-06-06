const usersDB = {
    users: require('../model/users.json'),
    setUsers: function(data) {this.users = data}
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser =  async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd ) return res.status(400).json({'message': 'User and pwd are required'})
    
    const duplicate = usersDB.users.find(person => person.username === user );
    
    if(duplicate) return res.sendStatus(409);

    
    try{ 
        const hashedPwd = await bcrypt.hash(pwd, 10); // o que vai ser criptografado, quantas vezes 
        
        const newUser = {"username": user, "password": hashedPwd}
        usersDB.setUsers([...usersDB.users, newUser]);
        
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );

        console.log(usersDB.users);
        res.status(201).json({'sucess': 'new user created'})
        }catch (err){
        res.status(500).json({'message': err.message});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = usersDB.users;
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    handleNewUser,
    getAllUsers
};