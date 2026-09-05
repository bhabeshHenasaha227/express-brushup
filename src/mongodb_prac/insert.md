# 🍃 MongoDB Document Insertion Guide (`insertOne` & `insertMany`)

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Database](https://img.shields.io/badge/Database-NoSQL-blue?style=for-the-badge&logo=mongodb&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

<p align="center">
  <b>A complete reference guide for inserting single and multiple documents into a MongoDB collection using `insertOne` and `insertMany`.</b>
</p>

---

</div>

## 📌 Overview

In MongoDB, data is stored as **BSON documents** inside collections. You can insert documents into a collection using two primary methods:
* **`db.collection.insertOne()`** — Inserts a **single document**.
* **`db.collection.insertMany()`** — Inserts an **array of documents**.

---

## 🚀 Syntax Overview

```javascript
// Insert a single document
db.collection_name.insertOne({ field1: "Value", field2: Value })

// Insert multiple documents
db.collection_name.insertMany([
  { field1: "Value", field2: Value },
  { field1: "Value", field2: Value }
])