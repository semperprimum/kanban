export const countCompletedTasks = (arr) => {
  const completedTasks = arr.filter((task) => task.isCompleted);
  return completedTasks.length;
};
