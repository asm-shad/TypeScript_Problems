function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}

formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  filterByRating(books); 

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, arr) => acc.concat(arr), []);
  }

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5]);

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `${this.make} ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return this.model;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); 
myCar.getModel();

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value * 2;
    } else {
        return 0;
    }
}

processValue("hello");
processValue(10);

interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    return products.filter(product => product.price === Math.max(...products.map(p => p.price)))[0];
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
getMostExpensiveProduct(products); 

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
  }

getDayType(Day.Monday);
getDayType(Day.Sunday);

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative numbers are not allowed"));
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);