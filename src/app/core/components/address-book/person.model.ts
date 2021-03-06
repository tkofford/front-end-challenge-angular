export class PersonModel {
  constructor(
    public id?: number,
    public name?: string,
    public streetAddress?: string,
    public city?: string,
    public state?: string,
    public zipCode?: string,
    public phone?: string
  ) {}
}
