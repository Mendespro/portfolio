const Project = require("../models/projectModel");

// Obter todos os projetos
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar projetos" });
  }
};

// Adicionar um novo projeto
const addProject = async (req, res) => {
  try {
    const { title, description, link, imageUrl } = req.body;
    const newProject = new Project({ title, description, link, imageUrl });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Erro ao adicionar projeto" });
  }
};

module.exports = { getProjects, addProject };
