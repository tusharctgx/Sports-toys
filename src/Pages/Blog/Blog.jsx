

const Blog = () => {
  return (
    <div>
      <article className="my-container m-auto">
    
    <a href="#" className="flex h-screen w-full justify-center  hover:opacity-75">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220401174334/Screenshot20220401174003.png" />
    </a>
  <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-3xl text-center font-bold hover:text-gray-700 pb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</a> <br />
        <a href="#" className="pb-6 font-bold text-center">Access Token:
An access token is a credential that is issued by an authentication server after a user successfully authenticates and authorizes an application. It is used to access protected resources, such as APIs or certain parts of a website, on behalf of the user. The access token typically has an expiration time to ensure security and protect against unauthorized access.
<br />

Refresh Token:
A refresh token is also issued by the authentication server and is used to obtain a new access token when the current one expires. It provides a way to maintain continuous access for a longer period without requiring the user to re-authenticate.</a>
        <p href="#" className="text-sm pb-3 text-center">
            By <a href="#" className="font-semibold hover:text-gray-800">TUSHAR BHAI</a>, Published on April 25th, 2023
        </p> 
    </div>
    
    <a href="#" className="flex h-screen w-full justify-center  hover:opacity-75">
        <img src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg" />
    </a>
  <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-3xl font-bold text-center hover:text-gray-700 pb-4">How to validate React props using PropTypes?</a> <br />
        <a href="#" className="pb-6 font-bold text-center">SQL Databases:
SQL databases are based on the relational model. They use structured schemas and enforce data integrity through predefined tables, columns, and relationships. SQL databases are characterized by the following:

Data Structure: SQL databases store data in structured tables consisting of rows and columns. Each column has a specific data type, and relationships between tables are established using primary keys and foreign keys.

Schema: SQL databases have a fixed schema, which defines the structure, constraints, and relationships of the data. Schemas provide consistency and ensure data integrity.

Query Language: SQL databases use SQL as the standardized query language for managing and manipulating data. SQL allows users to perform operations like selecting, inserting, updating, and deleting data using statements such as SELECT, INSERT, UPDATE, and DELETE.

ACID Compliance: SQL databases adhere to ACID properties (Atomicity, Consistency, Isolation, Durability), which ensure transactional integrity and consistency. ACID compliance guarantees that database operations are completed successfully or rolled back entirely.

Scalability: SQL databases traditionally support vertical scalability, which involves increasing the hardware resources (CPU, RAM) of a single server. However, some modern SQL databases also offer options for horizontal scalability through techniques like sharding and replication.

NoSQL Databases:
NoSQL databases, as the name suggests, go beyond the traditional relational model and offer more flexible and scalable data storage options. NoSQL databases are characterized by the following:

Data Structure: NoSQL databases can handle unstructured, semi-structured, or structured data. They support various data models, including key-value, document, columnar, and graph. This flexibility allows for storing and querying diverse data formats.

Schema: NoSQL databases are typically schema-less or schema-flexible, meaning they do not enforce a fixed schema. This enables agile development and accommodates evolving data structures.

Query Language: NoSQL databases often have their own query languages or APIs tailored to their specific data models. These query languages provide flexibility and expressiveness for working with the chosen data model.

Scalability: NoSQL databases are designed for horizontal scalability, allowing for easy distribution of data across multiple servers or clusters. They can handle large volumes of data and high traffic loads by adding more nodes to the database cluster.

Flexibility and Performance: NoSQL databases prioritize scalability and performance over strict consistency. They provide high-speed read and write operations, making them suitable for applications with rapidly changing data or those requiring real-time processing.
</a>
        <p href="#" className="text-sm pb-3 text-center">
            By <a href="#" className="font-semibold hover:text-gray-800">TUSHAR BHAI</a>, Published on April 25th, 3020
        </p> 
    </div>
    
    <a href="#" className="flex h-screen w-full justify-center items-center hover:opacity-75">
        <img src="https://www.upsqode.com/wp-content/uploads/2023/03/Nest-js-vs-Express-js.jpg" />
    </a>
  <div className="bg-white text-center flex flex-col justify-start p-6">
        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4 text-center">What is express js? What is Nest JS?</a> <br />
        <a href="#" className="pb-6 font-bold">Express.js:
Express.js is a minimalist web application framework for Node.js. It provides a lightweight and unopinionated approach to building web applications and APIs. Key features of Express.js include:

Simplicity: Express.js aims to keep things simple and provides a straightforward API for handling HTTP requests, routing, and middleware.

Middleware: Express.js allows you to define middleware functions that can intercept and modify incoming requests and outgoing responses. This enables functionality such as authentication, logging, error handling, and more.

Routing: Express.js provides a flexible routing system that allows you to define routes for different HTTP methods (GET, POST, etc.) and handle them with corresponding functions.

Extensibility: Express.js is highly extensible, allowing you to add additional functionality using third-party middleware and modules.

Express.js is known for its minimalistic nature, which gives developers the freedom to structure their applications and choose additional libraries or components as needed. It is widely used for building small to medium-sized web applications and APIs.

NestJS:
NestJS, on the other hand, is a full-featured, opinionated web application framework for Node.js inspired by Angular (a popular frontend framework). It combines the power of TypeScript (a statically typed superset of JavaScript) with a modular and scalable architecture. Key features of NestJS include:

TypeScript and Decorators: NestJS is built using TypeScript, which brings static typing, enhanced tooling, and improved maintainability. Decorators are extensively used in NestJS to define modules, controllers, services, and more.

Modular Architecture: NestJS promotes a modular approach to application development. It organizes code into modules, each containing related components like controllers, services, and providers. This modular structure helps with code organization and scalability.

Dependency Injection: NestJS leverages dependency injection to manage dependencies between different components. This simplifies code testing, decouples modules, and promotes reusability.

Middleware and Pipes: NestJS provides middleware and pipes that allow you to intercept and transform requests and responses. Middleware functions can be used for tasks like authentication, logging, and error handling, while pipes validate and transform incoming data.

GraphQL and WebSockets: NestJS has built-in support for GraphQL, a query language for APIs, and also provides WebSocket support for real-time communication.</a>
        <p href="#" className="text-sm pb-3 text-center">
            By <a href="#" className="font-semibold hover:text-gray-800">TUSHAR BHAI</a>, Published on April 25th, 2040
        </p> 
    </div>
    
    <a href="#" className="flex h-screen w-full justify-center items-center hover:opacity-75">
        <img src="https://www.mongodb.com/community/forums/uploads/default/optimized/3X/4/e/4e5ee169492bc2620d232b33ebc000b75adbbe6d_2_690x345.png" />
    </a>
  <div className="bg-white flex flex-col justify-start p-6">
        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4 text-center">What is MongoDB aggregate and how does it work ?</a>  <br />
        <a href="#" className="pb-6 font-bold text-center">MongoDB, the aggregate method is a powerful feature that allows you to perform advanced data processing and transformation operations on the documents within a collection. The aggregate method enables you to perform complex operations such as filtering, grouping, sorting, joining, and calculating aggregate values.

Here's an overview of how the aggregate method works in MongoDB:

Pipeline Stages:
The aggregate method takes an array of pipeline stages as its argument. Each stage represents a data processing step and performs a specific operation on the documents. The stages are executed in the order they appear in the array.

Data Transformation:
The pipeline stages can be used to transform and shape the data in various ways. Some commonly used stages include:

$match: Filters the documents based on specified conditions, similar to the find method.
$group: Groups documents together based on a specified key and performs aggregation operations on the grouped data.
$project: Reshapes the documents by specifying which fields to include or exclude and allows for adding computed fields.
$sort: Sorts the documents based on one or more fields.
$lookup: Performs a left outer join with another collection to combine data from multiple collections.
$unwind: Deconstructs an array field into multiple documents, creating a separate document for each element in the array.
$limit and $skip: Allow for pagination by limiting the number of documents returned and skipping a specified number of documents.
Aggregation Operators and Expressions:
Within each pipeline stage, you can use aggregation operators and expressions to perform computations, comparisons, and transformations. Aggregation operators include $sum, $avg, $max, $min, $push, $addToSet, and more. Aggregation expressions allow for conditional expressions, mathematical calculations, date operations, and string manipulations.

Result:
The aggregate method returns the result of the pipeline stages as a cursor, which can be iterated to access the transformed data. You can use methods like toArray() or forEach() to retrieve and process the resulting documents.
</a>
        <p href="#" className="text-sm pb-3 text-center">
            By <a href="#" className="font-semibold hover:text-gray-800">TUSHAR BHAI</a>, Published on April 25th, 2010
        </p> 
    </div>
  </article>
    </div>
  );
};

export default Blog;

