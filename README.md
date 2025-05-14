Mastering TypeScript: Interfaces vs Types & the Power of Union and Intersection Types

As TypeScript continues to dominate modern frontend and backend development, understanding its core concepts becomes essential for writing clean, scalable, and type-safe code. 
In this post, we’ll explore two important TypeScript features: the difference between interfaces and types, and the versatility of union and intersection types.

Interface vs Type: What’s the Real Difference?
At face value, interface and type in TypeScript might appear to be two sides of the same coin. And while they can be used interchangeably in a lot of scenarios, they have subtleties that are important depending on your scenario.

Interface: Ideal for Objects and Class Contracts
An interface is ideal to use when declaring the structure of an object or the class contract.

interface Person {
  name: string;
  age: number;
}

You can extend interfaces, so they are modular and reusable:

interface Employee extends Person {
  employeeId: string;
}

Another really cool thing is declaration merging, where you can declare the same interface multiple times, and TypeScript will merge them into a single one.

interface Person {
  gender: string;
}

Now both Person has all three properties: name, age, and gender.

Type: Flexible and Powerful for Advanced Types
A type is more versatile. Not only can it be used to represent object shapes, but unions, intersections, tuples, primitives, and so forth as well.

type Status = "active" | "inactive";
type Point = { x: number; y: number };

You can also use type to define intersections and unions, so you'll have full control over complex structures.



Union and Intersection Types: Boost Type Composition

Union Types (|): "Either This or That"
Union types allow a value to be any of several types.

type Result = string | number;

function printResult(result: Result) {
  console.log("Result:", result);
}

For API results, conditional UI state, or diverse input types.

Intersection Types (&): "This and That"
Intersection types combine several types into one. Fields must all be present.

type User = { name: string };
type Admin = { role: string };
type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Alice",
  role: "Moderator",
};

Excellent for constructing complex structures from simpler building blocks.

???? Real-World Use Case
Suppose a form accepts either a guest or a signed-in user:

type Guest = { isGuest: true; email?: string };
type RegisteredUser = { isGuest: false; userId: string };
type FormUser = Guest | RegisteredUser;

And for role-based access controls:

type BaseUser = {
  name: string
};

type WithPermissions = {
  permissions: string[]
};

type Admin = BaseUser & WithPermissions;

Final Thoughts
TypeScript gives you a few options to describe your data—interface and type being the most fundamental. Use interface when you are defining objects, especially when you're working on apps at scale where extension and merge matter. 
Use type whenever you need expressive power over unions, intersections, and advanced types.

Having known union and intersection types allows more advanced use cases, and you can now express flexible and accurate type definitions reflecting actual-world thinking.

Your TypeScript types are not just annotations—you're documentation, checks, and collaboration all bundled together.
