const getUserDashboard = async (req, res) => {

  try {

    res.json({
      totalPets: 25,
      totalApplications: 3,
      totalDonations: 5,

      recommendedPets: [
        {
          id: 1,
          name: "Buddy",
          type: "Dog",
          breed: "Golden Retriever",
        },

        {
          id: 2,
          name: "Mingming",
          type: "Cat",
          breed: "Persian",
        },
      ],
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getUserDashboard,
};