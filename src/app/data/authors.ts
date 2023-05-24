export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    ipAddress: string;
  }

  export const authors = [
    {
        id: 1,
        firstName: "Nguyễn",
        lastName: "Bảo",
        email: "Hoaibao2129@gmail.com",
        gender: "male", 
        ipAddress: "1.1.1.1",
    },
    {
        id: 2,
        firstName: "Lê",
        lastName: "A",
        email: "ABC@gmail.com",
        gender : "male",
        ipAddress: "1.2.3.4",
    }
  ]