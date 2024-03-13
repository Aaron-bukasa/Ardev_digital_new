const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      const existingAdmin = await prisma.admin.findUnique({
        where: {
          OR: [
            { username },
            { email },
          ],
        },
      });
  
      if (existingAdmin) {
        return res.status(400).json({ error: 'L\'administrateur existe déjà' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newAdmin = await prisma.admin.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      res.status(201).json({ message: 'Administrateur enregistré avec succès', admin: newAdmin });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if (!user) {
            return res.status(401).json({ error: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).render('dashboard', { token });
    } catch (error) {
        console.error('Erreur lors de la connexion de l\'administrateur :', error);
        res.status(500).json({ error: 'Erreur serveur lors de la connexion de l\'administrateur' });
    }
};

exports.userUpdate = async(req, res) => {
    const { username, password } = req.body;

    try {
        let admin = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if (!admin) {
            return res.status(404).json({ error: 'Administrateur non trouvé' });
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            admin = await prisma.user.update({
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