# EventRadar-backend
The backend for EventRadar.

## Installation
```npm install```

## Usage
You will need database credentials inside a `credentials.json` file. Then you
can run: 

```npm start```

## Project Structure

### Models
Involves database schemas that outline the structure of the objects in the database and validates new entries. The actual model takes the schema and connects to the collection that the schema represents. The model is then an interface to interact with the collection.

### Routes
Defines api routes and handles requests that read and write to the database.

