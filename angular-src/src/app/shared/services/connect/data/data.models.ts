export interface IEdition {
    id: number,
    nazwa: String,
    //TODO CHANGE TO ISCHOOL
    participants:Array<IParticipant>,// can be null
  }
  export interface IParticipant {
    region: string,
    city: String,
    school_type: String,
    school_name:String,
  }
  export interface ISponsor{
    name: String,
    href: String,
    src: String
  }
  export interface IComittee{
    region: String,
    address: IAddress,
    moderator: IPerson
  }

  // ??
  export interface ISchoolTeam{
    name:String
    schools:Array<ISchool>
  }
  export interface ISchool{
    name:String,
    type:String,
    patron:String,
    tel:number,       // one from these
    email:String,     // is  Required
    fax:number,       // can be null
    director:IPerson
  }
  export interface IAddress{
    province: String, 
    county: String,
    city:  String,
    name:  String,
    street:  String,
    postcode:  String,
  }
  export interface IPerson{
    firstName:String,
    lastName:String,
    title:String//can be null
    tel:number,//can be null
    email:String//can be null
  }
  export interface IClass {
    class:String,
    language:String,
    guardian:IPerson,
  }