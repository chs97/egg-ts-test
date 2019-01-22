// import { IRouterContext } from 'koa-router'
import { Context } from 'egg';

export default async function getAccount(ctx: Context, next) {
    console.log(ctx)
    await next()
}
 