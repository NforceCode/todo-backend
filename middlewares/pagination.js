module.exports = async (req, res, next) => {
  try {
    const {
      query: { page = 1, limit = 10 },
    } = req;

    req.pagination = {
      limit: !limit || limit <= 0 || limit > 20 ? 5 : limit,
      offset: (Number(page) - 1) * Number(limit),
    };

    next();
  } catch (err) {
    next(err);
  }
};
