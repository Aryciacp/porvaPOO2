const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Usuario = prisma.usuario;
const Leilao = prisma.leilao;
const Lance = prisma.lance;

module.exports = { Usuario, Leilao, Lance };