const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });

  return token;
};

exports.signup = async(req, res) => {
    const {username, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
              username: username,
              email: email,
              password: hashedPassword
            },
        })

        const token = generateToken(user);

        res.status(201).json({ token: token })
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

exports.getLogin = async(req, res) => {
    res.render('login');    
}

exports.postLogin = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            return res.status(400).json({error: "Identifiant ou mot de passe incorect"})
        } 
        
        const valid =  await bcrypt.compare(password, user.password)

        if(!valid) {
            res.status(400).json({ message: 'Identifant ou mot de passe incorect' })
        } else {
            const token = generateToken(user);
            res.cookie('token', token, { httpOnly: true, secure: true });

            res.status(200).redirect('/dashboard');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
}

exports.userUpdate = async(req, res) => {
    const { username, password } = req.body;

    try {
        let admin = await prisma.admin.findUnique({
            where: {
                username: username,
            },
        });

        if (!admin) {
            return res.status(404).json({ error: 'Administrateur non trouvé' });
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            admin = await prisma.admin.update({
                where: {
                    username: username,
                },
                data: {
                    password: hashedPassword,
                },
            });
        }

        res.status(200).json(admin);
    } catch (error) {
        console.error('Erreur lors de la mise à jour des informations de connexion de l\'administrateur :', error);
        res.status(500).json({ error: 'Erreur serveur lors de la mise à jour des informations de connexion de l\'administrateur' });
    }
}