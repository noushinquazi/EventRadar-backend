# EventRadar-backend
The backend for EventRadar.

## Installation
```npm install```

## Usage

Create a file called `credentials.json` at the root of the project and put the following contents in it:

```
{
    "username": "dev",
    "password": "0sOvX8ezWFlwqeNl"
}
```

Next, run `npm start`.

## Project Structure

### Models
Involves database schemas that outline the structure of the objects in the database and validates new entries. The actual model takes the schema and connects to the collection that the schema represents. The model is then an interface to interact with the collection.

### Routes
Defines api routes and handles requests that read and write to the database.

