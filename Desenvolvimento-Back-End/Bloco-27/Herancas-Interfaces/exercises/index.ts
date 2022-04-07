class Person {

    private _name: string 
    private _birthDate: Date


  constructor(name: string, birthDate: Date) {
      this._name = name,

      if( this._name.length >= 3) {
          this.name = name;
      }
      if( this.birthDate < new Date()) {
          this._birthDate = birthDate;
      }
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    this._birthDate = date;
  }
}

const student = new Person('Arthur', '')