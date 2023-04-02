
# Drivers and Streets Assignment

This is a command line program that assigns drivers to streets based on the suitability of each driver to each street. This program was created as part of the Challenge Tijuana application process for the Software Engineer position at Platform Science

## Requirements

-   streets.txt file with a list of streets
-   drivers.txt file with a list of drivers

## Usage

To use this program, you need to have Node.js installed on your computer. The program was tested on Node.js version 16.13.2. You dont need installed any dependency.

You can run the program using either `yarn` or `npm`. Here are the steps to run the program:

```bash
$ yarn start -- --streetsFile=path/to/streets.txt --driversFile=path/to/drivers.txt
```

```bash
$ npm start -- --streetsFile=path/to/streets.txt --driversFile=path/to/drivers.txt
```

> Note: The file paths are relative to the root directory of the project.

## Input Files

The program expects two input files: a streets file and a drivers file. These files should be plain text files (.txt) with one entry per line.

The streets file should contain the names of all the streets that need to be assigned to drivers.

```
215 Osinski Manors, San Diego, CA 92126
9856 Marvin Stravenue, San Diego, CA 92126
7127 Kathlyn Ferry, San Diego, CA 92126
987 Champlin Lake, San Diego, CA 92126
```

The drivers file should contain the names of all the available drivers for the assignment.

```
Everardo Welch
Orval Mayert
Howard Emmerich
Izaiah Lowe
```

## Details

-   The program reads the streets and drivers files using a Readable Stream.
-   The files must contain one line per street or driver, respectively.
-   The program then calculates a suitability score for each street and each driver using a simple algorithm.
-   Finally, the program assigns the best driver to each street and outputs the result to the console.
- This algorithm takes a `O(n^2)` cost.
