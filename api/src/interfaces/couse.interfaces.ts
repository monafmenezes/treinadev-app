export interface ICouseCreate {
  title: string;
  description: string;
  created: Date;
}

export interface ICourse extends ICouseCreate {
  id: string;
}
