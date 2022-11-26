exports.company = (req, res, next) => {
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
};
