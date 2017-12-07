export class Edition {
    id: number;
    nazwa: String;
    participants:Array<Participant>;
  }
  export interface Participant {
    region: string;
    city: String;
    school_type: String;
    school_name:String;
  }
  export interface Class {
    class:String;
    language:String;
    guardian:String;
  }
  