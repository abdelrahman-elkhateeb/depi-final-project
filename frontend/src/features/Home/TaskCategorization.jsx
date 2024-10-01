import { useSelector } from "react-redux";
import taskCatig from "../../../public/Task Categorization.svg";
import { motion } from "framer-motion";

function TaskCategorization() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <section className="md:grid md:grid-cols-2 h-screen container mx-auto px-4">
      <div>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
          className={`${
            darkMode ? "text-dark-text" : "text-light-text"
          } md:text-7xl text-3xl mb-10 font-semibold`}
        >
          Task Categorization
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true }}
          className={`${
            darkMode ? "text-dark-text" : "text-light-text"
          } md:text-3xl text-xl font-medium`}
        >
          Organize your tasks into categories for better management. Group
          related tasks together and view them in specific categories for an
          efficient workflow.
        </motion.p>
      </div>
      <div>
        <img src={taskCatig} alt="" />
      </div>
    </section>
  );
}

export default TaskCategorization;
