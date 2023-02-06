import { buildSchema, buildSchemaSync, Field, ID, ObjectType, Query, Resolver } from 'type-graphql'
@ObjectType({ description: "The recipe model" })
class Recipe {
  @Field(type => ID)
  id: string;

  @Field({ description: "The title of the recipe" })
  title: string;

  @Field({ nullable: true })
  averageRating?: number;
}

@ObjectType()
class User {
  @Field()
  name: string;
}

@Resolver()
class RecipeResolver {
  private recipesCollection: Recipe[] = [];
  private userColl : User[] = [
    {name: 'alice'},
    {name: 'bob'},
    {name: 'cool'}
  ];

  @Query(returns => [Recipe])
  async recipes() {
    return await this.recipesCollection;
  }

  @Query(returns => [User])
  async users() {
    return await this.userColl;
  }
}

export const schema = buildSchemaSync({
  resolvers: [RecipeResolver],
});