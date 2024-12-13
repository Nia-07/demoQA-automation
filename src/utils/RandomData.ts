import { faker } from '@faker-js/faker'; export function generateRandomData() { 
  const minAge = 18; 
  const maxAge = 100; 
  const currentDate = new Date(); const pastDate = new Date( currentDate.getFullYear() - Math.floor(Math.random() * (maxAge - minAge + 1)) - minAge, 
  currentDate.getMonth(), 
  currentDate.getDate() 
); 
  
return { firstName: faker.name.firstName(), 
lastName: faker.name.lastName(), 
email: faker.internet.email(), 
phoneNumber: faker.phone.number(), 
address: faker.address.streetAddress(), 
dateOfBirth: pastDate.toLocaleDateString(), 

  };
}