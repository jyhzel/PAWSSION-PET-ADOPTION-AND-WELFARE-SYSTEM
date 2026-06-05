import {
  FaPaw,
  FaClipboardList,
  FaUserFriends,
  FaHandsHelping,
} from "react-icons/fa";

const userDashboard = () => {
  return (
    <div className="flex gap-5">

      {/* LEFT CONTENT */}
      <div className="flex-1">

        {/* WELCOME CARD */}
        <div className="bg-blue-500 text-white rounded-2xl p-6">
          <h1 className="text-4xl font-bold">
            Welcome back, Jhyzzeel
          </h1>

          <p className="mt-2 text-lg">
            Ready to help a pet today?
          </p>
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-4 gap-4">

            {/* CARD 1 */}
            <div className="border rounded-xl p-4 hover:shadow-md cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPaw className="text-blue-700 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Find a Pet
                  </h3>

                  <p className="text-sm text-gray-500">
                    Browse pet looking for home
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border rounded-xl p-4 hover:shadow-md cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaClipboardList className="text-blue-700 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Continue Application
                  </h3>

                  <p className="text-sm text-gray-500">
                    View application status
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border rounded-xl p-4 hover:shadow-md cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaUserFriends className="text-blue-700 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Upcoming Interview
                  </h3>

                  <p className="text-sm text-gray-500">
                    See your schedule
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="border rounded-xl p-4 hover:shadow-md cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaHandsHelping className="text-blue-700 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Kamustahan Update
                  </h3>

                  <p className="text-sm text-gray-500">
                    Submit pet care update
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RECENT DONATION */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-5">
            Recent Donation
          </h2>

          <div className="border rounded-2xl p-5 flex items-center gap-5 hover:shadow-md">

            {/* GCASH ICON */}
            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold">
              G
            </div>

            {/* DONATION DETAILS */}
            <div>
              <h3 className="text-3xl font-bold text-blue-900">
                ₱300 Cash Donation
              </h3>

              <p className="text-gray-500">
                Sent via GCASH
              </p>

              <p className="mt-2 text-lg">
                Ref No: 4653636463111
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="w-80 border rounded-xl p-5 h-fit bg-white">

        <h2 className="font-bold text-xl mb-6">
          Upcoming Schedule
        </h2>

        <div>
          <h3 className="font-semibold text-lg">
            Interview Schedule
          </h3>

          <p className="text-gray-500 mt-3">
            Your interview schedule is set on
            date and time
          </p>
        </div>

      </div>

    </div>
  );
};

export default userDashboard;