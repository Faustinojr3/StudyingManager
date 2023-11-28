import { Router } from 'express';
import { EscolaridadeRoutes } from './escolaridade/escolaridade.routes';
import { GeneroRoutes } from './genero/genero.routes';
import { MateriasRoutes } from './materias/materias.routes';
import { MetasRoutes } from './metas/metas.routes'
import { UsuarioRoutes } from './usuario/usuario.routes';




/**
 * Init component routes
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}`, new BaseRoutes().routes());
  router.use(`${prefix}/escolaridade`, new EscolaridadeRoutes().routes());
  router.use(`${prefix}/genero`, new GeneroRoutes().routes());
  router.use(`${prefix}/materias`, new MateriasRoutes().routes());
  router.use(`${prefix}/metas`, new MetasRoutes().routes());
  router.use(`${prefix}/usuario`, new UsuarioRoutes().routes());
 
}