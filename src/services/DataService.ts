import { Space } from "../models/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "London",
      name: "Gerkin",
      spaceId: "1234",
    });
    result.push({
      location: "London",
      name: "Gerkin",
      spaceId: "1235",
    });
    result.push({
      location: "London",
      name: "Gerkin",
      spaceId: "1236",
    });
    return result;
  }

  public async reserveSpace(spaceId: string):Promise<string | undefined> {
    if(spaceId === '123') {
      return ('5555')
    } else {
      return undefined;
    }
  }

}
