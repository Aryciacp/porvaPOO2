import { PrismaClient } from '@prisma/client';
import UsuarioService from '../services/usuarioService';
import LeilaoService from '../services/leilaoService';
import LanceService from '../services/lanceService';

const prisma = new PrismaClient();

async function main() {

  console.log(await UsuarioService.listUsuarios());
 
  console.log(await LeilaoService.listLeiloes());
;
  console.log(await LanceService.listLances());
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });