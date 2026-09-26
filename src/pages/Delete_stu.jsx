import { motion } from "framer-motion";

// Creating function DeleteStu
function Delete_stu() {
    return (
        <div className="bg-purple-100 px-10 w-full h-screen flex flex-col items-center">
            {/* Navigation Bar */}
            <div className="flex justify-between items-center w-full py-4">
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
                        CREATE
                    </a>
                    <a
                        href=""
                        className="py-2 px-4 text-gray-500 font-semibold hover:text-teal-400 transition duration-300"
                    >
                        SEARCH
                    </a>
                </div>
            </div>

            {/* Title Section */}
            <motion.div
                className="text-4xl font-bold text-gray-700 my-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                DELETE STUDENT
            </motion.div>

            {/* Input Fields Section */}
            <motion.div
                className="grid gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {["Enter Roll Number"].map((placeholder, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg p-4 shadow-lg w-4/4 mx-auto"
                        whileHover={{ scale: 1.04 }}
                    >
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full bg-transparent outline-none text-gray-700 text-lg"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Submit Button */}
            <motion.button
                className="bg-teal-400 text-white px-6 py-3 rounded-lg mt-10 hover:bg-teal-500 shadow-md transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
            >
                Submit
            </motion.button>
        </div>
    );
}

export default Delete_stu;