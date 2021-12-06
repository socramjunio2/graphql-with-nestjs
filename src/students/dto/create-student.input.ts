import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field(() => String)
  name: String;

  @Field()
  cpf: String;

  @Field()
  email: String;
}
