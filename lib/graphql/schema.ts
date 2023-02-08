import { Authorized, buildSchemaSync, Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql'
import type { AuthUser } from '../AuthUser';
// import { Container, Service } from "typedi";
import { authChecker } from './authChecker';

@ObjectType()
class User {
  @Field() 
  id: string;

  @Field()
  name?: string;

  @Field()
  email?: string;

  @Field()
  image?: string;
}

@Resolver()
class UserResolver {
  // constructor(private readonly userRepository: Repository<User>) {}

  @Authorized()
  @Query(returns => User)
  async me(@Ctx("user") user: AuthUser,) {
    
    const r = await prisma.user.findUniqueOrThrow({
      where: { id: user.id}
    });
    return r;
  }

}

export const schema = buildSchemaSync({
  resolvers: [UserResolver],
  authChecker,
    // register the 3rd party IOC container
    // container: Container,
});