# Multiplication Table CLI App

A console application in **Node.js** that generates multiplication tables. You can customize the base, the limit, display the results on screen and save the table to a file with a custom location and name.

---

## Features

- **Custom generation**: Specifies the base and limit of the multiplication table.
- **Optional display**: Displays the results directly in the console.
- **Export to file**: Save the generated table to a file with the name and location of your choice.
- **Easy to use**: Intuitive configuration using `yargs` for argument handling.

---

## Prerequisites

- Node.js
- NPM

---

## Installation

1. Clone the repository or download the files:

   ```bash
   https://github.com/damoralesr97/node-ts-multiplication-app
   ```

2. Go to the repository folder
   ```bash
   cd node-ts-multiplication-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## How to use

### Main commands

Run the application with the following command:

```bash
node .\dist\app.js --base <number> [options]
```

### Available arguments

Run the command:

```bash
node .\dist\app.js --help
```

You will get the information of the available arguments:
![App args](/images/args.png)

## Examples

### Generate the multiplication table of 5

```bash
node .\dist\app.js --base 5
```

### Output

The multiplication table will be generated with base = **5**, default limit = **10**, default file name = **mutiplication-table**, default file location = **/outputs** and the result will not be displayed on the screen.

### Generate a multiplication table from 5, view the result on screen and save it in a file with custom name and path

```bash
node .\dist\app.js --base 5 --limit 20 --name tabla-del-5 --destination tablas
```

### Output

In console we obtain the following

![Example](/images/example.png)

And in the file system we created the folder “test” with the file “5-test”.

![Example](/images/file-generated.png)
