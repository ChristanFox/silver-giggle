const db = require("../config/connection");
const { User, Service } = require("../models");

db.once("open", async () => {
  await Service.deleteMany({});

  const services = await Service.insertMany([
    {
      name: "Hot Stone Massage",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "cookie-tin.jpg",
      price: 90,
      quantity: 1,
    },
    {
      name: "60 min Deep Tissue Massage",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "canned-coffee.jpg",
      price: 130,
      quantity: 1,
    },
    {
      name: "90 min Deep Tissue Massage",
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "toilet-paper.jpg",
      price: 165,
      quantity: 1,
    },
    {
      name: "60 min Sweedish Massage",
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "soap.jpg",
      price: 125,
      quantity: 1,
    },
    {
      name: "90 Min Sweedish Massage",
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "wooden-spoons.jpg",
      price: 165,
      quantity: 1,
    },
    {
      name: "Aroma Therapy with a twist",
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "camera.jpg",
      price: 30,
      quantity: 1,
    },
    {
      name: "60 min Lymphatic Drainage Massage",
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "tablet.jpg",
      price: 145,
      quantity: 1,
    },
    {
      name: "Detox Body Wrap",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "bedtime-book.jpg",
      price: 60,
      quantity: 1,
    },
    {
      name: "Herbal Body Wrap",
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "spinning-top.jpg",
      price: 50,
      quantity: 1,
    },
    {
      name: "Full Body Sugar Scrub",
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "plastic-horses.jpg",
      price: 65,
      quantity: 1,
    },
    {
      name: "Prenatal Massage",
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "teddy-bear.jpg",
      price: 150,
      quantity: 1,
    },
    {
      name: "Sports Massage",
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 150,
      quantity: 1,
    },
  ]);

  console.log("services seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        service: [services[0]._id, services[0]._id, services[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
