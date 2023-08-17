import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId()
];

const postIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Alex",
    lastName: "Johnson",
    email: "alexjohnson@example.com",
    password: "$2b$10$qwertyqwerty//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p4.jpg",
    subject: "Computer Science",
    contact_no: "987343",
    __v: 0
  },
  {
    _id: userIds[1],
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "$2b$10$asdfsdfasdfsdf//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpg",
    subject: "Physics",
    contact_no: "9876543",
    __v: 0
  },
  {
    _id: userIds[2],
    firstName: "Emily",
    lastName: "Smith",
    email: "emilysmith@example.com",
    password: "$2b$10$zxcvzxcvzxcv//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpg",
    subject: "Mathematics",
    contact_no: "5555555",
    __v: 0
  },
];

export const posts = [
  {
    _id: postIds[0],
    userId: userIds[0],
    expName: "Solar Wind Turbine",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    difficulty: 3,
    subject: "Power Electronics",
    picturePath: "post1.jpg",
    materials_list: [
      { name: "turbine blades", quantity: "3" },
      { name: "power inverter", quantity: "1" },
      { name: "tower structure", quantity: "1" },
      { name: "battery bank", quantity: "4" }
    ],
    precautions: "But I must explain to you how all this mistaken idea of denouncing pleasure...",
    instructions: [
      { description: "Carefully assemble the turbine blades onto the hub." },
      { description: "Connect the power inverter to the electrical components." },
      { description: "Construct the tower structure to mount the turbine." },
      { description: "Set up the battery bank for energy storage." }
    ],
    views: 2,
    claps: 3
  },{
    _id: postIds[1],
    userId: userIds[0],
    expName: "Arduino Temperature Logger",
    description: "Create a temperature logging system using Arduino and sensors...",
    difficulty: 2,
    subject: "Electrical Engineering",
    picturePath: "post2.jpg",
    materials_list: [
      { name: "Arduino Uno", quantity: "1" },
      { name: "Temperature sensor", quantity: "1" },
      { name: "Breadboard", quantity: "1" },
      { name: "Jumper wires", quantity: "10" }
    ],
    precautions: "Handle the components with care to avoid damage...",
    instructions: [
      { description: "Connect the temperature sensor to the Arduino according to the datasheet." },
      { description: "Write the Arduino code to read sensor data and log it." },
      { description: "Test the system in different temperature conditions." },
      { description: "Display the logged data on a computer using serial communication." }
    ],
    views: 5,
    claps: 7
  },{
    _id: postIds[2],
    userId: userIds[1],
    expName: "Chemical Reactions Demonstration",
    description: "Perform a series of chemical reactions to demonstrate key concepts...",
    difficulty: 1,
    subject: "Chemistry",
    picturePath: "post3.jpg",
    materials_list: [
      { name: "Vinegar", quantity: "200 mL" },
      { name: "Baking soda", quantity: "50 g" },
      { name: "Food coloring", quantity: "3 colors" },
      { name: "Test tubes", quantity: "5" }
    ],
    precautions: "Wear safety goggles and work in a well-ventilated area...",
    instructions: [
      { description: "Fill three test tubes with water and add a few drops of different food coloring to each." },
      { description: "In a separate test tube, mix vinegar and baking soda for a bubbly reaction." },
      { description: "Carefully pour the vinegar mixture into the colored water tubes for visual effects." },
      { description: "Observe and explain the chemical reactions to your audience." }
    ],
    views: 10,
    claps: 2
  },{
    _id: postIds[3],
    userId: userIds[2],
    expName: "Paper Bridge Challenge",
    description: "Build a bridge using only paper and test its load-bearing capacity...",
    difficulty: 4,
    subject: "Physics",
    picturePath: "post4.jpg",
    materials_list: [
      { name: "Newspaper sheets", quantity: "10" },
      { name: "Scissors", quantity: "1 pair" },
      { name: "Ruler", quantity: "1" },
      { name: "Books", quantity: "various sizes" }
    ],
    precautions: "Be cautious with scissors and avoid sharp edges...",
    instructions: [
      { description: "Cut and fold the newspaper sheets to create beams and supports." },
      { description: "Assemble the components to construct a bridge structure." },
      { description: "Gradually place books on the bridge to test its strength." },
      { description: "Record the maximum load the bridge can withstand before collapsing." }
    ],
    views: 8,
    claps: 4
  }

];



