export type FormType = {
  date: Date;
  guest: number;
  hour: string;
  zone: string|undefined;
  name: string;
  email: string;
  phone?: string;
  specialneeds?:{
    wheelchair: number;
    babyStroller: number;
    highChair: number;
  }
};