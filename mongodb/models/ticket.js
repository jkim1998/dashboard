import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ticketModel = mongoose.model("Ticket", TicketSchema);

export default ticketModel;
