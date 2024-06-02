import { deleteTaskById } from "../../../../services/api";

export async function DELETE(req, res) {
  const { id } = req.params;

  try {
    console.log("Deleting task with ID:", id);
    const result = await deleteTaskById(id);
    console.log("Delete result:", result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error deleting task:", error.message);
    res.status(404).json({ message: "Task not found" });
  }
}

export async function GET(req, res) {
  res.setHeader("Allow", ["DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

