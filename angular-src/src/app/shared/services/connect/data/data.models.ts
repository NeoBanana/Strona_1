export interface IEdition {
    id: number,
    nazwa: String,
    participants:Array<IParticipant>,
  }
  export interface IParticipant {
    region: string,
    city: String,
    school_type: String,
    school_name:String,
  }
  export interface ISponsor{

  }
  export interface IClass {
    class:String,
    language:String,
    guardian:String,
  }
  export interface IComittee{
    region: String,
    address: IAddress,
  }
  export interface IAddress{
    name:  String,
    street:  String,
    postcode:  String,
    city:  String,
  }
  export interface ISchool{

  }
  