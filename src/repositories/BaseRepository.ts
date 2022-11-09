import { CrudRepository } from "./CrudRepository";

export abstract class BaseRepository<T> implements CrudRepository<T> {
  save(item: T): Promise<T> {
    return new Promise((resolve, reject) => {
      console.log(`Salvando item ${item}`);
      if (item === null) {
        reject("Objeto não pode ser nulo");
      } else {
        resolve({ ...item });
      }
    });
  }

  update(id: string, item: T): Promise<T> {
    console.log(id);
    console.log(item);
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    console.log(id);
    throw new Error("Method not implemented.");
  }

  find(item: T): Promise<T[]> {
    console.log(item);
    throw new Error("Method not implemented.");
  }

  findOne(id: string): Promise<T> {
    console.log(id);
    throw new Error("Method not implemented.");
  }
}
