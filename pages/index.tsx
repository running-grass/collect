import { Button } from '@mui/material';
import Link from 'next/link';
import { gql } from '@urql/core';
import { client } from '../lib/urql';

const TodosQuery = gql`
  query {
    users {
      name
    }
  }
`;

export default function Index({users}) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="">{user.name} </div>
      ))}
      <Link href="/login"><Button>去登录</Button></Link>
    </div>
  )
}

export async function getServerSideProps(context) {

  const { data, error } = await client
  .query(TodosQuery,{})
  .toPromise();

  return {
    props: {
      users: data ? data.users : []
    },
  }
}
