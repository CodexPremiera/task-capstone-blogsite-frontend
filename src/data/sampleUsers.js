
function calculateAge(birthdate) {
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthdate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
}

const sampleUsers = [
  {
    uid: 1,
    firstname: `John`,
    lastname: `Doe`,
    birthdate: new Date(`2003-05-25`),
    gender: "male",

    username: "John Doe",
    email: "johndoe@email.com",
    password: "123asd",
    usertype: "user",
    createTime: new Date(`2003-05-25`),
    isActive: true,

    get age() {
      return calculateAge(this.birthdate);
    },

    get fullName() {
      return `${this.firstname} ${this.lastname}`;
    }

    // Add any other properties you want to include for the user
  },
  {
    uid: 2,
    firstname: `Ada`,
    lastname: `Lovelace`,
    birthdate: new Date(`2004-11-08`),
    gender: "female",

    username: "Ada Lovelace",
    email: "adalovelace@email.com",
    password: "123asd",
    usertype: "user",
    createTime: new Date(`2024-03-22`),
    isActive: true,

    get age() {
      return calculateAge(this.birthdate);
    },

    get fullName() {
      return `${this.firstname} ${this.lastname}`;
    }
    // Add any other properties you want to include for the user
  },
];

export default sampleUsers;