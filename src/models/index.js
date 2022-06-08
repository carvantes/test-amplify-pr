// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cat, Dog, Todo, TodoDog } = initSchema(schema);

export {
  Cat,
  Dog,
  Todo,
  TodoDog
};