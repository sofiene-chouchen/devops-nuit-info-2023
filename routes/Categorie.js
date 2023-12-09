const express = require("express");
const route = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

route.post("/add", async (req, res) => {
  const addone = await prisma.categorie.create({
    data: {
      name: "mécanicien",
      image:
        "https://res.cloudinary.com/dif6os1pq/image/upload/v1681011550/pagejaune/mecanicien_1_velvgu.jpg",
    },
  });
  res.status(200).send(addone);
});
route.post("/", async (req, res) => {
  const categorie = await prisma.categorie.createMany({
    data: [
      {
        name: "bank",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007314/pagejaune/Bank_1_vwptdw.jpg",
      },
      {
        name: "pharamcie",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007317/pagejaune/pharmacie_1_objef9.jpg",
      },
      {
        name: "assurance",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007319/pagejaune/assurance_1_wiohec.jpg",
      },
      {
        name: "hotel",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007298/pagejaune/hotel_1_thw0jl.jpg",
      },
      {
        name: "resturant",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007306/pagejaune/restaurant_1_xq5u2t.jpg",
      },
      {
        name: "cafe",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007315/pagejaune/cafe_1_n8rtbv.jpg",
      },
      {
        name: "avocat",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007305/pagejaune/avocat_1_oysojb.jpg",
      },
      {
        name: "agence de voyage",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681007315/pagejaune/travel_1_wg0fff.jpg",
      },
      {
        name: "mécanicien",
        image:
          "https://res.cloudinary.com/dif6os1pq/image/upload/v1681011550/pagejaune/mecanicien_1_velvgu.jpg",
      },
    ],
  });
  res.send(categorie);
});

route.get("/", async (req, res) => {
  const categorie = await prisma.categorie.findMany();
  res.send(categorie);
});

route.delete("/", async (req, res) => {
  const categore = await prisma.categorie.deleteMany();
  res.status(200).json({ message: "Categories deleted successfully" });
});
module.exports = route;
