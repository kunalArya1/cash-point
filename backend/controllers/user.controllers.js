export const home = (req, res, next) => {
  res.status(200).json({
    message: "Welcome to the Cash Point API",
  });
};
