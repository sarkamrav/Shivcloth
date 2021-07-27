import bcrypt from 'bcryptjs';
const users = [
    {
        name:'Admin',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin:true
    },
    {
        name:'deepak',
        email:'deepak@gmail.com',
        password:bcrypt.hashSync('12345',10),
    },
    {
        name:'ravi',
        email:'ravi@gmail.com',
        password:bcrypt.hashSync('12345',10),
    },
]

export default users;