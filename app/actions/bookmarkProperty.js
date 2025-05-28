'use server';
import connectDB from "@/config/database";
import User from "@/models/Users";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(params) {
 
}

export default bookmarkProperty;