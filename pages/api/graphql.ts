import 'reflect-metadata'
import { createYoga } from 'graphql-yoga'
import { schema } from '../../lib/graphql/schema'
import { NextRequest } from 'next/server'
import { NextServer } from 'next/dist/server/next'
import { GetServerSidePropsContext } from 'next'
import { AuthUser, AuthUserContext } from '../../lib/AuthUser'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

export default createYoga<GetServerSidePropsContext, AuthUserContext>({
  schema,
  graphqlEndpoint: '/api/graphql',
  context: async (ctx) => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)
    let user;
    if (session) {

    user = session.user
    user.id = session.user['id'];
    }
    return Object.assign(ctx, {
      user
    });
  }
})
