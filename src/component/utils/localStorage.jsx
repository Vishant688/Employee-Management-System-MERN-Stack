const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-09-12",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix responsive navbar issues.",
        taskDate: "2026-09-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Homepage",
        taskDescription: "Create the homepage UI.",
        taskDate: "2026-09-10",
        category: "UI Design"
      }
    ]
  },

  {
    id: 2,
    firstName: "Aman",
    email: "employee2@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create employee dashboard UI.",
        taskDate: "2026-09-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Cards",
        taskDescription: "Create task status cards.",
        taskDate: "2026-09-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with API.",
        taskDate: "2026-09-08",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    firstName: "Vivek",
    email: "employee3@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Create user profile page.",
        taskDate: "2026-09-14",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Application",
        taskDescription: "Test all application features.",
        taskDate: "2026-09-15",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Create responsive website footer.",
        taskDate: "2026-09-10",
        category: "Development"
      }
    ]
  },

  {
    id: 4,
    firstName: "Rohit",
    email: "employee4@gmail.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login UI",
        taskDescription: "Design a modern login interface.",
        taskDate: "2026-09-13",
        category: "UI Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Buttons",
        taskDescription: "Create reusable button components.",
        taskDate: "2026-09-09",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix CSS Issue",
        taskDescription: "Fix layout and responsive issues.",
        taskDate: "2026-09-08",
        category: "CSS"
      }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@gmail.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Component",
        taskDescription: "Create a reusable task component.",
        taskDate: "2026-09-12",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Code",
        taskDescription: "Review existing project code.",
        taskDate: "2026-09-14",
        category: "Code Review"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription: "Setup React project and install dependencies.",
        taskDate: "2026-09-07",
        category: "Setup"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {

  localStorage.setItem(
    'employees',
    JSON.stringify(employees)
  )

  localStorage.setItem(
    'admin',
    JSON.stringify(admin)
  )
}
export const getLocalStorage = () => {

  const employeesData =
    JSON.parse(localStorage.getItem('employees')) || []

  const adminData =
    JSON.parse(localStorage.getItem('admin')) || []

  return {
    employees: employeesData,
    admin: adminData
  }
}
