
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
    ID_UserAccount: 1,
    Firstname: `John`,
    Lastname: `Doe`,
    Birthdate: new Date(`2003-05-25`),
    Gender: "male",

    Username: "John Doe",
    Email: "johndoe@email.com",
    Password: "123asd",
    UserType: "user",
    CreateTime: new Date(`2003-05-25`),
    IsActive: true,
    Bio: "I am a software engineer",
    TotalPosts: 0,
    TotalLikes: 0,
    TotalReads: 0,

    get age() {
      return calculateAge(this.Birthdate);
    },

    get FullName() {
      return `${this.Firstname} ${this.Lastname}`;
    }

    // Add any other properties you want to include for the user
  },
];

export default sampleUsers;