class BadgeController {
  static async get(req, res) {
    try {
      const badges = [
        { id: 1, title: 'react' },
        { id: 2, title: 'ssr' },
        { id: 3, title: 'webpack' },
        { id: 4, title: 'tailwind css' },
        { id: 5, title: 'node' },
        { id: 6, title: 'express' },
        { id: 7, title: 'postcss' },
      ];

      res.status(200).json({
        success: true,
        message: 'success!',
        badges,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default BadgeController;
