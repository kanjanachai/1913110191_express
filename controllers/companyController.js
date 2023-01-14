const Company = require("../models/company");

exports.company = async (req, res, next) => {
  const company = await Company.find();
  res.status(200).json({
    data: company,
  });
};

exports.insert = async (req, res, next) => {
  const { name, address } = req.body;

  let company = new Company({
    name: name,
    address: address
  });
  await company.save();

  res.status(200).json({
    message: "เพิ่มข้อมูลเรียบร้อยแล้ว",
  });
}

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Company.deleteOne({
      _id: id,
    });

    if (company.deletedCount === 0) {
      const error = new Error("ไม่สามารถลบข้อมูลได้ / ไม่พบข้อมูลผู้ใช้งาน");
      error.statusCode = 400;
      throw error;
    } else {
      res.status(200).json({
        message: "ลบข้อมูลเรียบร้อยแล้ว",
      });
    }
  } catch (error) {
    next(error)
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;

    const company = await Company.findOne({ _id: id});

    if (!company){
      const error = new Error("อีเมลนี้มีผู้ใช้งานในระบบแล้ว");
      error.statusCode = 400;
      throw error;
    } else {
      await Company.updateOne({
        name: name,
        address: address
      })
    }

    console.log(company)

    res.status(200).json({
      message: "แก้ไขข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    next(error)
  }
};


/* exports.company = (req, res, next) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "Techno Brave Asia Ltd.",
        address: {
          province: "Bangkok",
          postcode: "10400",
        },
      },
      {
        id: 2,
        name: "C.S.I.Group",
        address: {
          province: "Bangkok",
          postcode: "10500",
        },
      },
      {
        id: 3,
        name: "fcc service",
        address: {
          province: "angkok",
          postcode: "10310",
        },
      },
    ],
  });
}; */
