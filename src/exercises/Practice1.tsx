interface Property {
    fullName: string;
    propertyName: string;
    area: string;
    roomNumber: number;
  }
  
  function SubmitProperty(property: Property): void {
    console.log('Property submitted:', property);
  }
  
  const myProperty: Property = {
    fullName: 'John Doe',
    propertyName: 'Doe Mansion',
    area: 'New York',
    roomNumber: 5,
  };
  
  SubmitProperty(myProperty);


  export default SubmitProperty
  