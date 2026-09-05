# 🍃 MongoDB Cheatsheet & Terminal Workflow

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Database](https://img.shields.io/badge/Database-NoSQL-blue?style=for-the-badge&logo=databricks&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

<p align="center">
  <b>A step-by-step interactive log of MongoDB shell (mongosh) commands for managing databases & collections.</b>
</p>

---

</div>

## 📌 Interactive Command History

Below is a breakdown of the database operations performed in the MongoDB shell session:

```sql
> use school
switched to db school

> show dbs
Bhabesh_demo   72.00 KiB
customer_hub   56.00 KiB
sample_mflix  184.17 MiB
admin                0 B
local                0 B

> db.createCollection("students")
{ ok: 1 }

> show collections
students

> db.createCollection("libraries")
{ ok: 1 }

> show collections
libraries
students

> db.students.renameCollection("student")
{ ok: 1 }

> db.libraries.renameCollection("library")
{ ok: 1 }

> db.library.drop()
true