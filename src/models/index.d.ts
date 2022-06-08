import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoDogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cat {
  readonly id: string;
  readonly name?: string | null;
  readonly owner: string;
  readonly Dogs?: (Dog | null)[] | null;
  readonly Dog?: Dog | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly catDogId?: string | null;
  constructor(init: ModelInit<Cat, CatMetaData>);
  static copyOf(source: Cat, mutator: (draft: MutableModel<Cat, CatMetaData>) => MutableModel<Cat, CatMetaData> | void): Cat;
}

export declare class Dog {
  readonly id: string;
  readonly name?: string | null;
  readonly todos?: (TodoDog | null)[] | null;
  readonly catID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dog, DogMetaData>);
  static copyOf(source: Dog, mutator: (draft: MutableModel<Dog, DogMetaData>) => MutableModel<Dog, DogMetaData> | void): Dog;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly Dogs?: (TodoDog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class TodoDog {
  readonly id: string;
  readonly dog: Dog;
  readonly todo: Todo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TodoDog, TodoDogMetaData>);
  static copyOf(source: TodoDog, mutator: (draft: MutableModel<TodoDog, TodoDogMetaData>) => MutableModel<TodoDog, TodoDogMetaData> | void): TodoDog;
}