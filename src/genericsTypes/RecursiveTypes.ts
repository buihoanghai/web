// ✅ Example 1: Nested Categories (Tree Structure)
type Categories = {
	id: number;
	name: string;
	subcategory?: Categories[];
}
const categories: Categories ={
	id: 1,
  name: "Electronics",
  subcategory: [
    {
      id: 2,
      name: "Mobile Phones",
      subcategory: [
        {
          id: 3,
          name: "Smartphones",
        }
      ]
    },
    {
      id: 4,
      name: "Laptops",
    }
  ]
}

// ✅ Example 2: JSON-like Data Structure
type JSONValue = string | number | boolean | null | JSONValue[] | {[key: string]: JSONValue};
const jsonData: JSONValue = {
	name: "John Doe",
  age: 30,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  },
  hobbies: ["reading", "painting", "cooking"]
};

//✅ Example 3: Linked List (Data Structure)
type LinkedList<T> = {
	value: T;
	next?: LinkedList<T>;
};
const linkedList: LinkedList<number> = {
	value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
    }
  }
}

//✅ Example 4: File System (Folders & Files)
type FileSystemItem = {
  name: string;
  type: "file" | "directory";
  children?: FileSystemItem[];
};
const fileSystem: FileSystemItem = {
	name: "documents",
  type: "directory",
  children: [
    {
      name: "notes.txt",
      type: "file"
    },
    {
      name: "pictures",
      type: "directory",
      children: [
        {
          name: "photo1.jpg",
          type: "file"
        },
        {
          name: "photo2.jpg",
          type: "file"
        }
      ]
    }
  ]
}

