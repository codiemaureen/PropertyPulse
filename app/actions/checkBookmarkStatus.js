'use server';
import connectDB from "@/config/database";
import User from "@/models/Users";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function checkBookmarkStatus(params) {
 await connectDB();

 const sessionUser = getSessionUser();

 if(!sessionUser || !sessionUser.userId){
  throw new Error('User must be logged in to bookmark')
 }

 const {userId} = sessionUser;

 const user = User.findById(userId);

 let isBookmarked = user.bookmarks.includes(propertyId);

 return {isBookmarked}
}

export default checkBookmarkStatus;