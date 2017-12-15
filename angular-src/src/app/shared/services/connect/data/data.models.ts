export class Edition {
    id: number;
    nazwa: String;
    participants:Array<Participant>;
  }
  export class Participant {
    region: string;
    city: String;
    school_type: String;
    school_name:String;
  }
  export class Class {
    class:String;
    language:String;
    guardian:String;
  }
  