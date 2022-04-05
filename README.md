# Digital Movies CRUD using sequelize

# <img src="/public/img/logo-DH.png" alt="drawing" width="400"/>

## :ledger: Index

- [About](#beginner-about)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Development](#wrench-development)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [Developmen Environment](#nut_and_bolt-development-environment)


##  :beginner: About
This website is a project for [Digital House](https://www.mercadolibre.com.ar/) made with [MySQL](https://www.mysql.com/) db and [Sequelize](https://sequelize.org/).
- You can Create - Edit - Update - Delete (CRUD) movies and actors from the db.

## :zap: Usage
Check the Installation and Commands to use the project

###  :electric_plug: Installation
- To run this project, just clone the repo and run the following commands (make sure to run the commands on the directory of the project, use `pwd` to check it)

```
$ npm install sequelize-cli -g
$ npm install
```


### :notebook: Pre-Requisites

List all the pre-requisites the system needs to develop this project.

- [Node.js](https://nodejs.org/es/)
- [MySQL](https://www.mysql.com/)

###  :nut_and_bolt: Development Environment
Setting up the working environment for this project
- git clone https://github.com/juaniserrano/digitalMovies-sequelize
- Import the db `movies-db.sql` that can be found in this directory
- create .env with DB_USERNAME="" DB_password="" in order to insert the username and password into the sequelize config