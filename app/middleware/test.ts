// import { IRouterContext } from 'koa-router'
import * as Koa from 'koa'
import { IRouterContext } from 'koa-router'

export default async function getAccount(ctx: Koa.ParameterizedContext<{}, IRouterContext>, next) {
    console.log(ctx)
    await next()
}
 