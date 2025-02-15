import { motion } from "framer-motion";

function HostelData() {
    const data = [
        { label: "Present Students", count: 120, color: "bg-blue-500" },
        { label: "Home-Going Students", count: 30, color: "bg-green-500" },
        { label: "Market-Going Students", count: 15, color: "bg-yellow-500" },
    ];

    return (
        <div className="bg-purple-300 px-10 w-full h-screen">
            {/* Navigation Bar */}
            <div className="flex justify-between items-center py-4">
                <div className="flex space-x-4">
                    <a
                        href=""
                        className="py-2 px-4 text-gray-500 font-semibold hover:text-teal-400 transition duration-300"
                    >
                        HOME
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a
                        href=""
                        className="py-2 px-4 text-gray-500 font-semibold hover:text-teal-400 transition duration-300"
                    >
                        DASHBOARD
                    </a>
                </div>
            </div>

            {/* Title Section */}
            <motion.div
                className="flex justify-center text-4xl font-bold text-gray-700 mt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                HOSTEL DATA
            </motion.div>

            {/* Data Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`m-auto flex flex-col justify-center ${item.color} p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-white`}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-center text-2xl font-semibold">{item.label}</div>
                        <div className="text-center text-4xl font-bold mt-4">{item.count}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default HostelData;