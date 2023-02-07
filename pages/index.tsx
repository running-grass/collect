import { Button } from '@mui/material';
import Link from 'next/link';
import { gql } from '@urql/core';
import { client } from '../lib/urql';

import { useSession, signIn, signOut } from "next-auth/react"

import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"

const TodosQuery = gql`
  query {
    users {
      name
    }
  }
`;

export default function Index({user}) {
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
  
  // console.log('session', session);
  // const { data, error } = await client
  // .query(TodosQuery,{})
  // .toPromise();

  return {
    props: {
      user: session ? session.user : null
    },
  }
}
