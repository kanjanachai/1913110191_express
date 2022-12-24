const Shop = require("../models/shop");
const Menu = require("../models/menu");

exports.shopmenu = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findById(id).populate("menus");
    if (!shop) {
      throw new Error("ไม่พบผู้ใช้งาน");
    } else {
      res.status(200).json({
        data: shop,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด: " + error.message,
      },
    });
  }
};

/* exports.shopmenu = async (req, res, next) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findOne({ _id: id });
    const shopWithPhotoDomain = shop.map((shop, index) => {
      return {
        id: shop.id,
        name: shop.name,
        photo: "http://localhost:3000/images/" + shop.photo,
        location: shop.location,
      };
    });

    if (!shop) {
      throw new Error("ไม่พบผู้ใช้งาน");
    } else {
      res.status(200).json({
        data: shopWithPhotoDomain,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด: " + error.message,
      },
    });
  }
}; */

exports.shop = async (req, res, next) => {
  const shop = await Shop.find();

  const shopWithPhotoDomain = shop.map((shop, index) => {
    return {
      id: shop._id,
      name: shop.name,
      photo: "http://localhost:3000/images/" + shop.photo,
      location: shop.location,
    };
  });
  res.status(200).json({
    data: shopWithPhotoDomain,
  });
};

/* exports.shop = async (req, res, next) => {
  const shops = await Shop.findById().populate("Menu");

  const shopWithPhotoDomain = shops.map((shop, index) => {
    return {
      id: shop._id,
      name: shop.name,
      photo: "http://localhost:3000/images/" + shop.photo,
      location: shop.location,
    };
  });
  res.status(200).json({
    data: shopWithPhotoDomain,
  });
}; */

exports.menu = async (req, res, next) => {
  // const menu = await Menu.find().select('+name -price');
  // const menu = await Menu.find().where('price').gt(100);
  const menu = await Menu.find().populate("shop");
  res.status(200).json({
    data: menu,
  });
};
