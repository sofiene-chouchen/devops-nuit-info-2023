const express = require("express");
const route = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//? get All useer
route.get("/", async (req, res) => {
  const Jobs = await prisma.job.findMany();
  res.send(Jobs);
});

//? get user with parames
route.get("/:name", async (req, res) => {
  const names = req.params.name;
  const data = await prisma.job.findMany({
    where: {
      categorieId: names,
    },
  });
  res.status(200).send(data);
});
//? add data in job
route.post("/", async (req, res) => {
  const data = req.body;
  const newJob = await prisma.job.create({
    // data: {
    //   name: "Tags",
    //   email: "contact@tags.tn",
    //   phone: 55560746,
    //   vile :"moanstir",
    //   description: "cafe mix marina ",
    //   localisation: "marina monastir 5000",
    //   latitude: 444.22,
    //   longitude: 333.33,
    //   categorieId: "cafe",

    // },
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      vile: data.vile,
      description: data.description,
      localisation: data.localisation,
      latitude: data.latitude,
      longitude: data.longitude,
      categorieId: data.categorieId,
    },
  });
  res.send(newJob);
});
//? Delete all
route.delete("/", async (req, res) => {
  const job = await prisma.job.deleteMany();
  res.status(200).send("deleted succusefuly");
});

route.patch("/", async (req, res) => {
  const update = await prisma.job.update({
    where: {
      name: "zitouna",
    },
    data: {
     vile :"monastir"
    },
  });
  res.status(200).send("updated");
});

module.exports = route;
