const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jsonData = require('../public/portfolio.json');

exports.projectsAll = function(req, res, next) {
    res.render('projectsAll', { jsonData });
};

exports.projectsAdd = async(req, res, next) => {
    try {
        const { name, image, description, link, langage, technologie, date, tags } = req.body;
        
        const newProject = await prisma.project.create({
            data: {
                name,
                image,
                description,
                link,
                langage,
                technologie,
                date,
                tags: {
                    set: tags
                }
            }
        });

        res.status(201).json({ message: 'Projet ajouté avec succès', project: newProject });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du projet :', error);
        res.status(500).json({ error: 'Erreur serveur lors de l\'ajout du projet' });
    }
};

exports.projectsDetail = async(req, res) => {
    const projectId = parseInt(req.params.id);

    try {
        const project = await prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });

        if (!project) {
            return res.status(404).json({ error: 'Projet non trouvé' });
        }

        res.status(200).json({ project });
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du projet :', error);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération des détails du projet' });
    }
};

exports.projectsDelete = async(req, res) => {
    const projectId = parseInt(req.params.id);

    try {
        const existingProject = await prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });

        if (!existingProject) {
            return res.status(404).json({ error: 'Projet non trouvé' });
        }

        await prisma.project.delete({
            where: {
                id: projectId,
            },
        });

        res.status(200).json({ message: 'Projet supprimé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression du projet :', error);
        res.status(500).json({ error: 'Erreur serveur lors de la suppression du projet' });
    }
};

exports.projectsUpdate = async(req, res, next) => {
    const projectId = parseInt(req.params.id);
    const { name, image, description, link, langage, technologie, date, tags } = req.body;

    try {
        const existingProject = await prisma.project.findUnique({
            where: {
                id: projectId,
            },
        });

        if (!existingProject) {
            return res.status(404).json({ error: 'Projet non trouvé' });
        }

        const updatedProject = await prisma.project.update({
            where: {
                id: projectId,
            },
            data: {
                name,
                image,
                description,
                link,
                langage,
                technologie,
                date,
                tags: {
                    set: tags
                }
            },
        });

        res.status(200).json({ message: 'Projet mis à jour avec succès', project: updatedProject });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du projet :', error);
        res.status(500).json({ error: 'Erreur serveur lors de la mise à jour du projet' });
    }
};