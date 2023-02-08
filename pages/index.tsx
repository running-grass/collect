import { gql } from '@urql/core';
import { client } from '../lib/urql';

import { signIn, signOut } from "next-auth/react"

import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useEffect } from 'react';

const TodosQuery = gql`
  query {
    me {
      id
      name
      email
      image
    }
  }
`;

export default function Index({ user }) {

  useEffect(() => {
    client
      .query(TodosQuery, {})
      .toPromise().then(({ data }) => {
        console.log('data', data);
      })
})
// const { data: session } = useSession()
if (user) {
  return (
    <>
      Signed in as {user.email} <br />
      <button onClick={() => signOut()}>退出登录</button>
    </>
  )
}
return (
  <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
    {/* <Link href="/login"><Button>去登录</Button></Link> */}
  </>
)
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  return {
    props: {
      user: session ? session.user : null
    },
  }
}
