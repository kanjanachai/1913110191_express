exports.index = (req, res, next) => {
  res.status(200).json({
    fullname: "Kanjanachai Yaowarat",
  });
};

exports.bio = (req, res, next) => {
  res.status(200).json({
    fullname: "Kanjanachai Yaowarat",
    nickname: "Lin",
    hobby: "sleep",
    gitusername: "kanjanachai",
  });
};
