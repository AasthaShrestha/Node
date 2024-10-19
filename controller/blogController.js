const { blogs } = require("../model");

exports.homePage = async (req, res) => {
  // tapaiko table ko j name xa same variable ko hunu vayena
  const datas = await blogs.findAll(); //findAll return the array
  //views vitra ko file render gardinxa
  res.render("home", { blogs: datas });
};

exports.singleBlog = async (req, res) => {
  const id = req.params.id;
  const blog = await blogs.findByPk(id);
  //returns object
  res.render("singleBlog.ejs", { blog: blog });
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/");
};

exports.createForm = (req, res) => {
  res.render("create");
};

exports.createBlog = async (req, res) => {
  const filename = req.file.filename;
  const { title, subtitle, description } = req.body;

  await blogs.create({
    title: title,
    subtitle: subtitle,
    description: description,
    image: filename,
  });
  res.send("Blog added Successfully");
};

exports.servicePage = (req, res) => {
  res.render("services.ejs", {
    sepcms: {
      name: "Aastha Shrestha",
      location: "Anamnagar",
      age: 22,
      message: "haha hehe",
    },
  });
};
